/** @jest-environment ./src/utils/enableVersionCheck.ts */

import {
  createTestNode,
  jsonTestEvents,
  matchServerVersion,
  optionalTest,
} from "@test-utils";

import {
  KurrentDBClient,
  WrongExpectedVersionError,
  NO_STREAM,
  StreamDeletedError,
  MaxAppendSizeExceededError,
  AccessDeniedError,
  DeadlineExceededError,
} from "@kurrent/kurrentdb-client";

describe("appendToStream - errors", () => {
  const node = createTestNode();
  let client!: KurrentDBClient;

  beforeAll(async () => {
    await node.up();
    client = KurrentDBClient.connectionString(node.connectionString());
  });

  afterAll(async () => {
    await node.down();
  });

  describe.each([
    ["Batch append (>21.10)", matchServerVersion`>=21.10`],
    ["Normal Append", true],
  ])("%s", (prefix, supported) => {
    optionalTest(supported)("WrongExpectedVersion", async () => {
      const STREAM_NAME = `${prefix}_no_stream_here_but_there_is`;

      await client.appendToStream(STREAM_NAME, jsonTestEvents());

      try {
        const result = await client.appendToStream(
          STREAM_NAME,
          jsonTestEvents(),
          {
            streamState: "no_stream",
          }
        );

        expect(result).toBe("unreachable");
      } catch (error) {
        expect(error).toBeInstanceOf(WrongExpectedVersionError);

        if (error instanceof WrongExpectedVersionError) {
          expect(error.streamName).toBe(STREAM_NAME);
          expect(error.expectedState).toBe(NO_STREAM);
          expect(error.actualState).toBeGreaterThanOrEqual(1);
        }
      }
    });

    optionalTest(supported)("StreamDeleted", async () => {
      const STREAM_NAME = `${prefix}_i_will_be_deleted`;

      await client.appendToStream(STREAM_NAME, jsonTestEvents());
      await client.tombstoneStream(STREAM_NAME);

      try {
        const result = await client.appendToStream(
          STREAM_NAME,
          jsonTestEvents()
        );

        expect(result).toBe("unreachable");
      } catch (error) {
        expect(error).toBeInstanceOf(StreamDeletedError);

        if (error instanceof StreamDeletedError) {
          expect(error.streamName).toBe(STREAM_NAME);
        }
      }
    });

    optionalTest(supported)("AccessDenied", async () => {
      const STREAM_NAME = `${prefix}_no_entry`;

      await client.appendToStream(STREAM_NAME, jsonTestEvents());

      await client.setStreamMetadata(STREAM_NAME, {
        acl: {
          writeRoles: ["some_user"],
        },
      });

      try {
        const result = await client.appendToStream(
          STREAM_NAME,
          jsonTestEvents(),
          {
            credentials: { username: "AzureDiamond", password: "hunter2" },
          }
        );

        expect(result).toBe("unreachable");
      } catch (error) {
        expect(error).toBeInstanceOf(AccessDeniedError);
      }
    });

    optionalTest(supported)("DeadlineExceeded", async () => {
      const STREAM_NAME = `${prefix}_deadline`;

      try {
        await client.appendToStream(STREAM_NAME, jsonTestEvents(30_000), {
          deadline: 1,
        });
        expect("this point").toBe("unreachable");
      } catch (error) {
        expect(error).toBeInstanceOf(DeadlineExceededError);
      }
    });

    optionalTest(supported)("MaximumAppendSizeExceeded", async () => {
      const STREAM_NAME = `${prefix}_i_am_too_many`;

      try {
        const result = await client.appendToStream(
          STREAM_NAME,
          jsonTestEvents(40_000)
        );

        expect(result).toBe("unreachable");
      } catch (error) {
        expect(error).toBeInstanceOf(MaxAppendSizeExceededError);

        if (error instanceof MaxAppendSizeExceededError) {
          expect(typeof error.maxAppendSize).toBe("number");
        }
      }
    });
  });
});

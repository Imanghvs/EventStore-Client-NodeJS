// source: gossip.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var shared_pb = require('./shared_pb.js');
goog.object.extend(proto, shared_pb);
goog.exportSymbol('proto.event_store.client.gossip.ClusterInfo', null, global);
goog.exportSymbol('proto.event_store.client.gossip.EndPoint', null, global);
goog.exportSymbol('proto.event_store.client.gossip.MemberInfo', null, global);
goog.exportSymbol('proto.event_store.client.gossip.MemberInfo.VNodeState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.gossip.ClusterInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.event_store.client.gossip.ClusterInfo.repeatedFields_, null);
};
goog.inherits(proto.event_store.client.gossip.ClusterInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.gossip.ClusterInfo.displayName = 'proto.event_store.client.gossip.ClusterInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.gossip.EndPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.gossip.EndPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.gossip.EndPoint.displayName = 'proto.event_store.client.gossip.EndPoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.event_store.client.gossip.MemberInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.event_store.client.gossip.MemberInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.event_store.client.gossip.MemberInfo.displayName = 'proto.event_store.client.gossip.MemberInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.event_store.client.gossip.ClusterInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.gossip.ClusterInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.gossip.ClusterInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.gossip.ClusterInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.gossip.ClusterInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.event_store.client.gossip.MemberInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.gossip.ClusterInfo}
 */
proto.event_store.client.gossip.ClusterInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.gossip.ClusterInfo;
  return proto.event_store.client.gossip.ClusterInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.gossip.ClusterInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.gossip.ClusterInfo}
 */
proto.event_store.client.gossip.ClusterInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.event_store.client.gossip.MemberInfo;
      reader.readMessage(value,proto.event_store.client.gossip.MemberInfo.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.gossip.ClusterInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.gossip.ClusterInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.gossip.ClusterInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.gossip.ClusterInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.event_store.client.gossip.MemberInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MemberInfo members = 1;
 * @return {!Array<!proto.event_store.client.gossip.MemberInfo>}
 */
proto.event_store.client.gossip.ClusterInfo.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.event_store.client.gossip.MemberInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.event_store.client.gossip.MemberInfo, 1));
};


/**
 * @param {!Array<!proto.event_store.client.gossip.MemberInfo>} value
 * @return {!proto.event_store.client.gossip.ClusterInfo} returns this
*/
proto.event_store.client.gossip.ClusterInfo.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.event_store.client.gossip.MemberInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.event_store.client.gossip.MemberInfo}
 */
proto.event_store.client.gossip.ClusterInfo.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.event_store.client.gossip.MemberInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.event_store.client.gossip.ClusterInfo} returns this
 */
proto.event_store.client.gossip.ClusterInfo.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.gossip.EndPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.gossip.EndPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.gossip.EndPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.gossip.EndPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.gossip.EndPoint}
 */
proto.event_store.client.gossip.EndPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.gossip.EndPoint;
  return proto.event_store.client.gossip.EndPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.gossip.EndPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.gossip.EndPoint}
 */
proto.event_store.client.gossip.EndPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.gossip.EndPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.gossip.EndPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.gossip.EndPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.gossip.EndPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.event_store.client.gossip.EndPoint.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.gossip.EndPoint} returns this
 */
proto.event_store.client.gossip.EndPoint.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 port = 2;
 * @return {number}
 */
proto.event_store.client.gossip.EndPoint.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.event_store.client.gossip.EndPoint} returns this
 */
proto.event_store.client.gossip.EndPoint.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.event_store.client.gossip.MemberInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.event_store.client.gossip.MemberInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.event_store.client.gossip.MemberInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.gossip.MemberInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceId: (f = msg.getInstanceId()) && shared_pb.UUID.toObject(includeInstance, f),
    timeStamp: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isAlive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    httpEndPoint: (f = msg.getHttpEndPoint()) && proto.event_store.client.gossip.EndPoint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.event_store.client.gossip.MemberInfo}
 */
proto.event_store.client.gossip.MemberInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.event_store.client.gossip.MemberInfo;
  return proto.event_store.client.gossip.MemberInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.event_store.client.gossip.MemberInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.event_store.client.gossip.MemberInfo}
 */
proto.event_store.client.gossip.MemberInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new shared_pb.UUID;
      reader.readMessage(value,shared_pb.UUID.deserializeBinaryFromReader);
      msg.setInstanceId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTimeStamp(value);
      break;
    case 3:
      var value = /** @type {!proto.event_store.client.gossip.MemberInfo.VNodeState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAlive(value);
      break;
    case 5:
      var value = new proto.event_store.client.gossip.EndPoint;
      reader.readMessage(value,proto.event_store.client.gossip.EndPoint.deserializeBinaryFromReader);
      msg.setHttpEndPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.event_store.client.gossip.MemberInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.event_store.client.gossip.MemberInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.event_store.client.gossip.MemberInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.event_store.client.gossip.MemberInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      shared_pb.UUID.serializeBinaryToWriter
    );
  }
  f = message.getTimeStamp();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getIsAlive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHttpEndPoint();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.event_store.client.gossip.EndPoint.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.event_store.client.gossip.MemberInfo.VNodeState = {
  INITIALIZING: 0,
  DISCOVERLEADER: 1,
  UNKNOWN: 2,
  PREREPLICA: 3,
  CATCHINGUP: 4,
  CLONE: 5,
  FOLLOWER: 6,
  PRELEADER: 7,
  LEADER: 8,
  MANAGER: 9,
  SHUTTINGDOWN: 10,
  SHUTDOWN: 11,
  READONLYLEADERLESS: 12,
  PREREADONLYREPLICA: 13,
  READONLYREPLICA: 14,
  RESIGNINGLEADER: 15
};

/**
 * optional event_store.client.UUID instance_id = 1;
 * @return {?proto.event_store.client.UUID}
 */
proto.event_store.client.gossip.MemberInfo.prototype.getInstanceId = function() {
  return /** @type{?proto.event_store.client.UUID} */ (
    jspb.Message.getWrapperField(this, shared_pb.UUID, 1));
};


/**
 * @param {?proto.event_store.client.UUID|undefined} value
 * @return {!proto.event_store.client.gossip.MemberInfo} returns this
*/
proto.event_store.client.gossip.MemberInfo.prototype.setInstanceId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.gossip.MemberInfo} returns this
 */
proto.event_store.client.gossip.MemberInfo.prototype.clearInstanceId = function() {
  return this.setInstanceId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.gossip.MemberInfo.prototype.hasInstanceId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 time_stamp = 2;
 * @return {string}
 */
proto.event_store.client.gossip.MemberInfo.prototype.getTimeStamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.event_store.client.gossip.MemberInfo} returns this
 */
proto.event_store.client.gossip.MemberInfo.prototype.setTimeStamp = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional VNodeState state = 3;
 * @return {!proto.event_store.client.gossip.MemberInfo.VNodeState}
 */
proto.event_store.client.gossip.MemberInfo.prototype.getState = function() {
  return /** @type {!proto.event_store.client.gossip.MemberInfo.VNodeState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.event_store.client.gossip.MemberInfo.VNodeState} value
 * @return {!proto.event_store.client.gossip.MemberInfo} returns this
 */
proto.event_store.client.gossip.MemberInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool is_alive = 4;
 * @return {boolean}
 */
proto.event_store.client.gossip.MemberInfo.prototype.getIsAlive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.event_store.client.gossip.MemberInfo} returns this
 */
proto.event_store.client.gossip.MemberInfo.prototype.setIsAlive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional EndPoint http_end_point = 5;
 * @return {?proto.event_store.client.gossip.EndPoint}
 */
proto.event_store.client.gossip.MemberInfo.prototype.getHttpEndPoint = function() {
  return /** @type{?proto.event_store.client.gossip.EndPoint} */ (
    jspb.Message.getWrapperField(this, proto.event_store.client.gossip.EndPoint, 5));
};


/**
 * @param {?proto.event_store.client.gossip.EndPoint|undefined} value
 * @return {!proto.event_store.client.gossip.MemberInfo} returns this
*/
proto.event_store.client.gossip.MemberInfo.prototype.setHttpEndPoint = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.event_store.client.gossip.MemberInfo} returns this
 */
proto.event_store.client.gossip.MemberInfo.prototype.clearHttpEndPoint = function() {
  return this.setHttpEndPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.event_store.client.gossip.MemberInfo.prototype.hasHttpEndPoint = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.event_store.client.gossip);

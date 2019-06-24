/**
 * Error codes fall into one of four categories:
 * 1XX errors: Basic errors
 * 2XX errors: UI errors
 * 3XX errors: Endpoint errors
 * 4XX errors: Core errors
 */
export class AnswersBaseError extends Error {
  constructor (errorCode, message, boundary, causedBy) {
    super(message);
    this.errorCode = errorCode;
    this.errorMessage = message;
    this.boundary = boundary;
    this.causedBy = causedBy;
    this.reported = false;
  }

  toJson () {
    return JSON.stringify(this);
  }

  static from (builtinError, boundary) {
    const error = new AnswersBasicError(builtinError.message, boundary);
    error.stack = builtinError.stack;
    return error;
  }
}

export class AnswersBasicError extends AnswersBaseError {
  constructor (message, boundary, causedBy) {
    super(100, message, boundary, causedBy);
  }
}

export class AnswersUiError extends AnswersBaseError {
  constructor (message, boundary, causedBy) {
    super(200, message, boundary, causedBy);
  }
}

export class AnswersComponentError extends AnswersBaseError {
  constructor (message, component, causedBy) {
    super(201, message, component, causedBy);
  }
}

export class AnswersEndpointError extends AnswersBaseError {
  constructor (message, boundary, causedBy) {
    super(300, message, boundary, causedBy);
  }
}

export class AnswersCoreError extends AnswersBaseError {
  constructor (message, boundary, causedBy) {
    super(400, message, boundary, causedBy);
  }
}

export class AnswersStorageError extends AnswersBaseError {
  constructor (message, storageKey, data, causedBy) {
    super(401, message, 'Storage', causedBy);
    this.storageKey = storageKey;
    this.data = data;
  }
}

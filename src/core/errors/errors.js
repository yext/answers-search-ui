/** @module Errors */

/**
 * AnswersBaseError is an extension of the base Error object.
 * This is the object that is used to when reporting to the server.
 * @extends Error
 *
 * Error codes fall into one of four categories:
 * 1XX errors: Basic errors
 * 2XX errors: UI errors
 * 3XX errors: Endpoint errors
 * 4XX errors: Core errors
 */
export class AnswersBaseError extends Error {
  constructor (errorCode, message, boundary = 'unknown', causedBy) {
    super(message);
    this.errorCode = errorCode;
    this.errorMessage = message;
    this.boundary = boundary;
    this.reported = false;

    if (causedBy) {
      this.causedBy = causedBy instanceof AnswersBaseError
        ? causedBy
        : AnswersBaseError.from(causedBy);
      this.stack = `${this.stack}\nCaused By: ${this.causedBy.stack}`;
    }
  }

  toJson () {
    return JSON.stringify(this);
  }

  toString () {
    let string = `${this.errorMessage} (${this.boundary})`;
    if (this.causedBy) {
      string += `\n  Caused By: ${this.causedBy.toString()}`;
    }
    return string;
  }

  static from (builtinError, boundary) {
    const error = new AnswersBasicError(builtinError.message, boundary);
    error.stack = builtinError.stack;
    return error;
  }
}

/**
 * AnswersBasicError is a wrapper around all the built-in errors
 * e.g. undefined variables, incorrect syntax, types, missing methods, etc.
 * @extends AnswersBaseError
 */
export class AnswersBasicError extends AnswersBaseError {
  constructor (message, boundary, causedBy) {
    super(100, message, boundary, causedBy);
  }
}

/**
 * AnswersUiError used for things like DOM errors.
 * @extends AnswersBaseError
 */
export class AnswersConfigError extends AnswersBaseError {
  constructor (message, boundary, causedBy) {
    super(101, message, boundary, causedBy);
  }
}

/**
 * AnswersUiError used for things like DOM errors.
 * @extends AnswersBaseError
 */
export class AnswersUiError extends AnswersBaseError {
  constructor (message, boundary, causedBy) {
    super(200, message, boundary, causedBy);
  }
}

/**
 * AnswersComponentError is used for Component oriented errors
 * e.g. failure to render, or catching unknowns.
 * @extends AnswersBaseError
 */
export class AnswersComponentError extends AnswersBaseError {
  constructor (message, component, causedBy) {
    super(201, message, component, causedBy);
  }
}

/**
 * AnswersEndpointError represents all network related errors.
 * @extends AnswersBaseError
 */
export class AnswersEndpointError extends AnswersBaseError {
  constructor (message, boundary, causedBy) {
    super(300, message, boundary, causedBy);
  }
}

/**
 * AnswersCoreError represents errors for precondition failures in the core library
 * @extends AnswersBaseError
 */
export class AnswersCoreError extends AnswersBaseError {
  constructor (message, boundary, causedBy) {
    super(400, message, boundary, causedBy);
  }
}

/**
 * AnswersStorageError represents storage related errors
 * @extends AnswersBaseError
 */
export class AnswersStorageError extends AnswersBaseError {
  constructor (message, storageKey, data, causedBy) {
    super(401, message, 'Storage', causedBy);
    this.storageKey = storageKey;
    this.data = data;
  }
}

/**
 * AnswersAnalyticsError is used for errors when reporting analytics
 * @extends AnswersBaseError
 */
export class AnswersAnalyticsError extends AnswersBaseError {
  constructor (message, event, causedBy) {
    super(402, message, 'Analytics', causedBy);
    this.event = event;
  }
}

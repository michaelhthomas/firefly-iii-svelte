import type { ResponseError } from "./runtime";
import type { ValidationError } from "./models/ValidationError";

function isResponseError(e: unknown): e is ResponseError {
  return e != null &&
  typeof e === 'object' &&
  !Array.isArray(e) &&
  'name' in e &&
  e.name === 'ResponseError'
}

type ValidationResponseError = ResponseError & {
  response: Response & {
    status: 422,
    body: ValidationError
  }
}

function isValidationResponseError(e: ResponseError): e is ValidationResponseError {
  return e.response.status === 422;
}

export function prettyPrintError(e: unknown): string {
  if (!isResponseError(e)) return String(e);

  if (isValidationResponseError(e)) {
    return e.response.body.message ?? "Validation error";
  }

  return String(e);
}

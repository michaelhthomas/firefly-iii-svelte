import type { ApiError } from "./core/ApiError";
import type { ValidationError } from "./models/ValidationError";

function isApiError(e: unknown): e is ApiError {
  return e != null
  &&
  typeof e === 'object' &&
  !Array.isArray(e) &&
  'name' in e &&
  e.name === 'ApiError'
}

type ValidationApiError = ApiError & {
  status: 422,
  body: ValidationError
}

function isValidationError(e: ApiError): e is ValidationApiError {
  return e.status === 422
}

export function prettyPrintError(e: unknown): string {
  if (!isApiError(e)) return String(e);

  if (isValidationError(e)) {
    return e.body.message;
  }

  return String(e);
}

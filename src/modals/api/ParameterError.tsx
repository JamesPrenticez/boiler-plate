export class ParameterError extends Error {
  constructor(message: string, details?: string, fieldName?: string) {
    super(message);
    this.details = details;
    this.fieldName = fieldName;
  }

  details?: string;
  fieldName?: string;
}

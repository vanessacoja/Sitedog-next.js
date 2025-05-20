export class ApiError extends Error {
  public statusCode: number;
  public details?: any;

  constructor(message: string, statusCode: number, details?: any) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.details = details;

    // Preserve the prototype chain
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

// Função para criar um erro de API
export function createApiError(message: string, statusCode: number, details?: any): ApiError {
  return new ApiError(message, statusCode, details);
}

// Exemplo de uso
// throw createApiError('Recurso não encontrado', 404);

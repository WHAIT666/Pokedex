class PokemonBadRequest extends Error {
    code: number;
  
    constructor(message?: string) {
      super(message || "Error - Bad request: check the API docs.");
      this.name = 'PokemonBadRequest';
      this.code = 400;
      Object.defineProperty(this, 'message', {
        enumerable: true,
      });
    }
  }
  
  class PokemonNotFoundError extends PokemonBadRequest {
    constructor() {
      super("Error - Pokemon not found.");
      this.name = 'PokemonNotFoundError';
      this.code = 404;
    }
  }
  
  class PokemonDuplicateError extends PokemonBadRequest {
    constructor() {
      super("Error - PokemonDuplicateError: The Pokemon has already been inserted.");
      this.name = 'PokemonDuplicateError';
      this.code = 400;
    }
  }
  
  class PokemonMissingIDError extends PokemonBadRequest {
    constructor() {
      super("Bad request: Missing Pokemon Id. Check the API doc.");
      this.name = 'PokemonMissingIDError';
      this.code = 400;
    }
  }
  
  class PokemonNoSuchRouteError extends PokemonBadRequest {
    constructor() {
      super("Error: Improper Route or request type. Check the API doc.");
      this.name = 'PokemonNoSuchRouteError';
      this.code = 404;
    }
  }
  
  class DatabaseError extends Error {
    code: number;
  
    constructor(message: string) {
      super(`Database error: ${message}`);
      this.name = 'PokemonDbError';
      this.code = 500;
      Object.defineProperty(this, 'message', {
        enumerable: true,
      });
    }
  }
  
  class AuthError extends Error {
    code: number;
  
    constructor(message: string) {
      super(message);
      this.name = 'AuthError';
      this.code = 401;
      Object.defineProperty(this, 'message', {
        enumerable: true,
      });
    }
  }
  
  class BadRequest extends Error {
    code: number;
  
    constructor(message: string) {
      super(message);
      this.name = 'BadRequest';
      this.code = 400;
      Object.defineProperty(this, 'message', {
        enumerable: true,
      });
    }
  }
  
  export {
    PokemonBadRequest,
    DatabaseError,
    AuthError,
    PokemonMissingIDError,
    PokemonNotFoundError,
    PokemonDuplicateError,
    PokemonNoSuchRouteError,
    BadRequest,
  };
  
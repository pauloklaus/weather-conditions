class ValidationError extends Error {
    field;

    constructor(message, field) {
      super(message);
      this.name = this.constructor.name;
      this.field = field;
    }
}

export default ValidationError;

class HttpStatusCode {
  static get OK() { return 200; }
  static get NOT_FOUND() { return 404; }
  static get UNAUTHORIZED() { return 401; }
  static get INTERNAL_SERVER_ERROR() { return 500; }
}

export default HttpStatusCode;

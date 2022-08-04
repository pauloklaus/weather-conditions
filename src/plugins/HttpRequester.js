import HttpStatusCode from "@/enums/HttpStatusCode";
import InvalidURLError from "@/errors/InvalidURLError";
import NotFoundError from "@/errors/NotFoundError";
import UnauthorizedAccessError from "@/errors/UnauthorizedAccessError";
import InternalServerError from "@/errors/InternalServerError";

class HttpRequester {
  constructor(appId, baseUrl) {
    this._appId = appId;
    this._baseUrl = baseUrl;
  }

  _buildFullUrl(route) {
    try {
      return new URL(`${this._baseUrl}${route}`);
    } catch(error) {
      throw new InvalidURLError();
    }
  }

  _buildGetUrl(route, params) {
    const url = this._buildFullUrl(route);

    url.searchParams.append("appid", this._appId);
    for (const param in params) {
      url.searchParams.append(param, params[param]);
    }

    return url;
  }

  async get(route = "", params = {}) {
    const response = await fetch(this._buildGetUrl(route, params));

    if (response.status === HttpStatusCode.NOT_FOUND) {
      throw new NotFoundError();
    }

    if (response.status === HttpStatusCode.UNAUTHORIZED) {
      throw new UnauthorizedAccessError();
    }

    if (response.status !== HttpStatusCode.OK) {
      throw new InternalServerError();
    }

    return await response.json();
  }
}

export default HttpRequester;

import InvalidURLError from "@/errors/InvalidURLError";

class HttpRequester {
  constructor(appId, baseUrl) {
    this._appId = appId;
    this._baseUrl = baseUrl;
  }

  _buildFullUrl(route) {
    try {
      return new URL(`${this._baseUrl}${route}`);
    } catch(error) {
      throw new InvalidURLError("Error fetching weather data.");
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
    const url = this._buildGetUrl(route, params);
    const response = await fetch(url);
    return await response.json();
  }
}

export default HttpRequester;

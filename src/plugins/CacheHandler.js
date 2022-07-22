class CacheHandler {
  constructor(expiresTimeInSecs = 600) {
    this._expiresTimeInSecs = expiresTimeInSecs * 1000;
  }

  _buildKey(key) {
    return `cache-${key.toLowerCase()}`;
  }

  _dateField() {
    return "date";
  }

  remove(key) {
    sessionStorage.removeItem(this._buildKey(key));
  }

  get(key) {
    const cacheData = sessionStorage.getItem(this._buildKey(key));
    return !cacheData ? undefined : JSON.parse(cacheData);
  }

  set(key, cacheJson) {
    const storeCacheJson = JSON.stringify({
      [this._dateField()]: new Date,
      ...cacheJson,
    });

    sessionStorage.setItem(this._buildKey(key), storeCacheJson);
  }

  isValid(key) {
    const cacheJson = this.get(key);

    if (!cacheJson) {
      return false;
    }

    if (new Date() - new Date(cacheJson[this._dateField()]) >= this._expiresTimeInSecs) {
      this.remove(key);
      return false;
    }

    return true;
  }
}

export default CacheHandler;

# Weather Now

Web interface to visualize the weather of some cities using data retrieved from the openweathermap.org portal.

## Preparing a local environment

You need to configure the .env.local file with some values, as in the following example:

```env
BASE_URL=/
VUE_APP_URL=https://api.openweathermap.org/data/2.5/
VUE_APP_KEY_ID=[YOUR_API_KEY]
```

To get the key for the **VUE_APP_KEY_ID** parameter and the URL for the **VUE_APP_URL** parameter, you need to create an account on [openweathermap.org](https://openweathermap.org).

After confirming your registration, you will receive an email with an example of a request.

You can also check the necessary parameters in the .env.template file.

## Run locally (on your operating system)

To run locally, you need to install node version 16 (see installation details at [nodejs.org](https://nodejs.org/)).

Then run the commands:

```sh
git clone https://github.com/pauloklaus/weather-now/
cd weather-now
npm install
npm run serve
```

The application can be accessed via browser via http://localhost:8080

To run the tests:

```sh
npm run test:unit
```

## Run with docker-compose

```sh
docker-compose up
```

With docker-compose, dependencies are automatically installed, tests are run and the application is launched.

The application can be accessed via browser via http://localhost:8080

## Run with makefile + docker

```sh
make install
make run
```

The application can be accessed via browser via http://localhost:8080

To run the tests:

```sh
make test
```

# Weather Now

Web interface to visualize the weather of some cities using data retrieved from the openweathermap.org portal.

## Preparing a local environment

The application runs under docker, so you need to have it installed on your computer. Follow the installation steps on the official docker website: [docs.docker.com/get-docker](https://docs.docker.com/get-docker/)

Next, you need to configure the .env.local file with some values, as in the following example:

```env
BASE_URL=/
VUE_APP_URL=https://api.openweathermap.org/data/2.5/
VUE_APP_KEY_ID=[YOUR_API_KEY]
```

To get the key for the **VUE_APP_KEY_ID** parameter and the URL for the **VUE_APP_URL** parameter, you need to create an account on [openweathermap.org](https://openweathermap.org).

After confirming your registration, you will receive an email with an example of a request.

You can also check the necessary parameters in the .env.template file.

Then you need to install the application's dependencies:

```sh
make install
```

## Run

```sh
make run
```

## Run unit tests

```sh
make test
```

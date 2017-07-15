# AngularJS & ClashRoyale Api

I needed to make some practice with AngularJS and API. I wanted to create a simple app which get JSON data from an API response and structure the view to show multiple objects (index) or a single object (detail).

### Clash Royale API

I have choosen the Clash Royale API by Martin Carrera and the images he provide on his repository. [Take a look](https://github.com/martincarrera/clash-royale-api).
I have developer my application using only to the Arenas and the Cards endpoints.

### Getting data

To make the http request to the API server I have created a factory. This is the core of the app:

```js
var api = 'http://www.clashapi.xyz/api/';

function request(url) {
  return $http.get(url).then(
    function resultHandler(data) {
      if (data.status !== 200) {
        throw new Error('Webserver responded with HTTP STATUS: ' + data.status);
      }
        return data.data;
      }
  );
}
```

## Built With

* Angular JS (1.6.4)
* Bootstrap (3.3.7)
## Authors

* **Giuseppe Garbin** - *Web Marketing Specialist @ Garmin* - [Visit my website](https://www.giuseppegarbin.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

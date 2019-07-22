function Ymaps() {
  const url = "https://cors-anywhere.herokuapp.com/http://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU&";
    return fetch(`${url}`);
  }
export default Ymaps;
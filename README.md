Пункты для иправления:
1. ~~node_modules и .codesandbox в репозитории, нет .gitignore~~. 
2. ~~Возможно, Redux в таком простом приложении несколько избыточен~~
3. Секретные ключи в коде - 
4. ~~IP Location сервис работает не всегда точно, в данном случае он определил, что клиент находится в Минске, хотя это был Витебск~~
5. ~~Разделение на сервисы - это хорошая идея, но использование ООП в данном случае не обосновано~~
6. ~~Типы экшенов лучше хранить в константах. Но, так как один из пунктов улучшения - это исключение Редакса, то данный пункт носит лишь информативный характер~~
7. ~~console.log~~
8. ~~Относительные импорты~~
9. ~~setTimeout~~
10. ~~componentDidMount и searchWeatherForCity излишне перегружены, рекомендуется вынести из них функциональность, не связанную с компонентом напрямую~~
11. ~~Не стоит обращаться к DOM элементам напрямую без видимой на то причины. Для получения значения input следует использовать onChange и value в купе с useState~~
12. В данном случае используются два погодных сервиса. Как бы сильно перегрузилась логика определения сервиса, если бы их было 10 или 50? Рекомендуется реализовать более универсальный алгоритм - **РЕАЛИЗОВАЛА ВОЗМОЖНО НЕ САМЫЙ УНИВЕРСАЛЬНЫЙ АЛГОРИТМ**


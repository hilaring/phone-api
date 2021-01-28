# Phone API 📱


Welcome to de new **Phone API** about coolest Smartphones ever!  This REST API has been generated with **Node.js** & **Mongo DB**, this it's going to provide phone information like:

- Brand
- Model
- Description
- Color

And much more info! 🔥



## /GET - All phones

```
https://localhost:3000/api/phones
```
>Response body about phone example:

```json
[
  {
    "_id": "0",
    "name": "iPhone 12",
    "manufacturer": "Apple",
    "description": "iPhone 12 from Apple, California",
    "color": "Black",
    "price": 809,
    "imageFileName": "https://img.pccomponentes.com/articles/32/328955/146-apple-iphone-12-mini-128gb-negro-libre.jpg",
    "screen": "6,1 inch OLED",
    "processor": "Apple A14 Bionic",
    "ram": 8,
    "__v": 0
  },
]
```



## /GET - Phone detail 

```
https://localhost:3000/api/phones/:id
```



## /PUT - Update the phone information except name and manufacturer

```
https://localhost:3000/api/phones/:id
```



## /DELETE - Delete a phone

```
https://localhost:3000/api/phones/:id
```



## Seed to restore information

>If you try to edit or delete phone demo information you could restore this info executing the seed with:

```js
node helpers/seedPhones.js
```





*This is the back end for phone-app*
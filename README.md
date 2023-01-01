# aspratio
> To get aspect-ratio of 'screen size or image'

## Install



```bash
npm install aspratio
```

## Usage:

### get ratio with CJS
```js
const ratio = require("aspratio");
const [Width, Height] = [1920, 1080];
console.log(ratio.toRatio(Width, Height)); // => 16:9
console.log(ratio.toRatio(Width, Height, '/')); // => 16/9
```
```js
const { toRatio } = require("aspratio");
const [Width, Height] = [1920, 1080];
console.log(toRatio(Width, Height)); // => 16:9
console.log(toRatio(Width, Height, '/')); // => 16/9
```


### get ratio with ESM
```js
import ratio from "aspratio";
const [Width, Height] = [1920, 1080];
console.log(ratio.toRatio(Width, Height)); // => 16:9
console.log(ratio.toRatio(Width, Height, '/')); // => 16/9
```

```js
import { toRatio } from "aspratio";
const [Width, Height] = [1920, 1080];
console.log(toRatio(Width, Height)); // => 16:9
console.log(toRatio(Width, Height, '/')); // => 16/9
```

## To get width

### CJS :
```js
const ratio = require("aspratio");
const Height = 1080;
console.log(ratio.toWidth("16:9", Height)); // 1920
```
```js
const { toWidth } = require("aspratio");
const Height = 1080;
console.log(toWidth("16:9", Height)); // 1920
```

###  ESM :
```js
import ratio from "aspratio";
const Height = 1080;
console.log(ratio.toWidth("16:9", Height)); // 1920
```
```js
import { toWidth } from "aspratio";
const Height = 1080;
console.log(toWidth("16:9", Height)); // 1920
```


## To get height

### CJS :
```js
const ratio = require("aspratio");
const Width = 1920;
console.log(ratio.toHeight("16:9", Width)); // 1080
```
```js
const { toHeight } = require("aspratio");
const Width = 1920;
console.log(toHeight("16:9", Width)); // 1080
```

###  ESM :
```js
import ratio from "aspratio";
const Width = 1920;
console.log(ratio.toHeight("16:9", Width)); // 1080
```
```js
import { toHeight } from "aspratio";
const Width = 1920;
console.log(toHeight("16:9", Width)); // 1080
```


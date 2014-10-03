[NP] Worddefine
================================
## About ##

Use this node package to get the definition of a word.

## Install ##

`@user:~$ npm install worddefine

## Use ##

```js
var wd = require('worddefine');

wd.define("word_for_definition", function (err, word) {
    console.log(word.definitions);

});

```

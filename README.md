[NP] Worddefine
================================
## About ##

Use this node package to get the dfinition of a word.

## Install ##

`@user:~$ npm install worddefine

## Use ##

```js
var wd = requrie('worddefine');

wd.define("word_for_definition", function (err, word) {
    console.log(word.definitions);

});

```

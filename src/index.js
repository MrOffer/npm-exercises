"use strict";
const helloBeautiful = require('./say-hello.js');
const $ = require('jquery');
(()=> {
    let sayHello = () => console.log("Hello");
    sayHello();

    $('body').css('background-color', 'blue');

    console.log(helloBeautiful);

})();
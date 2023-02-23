"use strict"

// we need to write this and put the function in curly brackets
//we always need to write ./ to the right directory

import {capitalize, makeSpaces} from "./stringscript.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Start!");

  sayHello("peter");
}

function sayHello(name) {

  const greeting = makeSpaces(`Hello ${capitalize(name)}`);

  document.querySelector("#output").textContent= greeting;
  console.log("greeting", greeting);
}
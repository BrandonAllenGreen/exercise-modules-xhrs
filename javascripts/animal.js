'use strict';
// declare two private arrays
let carnivores = [];
let herbivores = [];

// load carnivores.json
function loadCarnivores(callbackToInvoke) {
  $.ajax({
    url: "data/carnivores.json"
  }).done( (carnData) => {
    carnivores = carnData.carnivores;
    callbackToInvoke(carnivores);
    //console.log('carnivores', carnivores);
  }).fail( (error) => {
    console.log('failed to load', error.statusText);
  });
}

// load herbivores.json
function loadHerbivores(callbackToInvoke) {
  $.ajax({
    url: "data/herbivores.json"
  }).done( (herbData) => {
    herbivores = herbData.herbivores;
    callbackToInvoke(herbivores);
    //console.log('herbivores', herbivores);
  }).fail( (error) => {
    console.log('failed to load', error.statusText);
  });
}

module.exports = { loadCarnivores, loadHerbivores };
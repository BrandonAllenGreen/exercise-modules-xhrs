"use strict";
const animal = require("./animal");
const $output = $('#outputDiv');



// code that takes the carnivores array and displays it to the DOM
function showCarnivores(carnivores) {
  // console.log(carnivores);
  $output.append(`<b>Carnivores:</b>`);
  $.each(carnivores, (i, animal) => {
    $output.append(`<p>${i, animal}</p>`);
  });
  
}

// code that takes the herbivoresarray and displays it to the DOM
function showHerbivores(herbivores) {
  $output.append(`<b>Herbivores:</b>`);
  //console.log(herbivores);
  $.each(herbivores, (i, animal) => {
    $output.append(`<p>${i, animal}</p>`);
  });
}

animal.loadCarnivores(showCarnivores);
animal.loadHerbivores(showHerbivores);

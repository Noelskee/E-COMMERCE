let param = new URLSearchParams(document.location.search)
let id = param.get("id")


async function loadDB()
{
  const response = await fetch("../database/products.json");
  const db = await response.json();
  return db;
}
const database = await loadDB();
console.log(database)

const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const imag = document.getElementById('image');
const option = document.getElementById('option');

let data = database[id]
console.log(data)
title.innerHTML = data.title;
price.innerHTML = '₱' + data.price[0];
description.innerHTML = data.description;
option.innerHTML = data.optionName + ':';

imag.src = data.image

optionInit(data);

function optionInit(O)
{
  const optionHoler = document.getElementById("optionHolder");
  let options = O.options;
    console.log(options);

  options.forEach(A => {
    
    optionHoler.innerHTML += `
    <button class="btn btn-primary p-3 m-2 " type="button">${A}</button>
`

  });
}
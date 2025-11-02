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

let data = database[id]
console.log(data)
title.innerHTML = data.title;
price.innerHTML = '₱' + data.price[0];
description.innerHTML = data.description;
imag.src = data.image
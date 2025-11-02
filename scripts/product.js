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
var a = document.querySelector("optionsSelected");

const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const imag = document.getElementById('image');
const option = document.getElementById('option');


let priceIndex = 0;

let data = database[id]

let Price = data.price[priceIndex]


console.log(data)
title.innerHTML = data.title;
price.innerHTML = '₱' + Price;
description.innerHTML = data.description;
option.innerHTML = data.optionName + ':';

imag.src = data.image

optionInit(data);



function changePrice(index)
{
  priceIndex = index;
  Price = data.price[priceIndex];
  price.innerHTML = '₱' + Price;
}

function optionInit(O)
{
  const optionHoler = document.getElementById("optionHolder");
  let options = O.options;
    console.log(options);
  let indexCount = 0;
  options.forEach(A => {
    
    if(indexCount == 0)
    {
      optionHolder.innerHTML += `
      
      <div id="optionSelector"></div>
      `
      a = document.getElementById('optionSelector')
      console.log(a);

    }

    optionHoler.innerHTML += `
    <button class="btn btn-primary p-3 m-2 " type="button" name="${indexCount}" id="${indexCount}">${A}</button>
`
    indexCount++;
  });
}
const button = document.querySelectorAll('button');

button.forEach(b => {
  b.addEventListener('click',(e) => {
  a.className = "optionSelected";
  let w = b.clientWidth
  console.log(w);
  a.style.width = w + "px";
  a.com

  b.appendChild(a);
  let name = b.name;
  console.log(name);
  let priceIdx= data.optionsPrice[parseInt(name)];
  changePrice(parseInt(priceIdx));
}
)
});
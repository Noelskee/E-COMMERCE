//retriving the id on the URL

let param = new URLSearchParams(document.location.search)
let id = param.get("id")


//loading products database
async function loadDB()
{
  const response = await fetch("../database/products.json");
  const db = await response.json();
  return db;
}
const database = await loadDB();
console.log(database)

//Option Seletor Entity
var a = document.querySelector("optionsSelected");


//For Update UI Elements of the HTML
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
const imag = document.getElementById('image');
const option = document.getElementById('option');

//price Indicator tells which price to show relatively to an option
let priceIndex = 0;

let data = database[id]

let Price = data.price[priceIndex]


console.log(data)

//Updating The UI elements
title.innerHTML = data.title;
price.innerHTML = '₱' + Price;
description.innerHTML = data.description;
option.innerHTML = data.optionName + ':';

imag.src = data.image

//initializing options
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
      //creating a selector Entity
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


//Update Option Selector
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
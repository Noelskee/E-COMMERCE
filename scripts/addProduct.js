
console.log("Hello World")

let init = false;

async function loadDB()
{
  const response = await fetch("../../database/products.json");
  const db = await response.json();
  return db;
}
const database = await loadDB();
console.log(database);



const button = document.getElementById('testButton');

button.addEventListener("click",addProduct)


const obj = {
    "id":0,
    "name":"dummy",
    "price":"0.00",
    "multiPrice":false,
    "description":"null",
    "productType":"null",
    "image":'null',
    "options":"null",
    "stocks":"null"
};

let data2

if (init == false){
const myJson = JSON.stringify(database);
localStorage.setItem("testJson",myJson);

let text = localStorage.getItem("testJson");
data2 = JSON.parse(text);

let index = 4
console.log(data2);
}


function addProduct()
{
    data2.push(obj);
    console.log(data2.count);

    console.log(data2);
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data2));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "products.json");
    

}



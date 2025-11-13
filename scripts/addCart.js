let dataCart;

let param = new URLSearchParams(document.location.search)
let id = param.get("id")

if (data == null)
{
    const myJson = localStorage.getItem("cartDB");
    if (myJson == null)
    {
        localStorage.setItem("cartDB",dataCart);
    }
    else
    {
        data = JSON.parse(myJson);
    }

}


const Price = document.getElementById('price');
const Quantity = document.getElementById('quatity');

function addProduct()
{
    dataCart.push
}
const container = document.getElementById("pContainer")

for(let i = 0;i<10;i++)
{
    showProduct("Chinese Headphones","$1.00")
}

function showProduct(Title,Description)
{
container.innerHTML += `

<div class="card m-2" style="width: 18rem;">
  <img src="../image/placeHolder2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${Title}</h5>
    <p class="card-text">
    ${Description}</p>
    <a href="#" class="btn btn-primary">Show Product</a>
    <a href="#" class="btn btn-primary">Buy</a>
  </div>
</div>

`
}
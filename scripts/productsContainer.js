const container = document.getElementById("pContainer")

for(let i = 0;i<10;i++)
{
    showProduct("Chinese Headphones","$1.00")
}

function showProduct(Title,Price)
{
  container.innerHTML += `

  <div class="card m-2 custom-primaryColor" style="width: 18rem;">
    <img src="../image/placeHolder2.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"><strong>${Title}</strong></h5>
      <p class="card-text">
      ${Price}</p>
      <a href="../pages/productOverview.html" class="btn btn-primary">Show Product</a>
      <a href="#" class="btn btn-primary">Add</a>
    </div>
  </div>

`
}
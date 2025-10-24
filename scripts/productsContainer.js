const container = document.getElementById("pContainer")


async function loadDb()
{
  const response = await fetch("../database/products.json");
  const db = await response.json();
  console.log(db)
  return db;
}

for(let i = 0;i<10;i++)
{
    showProduct("Chinese Headphones","$1.00")
}

const db = await loadDb();

function showProduct(Title,Price)
{
  container.innerHTML += `

  <div class="card m-2 custom-primaryColor" style="width: 18rem;">
    <img src="../image/placeHolder2.jpg" class="card-img-top" alt="...">
    <a class="card-body ">
      <h5 class="card-title"><strong>${Title}</strong></h5>
      <p class="card-text">
      ${Price}</p>
      <a href="../pages/productOverview.html" class="btn btn-primary">Show Product</a>
      <a href="#" class="btn btn-primary">Add</a>
    </a>
  </div>

`
}
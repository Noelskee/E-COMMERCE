// Function to fetch products and display them
    async function loadProducts() {
        try {
            const response = await fetch('database/products.json'); // Update with the correct path
            const products = await response.json();

            const productContainer = document.querySelector('.product-container'); // Ensure you have a container for products

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('card', 'm-3');

                productCard.innerHTML = `
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">Price: ${product.Price.join(' - ')}</p>
                        <p class="card-text">Available on: ${product.options.join(', ')}</p>
                    </div>
                `;

                productContainer.appendChild(productCard);
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    // Call the function to load products when the page loads
    window.onload = loadProducts;
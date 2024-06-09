function filterCategory(category) {
    const products = document.querySelectorAll('.product-box');
    if (category === 'all') {
        products.forEach(product => {
            product.style.display = 'block';
        });
    } else {
        products.forEach(product => {
            if (product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
    updateProductCount();
}

function filterBrand(brand) {
    const products = document.querySelectorAll('.product-box');
    products.forEach(product => {
        if (product.classList.contains(brand)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    updateProductCount();
}

function filterType(type) {
    const products = document.querySelectorAll('.product-box');
    products.forEach(product => {
        if (product.classList.contains(type)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    updateProductCount();
}

function filterProducts() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const products = document.querySelectorAll('.product-box');

    products.forEach(product => {
        const productName = product.querySelector('p').innerText.toLowerCase();
        if (productName.includes(searchBar)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    updateProductCount();
}

function orderProducts() {
    const orderSelect = document.getElementById('orderSelect').value;
    const productContainer = document.getElementById('productContainer');
    const products = Array.from(document.querySelectorAll('.product-box'));

    let sortedProducts;

    if (orderSelect === 'name') {
        sortedProducts = products.sort((a, b) => {
            const nameA = a.querySelector('p').innerText.toLowerCase();
            const nameB = b.querySelector('p').innerText.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    } else {
        sortedProducts = products.sort((a, b) => {
            return a.classList.contains(orderSelect) - b.classList.contains(orderSelect);
        });
    }

    productContainer.innerHTML = '';
    sortedProducts.forEach(product => {
        productContainer.appendChild(product);
    });
}

function updateProductCount() {
    const products = document.querySelectorAll('.product-box');
    const visibleProducts = Array.from(products).filter(product => product.style.display !== 'none');
    const productCount = document.getElementById('productCount');
    productCount.innerText = `Mostrando ${visibleProducts.length} productos`;
}
function showProductDetails(name, description, price, availability, imageSrc) {
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalPrice').innerText = `Precio: ${price}`;
    document.getElementById('modalAvailability').innerText = `Disponibilidad: ${availability}`;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', updateProductCount);

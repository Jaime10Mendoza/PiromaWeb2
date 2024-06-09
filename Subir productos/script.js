document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        addProduct();
    }
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const type = document.getElementById('type').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const caliber = document.getElementById('caliber').value.trim();
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const image = document.getElementById('image').files[0];

    if (!name || !description || !type || !duration || !caliber || !price || !quantity || !image) {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    if (isNaN(price) || price <= 0) {
        alert('Por favor, ingrese un precio válido.');
        return false;
    }

    if (isNaN(quantity) || quantity <= 0) {
        alert('Por favor, ingrese una cantidad válida.');
        return false;
    }

    return true;
}

function addProduct() {
    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const type = document.getElementById('type').value.trim();
    const duration = document.getElementById('duration').value.trim();
    const caliber = document.getElementById('caliber').value.trim();
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
    const image = document.getElementById('image').files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);
        const cell9 = newRow.insertCell(8);

        cell1.textContent = name;
        cell2.textContent = description;
        cell3.textContent = type;
        cell4.textContent = duration;
        cell5.textContent = caliber;
        cell6.textContent = `$${price}`;
        cell7.textContent = quantity;
        cell8.innerHTML = `<img src="${e.target.result}" alt="${name}">`;
        cell9.innerHTML = `
            <button class="edit-btn" onclick="editProduct(this)" style="margin-bottom: 10%;">  Ediar </button>
            <button class="delete-btn" onclick="deleteProduct(this)">Eliminar</button>
        `;

        document.getElementById('productForm').reset();
    };
    reader.readAsDataURL(image);
}

function editProduct(button) {
    const row = button.parentNode.parentNode;
    const cells = row.getElementsByTagName('td');

    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('description').value = cells[1].textContent;
    document.getElementById('type').value = cells[2].textContent;
    document.getElementById('duration').value = cells[3].textContent;
    document.getElementById('caliber').value = cells[4].textContent;
    document.getElementById('price').value = cells[5].textContent.replace('$', '');
    document.getElementById('quantity').value = cells[6].textContent;
    document.getElementById('image').value = ''; // Reset file input

    // Remove the row being edited
    row.remove();
}

function deleteProduct(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

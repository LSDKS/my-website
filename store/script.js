/store
  ├── index.html
  ├── style.css
  └── script.js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Store</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>🛍 My Simple Store</h1>
    <div class="cart">Cart: <span id="cart-count">0</span></div>
  </header>

  <main>
    <div class="product" data-name="Product 1" data-price="19.99">
      <img src="https://via.placeholder.com/150" alt="Product 1">
      <h2>Product 1</h2>
      <p>$19.99</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>

    <div class="product" data-name="Product 2" data-price="29.99">
      <img src="https://via.placeholder.com/150" alt="Product 2">
      <h2>Product 2</h2>
      <p>$29.99</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  </main>

  <script src="script.js"></script>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f9f9f9;
}

header {
  background: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

main {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
}

.product {
  background: white;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.product img {
  width: 150px;
  height: 150px;
}

button.add-to-cart {
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  background-color: #28a745;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

button.add-to-cart:hover {
  background-color: #218838;
}
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert("Product added to cart!");
  });
});
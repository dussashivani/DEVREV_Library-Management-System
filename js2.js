// Select elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.getElementById('cart-count');

// Initialize cart count
let cartCount = 0;

// Add event listeners to "Add to Cart" buttons
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Increment cart count
        cartCount++;

        // Update the cart count element
        cartCountElement.innerText = cartCount.toString();
    });
});
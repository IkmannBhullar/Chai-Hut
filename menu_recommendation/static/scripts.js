document.addEventListener("DOMContentLoaded", () => {
    fetch("/recommendation")
        .then(response => response.json())
        .then(data => {
            document.getElementById("menu-recommendation").textContent = data.recommendation;
        })
        .catch(error => {
            console.error("Error fetching recommendation:", error);
            document.getElementById("menu-recommendation").textContent = "Sorry, unable to fetch recommendation.";
        });
});

// Mock order array to store selected items
let order = [];

// Function to handle "Add to Order" button click
function addToOrder(button) {
    // Disable the button temporarily
    button.disabled = true;

    // Get item details
    const itemId = button.getAttribute("data-item-id");
    const itemName = button.parentElement.querySelector("h3").innerText;
    const itemPrice = button.parentElement.querySelector(".menu-price").innerText;

    // Add the item to the order
    order.push({ id: itemId, name: itemName, price: itemPrice });

    // Provide visual feedback
    button.textContent = "Added!";
    setTimeout(() => {
        button.textContent = "Add to Order";
        button.disabled = false; // Re-enable button
    }, 1500);

    // Debug: Log the current order
    console.log("Order Updated:", order);
}
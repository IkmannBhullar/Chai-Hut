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
    const itemId = button.getAttribute("data-item-id");

    // Disable button and provide feedback
    button.disabled = true;
    button.textContent = "Adding...";

    // Send data to the backend
    fetch("/add-to-order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ item_id: itemId })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Debug: Log server response
            button.textContent = "Added!";
            setTimeout(() => {
                button.textContent = "Add to Order";
                button.disabled = false;
            }, 1500);
        })
        .catch(error => {
            console.error("Error:", error);
            button.textContent = "Try Again";
            button.disabled = false;
        });
}

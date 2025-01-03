from flask import Flask, render_template, jsonify
import datetime

app = Flask(__name__)

# Route for the homepage
@app.route("/")
def home():
    return render_template("index.html")

# Route for the recommendation (API)
def get_recommendation():
    now = datetime.datetime.now()
    if 5 <= now.hour < 12:
        return "Masala Chai - Perfect for your morning start!"
    elif 12 <= now.hour < 17:
        return "Iced Chai Latte - Refreshing for your afternoon!"
    else:
        return "Chai with Samosa - Great for your evening!"

@app.route("/recommendation")
def recommendation():
    return jsonify({"recommendation": get_recommendation()})

from flask import Flask, request, jsonify

app = Flask(__name__)

# Mock database
orders = []

@app.route("/add-to-order", methods=["POST"])
def add_to_order():
    data = request.json
    item_id = data.get("item_id")
    orders.append(item_id)
    return jsonify({"message": "Item added successfully!", "current_order": orders})

if __name__ == "__main__":
    app.run(debug=True)

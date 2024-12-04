// Get polygon name based on the number of sides
function getPolygonName(sides) {
    const polygonNames = {
        0: "No polygon",
        1: "Monogon",
        2: "Digon",
        3: "Triangle",
        4: "Quadrilateral",
        5: "Pentagon",
        6: "Hexagon",
        7: "Heptagon",
        8: "Octagon",
        9: "Nonagon",
        10: "Decagon"
    };
    return polygonNames[sides] || "Polygon with many sides";
}

// Process user input and display a greeting
function processUserInfo() {
    const userName = document.getElementById("username").value;
    const userMood = document.getElementById("mood").value;
    const favoriteNumber = parseFloat(document.getElementById("favorite-number").value);

    // Display greeting message
    const greeting = `The Gh Boutique welcomes you, ${userName}! We're glad you are doing ${userMood}.`;
    document.getElementById("greeting").textContent = greeting;

    // Display polygon name if favorite number is valid
    if (!isNaN(favoriteNumber)) {
        const polygonName = getPolygonName(Math.round(Math.abs(favoriteNumber)));
        alert(`Your favorite polygon is a ${polygonName}.`);
    }
}

// Function to display the current date and time
document.addEventListener("DOMContentLoaded", () => {
    const dateTimeElement = document.getElementById("datetime");
    const now = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    dateTimeElement.textContent = `Today is ${now.toLocaleString("en-US", options)}`;

    // Attach event listener to the submit button
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", processUserInfo);
});
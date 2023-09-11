let count = 0;

// Define variables for region ratings
var Abia = 0;
var Adamawa = 0;
var AkwaIbom = 0;
var Anambra = 0;
var Bauchi = 0;
var Bayelsa = 0;
var Benue = 0;
var Borno = 0;
var CrossRiver = 0;
var Delta = 0;
var Ebonyi = 0;
var Edo = 0;
var Ekiti = 0;
var Enugu = 0;
var FCT = 0; // Federal Capital Territory
var Gombe = 0;
var Imo = 0;
var Jigawa = 0;
var Kaduna = 0;
var Kano = 0;
var Katsina = 0;
var Kebbi = 0;
var Kogi = 0;
var Kwara = 0;
var Lagos = 0;
var Nasarawa = 0;
var Niger = 0;
var Ogun = 0;
var Ondo = 0;
var Osun = 0;
var Oyo = 0;
var Plateau = 0;
var Rivers = 0;
var Sokoto = 0;
var Taraba = 0;
var Yobe = 0;
var Zamfara = 0;

// Function to update the count display
function updateCountDisplay() {
  // Select the h2 element with the id "count-display"
  const countDisplay = document.getElementById("count-display");

  // Update the text content of the h2 element with the current value of count
  countDisplay.textContent = "Your Nigeria Level: " + count.toString(); // Concatenate text with count
}

// JavaScript for tooltips and click event
const tooltip = document.getElementById("tooltip");
const svgPaths = document.querySelectorAll("path");
const resetButton = document.getElementById("reset-button");

svgPaths.forEach((path) => {
  path.addEventListener("mouseover", (e) => {
    tooltip.style.display = "block";
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = e.pageY + "px";
    tooltip.textContent = path.getAttribute("name"); // Display the "name" attribute as the tooltip.
  });

  path.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });

  path.addEventListener("click", () => {
    // Toggle the "selected" class to change the color on click
    path.classList.toggle("selected");
    const pathName = path.getAttribute("name"); // Get the ID attribute of the clicked path
    // console.log("Clicked path ID:", pathName); // Print the ID to the console (you can use it as needed)

    // Remove any existing rating class
    path.classList.remove("rating-1", "rating-2", "rating-3", "rating-4", "rating-5");

    // Prompt the user to enter a rating (0 to 5)
    const userChoice = getUserChoice();
    count = userChoice;

    // Add the corresponding rating class to change the color
    path.classList.add(`rating-${userChoice}`);

    
    // Update the region rating variables
    switch (pathName) {
      case "Abia":
        Abia = userChoice;
        break;
      case "Adamawa":
        Adamawa = userChoice;
        break;
      case "AkwaIbom":
        AkwaIbom = userChoice;
        break;
      case "Anambra":
        Anambra = userChoice;
        break;
      case "Bauchi":
        Bauchi = userChoice;
        break;
      case "Bayelsa":
        Bayelsa = userChoice;
        break;
      case "Benue":
        Benue = userChoice;
        break;
      case "Borno":
        Borno = userChoice;
        break;
      case "CrossRiver":
        CrossRiver = userChoice;
        break;
      case "Delta":
        Delta = userChoice;
        break;
      case "Ebonyi":
        Ebonyi = userChoice;
        break;
      case "Edo":
        Edo = userChoice;
        break;
      case "Ekiti":
        Ekiti = userChoice;
        break;
      case "Enugu":
        Enugu = userChoice;
        break;
      case "FCT":
        FCT = userChoice;
        break;
      case "Gombe":
        Gombe = userChoice;
        break;
      case "Imo":
        Imo = userChoice;
        break;
      case "Jigawa":
        Jigawa = userChoice;
        break;
      case "Kaduna":
        Kaduna = userChoice;
        break;
      case "Kano":
        Kano = userChoice;
        break;
      case "Katsina":
        Katsina = userChoice;
        break;
      case "Kebbi":
        Kebbi = userChoice;
        break;
      case "Kogi":
        Kogi = userChoice;
        break;
      case "Kwara":
        Kwara = userChoice;
        break;
      case "Lagos":
        Lagos = userChoice;
        break;
      case "Nasarawa":
        Nasarawa = userChoice;
        break;
      case "Niger":
        Niger = userChoice;
        break;
      case "Ogun":
        Ogun = userChoice;
        break;
      case "Ondo":
        Ondo = userChoice;
        break;
      case "Osun":
        Osun = userChoice;
        break;
      case "Oyo":
        Oyo = userChoice;
        break;
      case "Plateau":
        Plateau = userChoice;
        break;
      case "Rivers":
        Rivers = userChoice;
        break;
      case "Sokoto":
        Sokoto = userChoice;
        break;
      case "Taraba":
        Taraba = userChoice;
        break;
      case "Yobe":
        Yobe = userChoice;
        break;
      case "Zamfara":
        Zamfara = userChoice;
        break;
      default:
    }
    

    // Calculate the total count
    count = Abia + Adamawa + AkwaIbom + Anambra + Bauchi + Bayelsa + Benue + Borno + CrossRiver + Delta +
      Ebonyi + Edo + Ekiti + Enugu + FCT + Gombe + Imo + Jigawa + Kaduna + Kano + Katsina + Kebbi + Kogi +
      Kwara + Lagos + Nasarawa + Niger + Ogun + Ondo + Osun + Oyo + Plateau + Rivers + Sokoto + Taraba +
      Yobe + Zamfara;

      
    // After updating the count, call the function to update the display
    updateCountDisplay();

    // console.log(count);
  });
});

// Reset button click event
resetButton.addEventListener("click", () => {
  // Remove rating classes from all paths
  svgPaths.forEach((path) => {
    path.classList.remove("rating-1", "rating-2", "rating-3", "rating-4", "rating-5");
  });

  // Reset count to 0
  count = 0;
  updateCountDisplay()
});

function getUserChoice() {
  let userInput;

  do {
    userInput = prompt("Pick from the options:\n5. Lived there Level - 5\n4. Stayed there Level - 4\n3. Visited there Level - 3\n2. Alighted there Level - 2\n1. Passed there Level - 1\n0. Never been there - Level 0");
    userInput = parseInt(userInput); // Convert the input to an integer
  } while (isNaN(userInput) || userInput < 0 || userInput > 5);

  return userInput;
}

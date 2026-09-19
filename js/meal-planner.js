console.log(recipes);
//DATE SELECTION

let planningDate = document.getElementById("planning-date");
console.log(planningDate);

let currentDate;

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

planningDate.addEventListener("change", function () {
  console.log(planningDate.value);
  let selectedDate = new Date(planningDate.value);

  currentDate = selectedDate;

  let dayCard = document.querySelectorAll(".day-card");

  for (let i = 0; i <= 6; i++) {
    let anotherDate = new Date(selectedDate);
    anotherDate.setDate(anotherDate.getDate() + i);
    console.log(anotherDate);

    dayCard[i].querySelector(".day-date").innerHTML = anotherDate.getDate();
    dayCard[i].querySelector(".day-name").innerHTML =
      weekDays[anotherDate.getDay()];
    dayCard[i].querySelector(".day-month").innerHTML =
      months[anotherDate.getMonth()];
  }

  let weekRange = document.getElementById("week-range");
  console.log(weekRange);

  let endDate = new Date(planningDate.value);
  endDate.setDate(endDate.getDate() + 6);
  console.log(endDate);

  weekRange.innerHTML =
    "Week of " +
    months[selectedDate.getMonth()] +
    " " +
    selectedDate.getDate() +
    " - " +
    months[endDate.getMonth()] +
    " " +
    endDate.getDate();
});

//WEEK NAVIGATION FORWARD
let nextBtn = document.getElementById("next-btn");
console.log(nextBtn);
nextBtn.addEventListener("click", function () {
  console.log("Next btn clicked");
  currentDate.setDate(currentDate.getDate() + 7);
  weekNavigation();

  planningDate.value = currentDate.toISOString().split("T")[0];
});

// WEEK NAVIGATION BACKWARD
let prevBtn = document.getElementById("prev-btn");
console.log(prevBtn);
prevBtn.addEventListener("click", function () {
  console.log("Prev btn clicked");
  currentDate.setDate(currentDate.getDate() - 7);
  weekNavigation();

  planningDate.value = currentDate.toISOString().split("T")[0];
});

let dayCard = document.querySelectorAll(".day-card");

//NAVIGATION FUNCTION
function weekNavigation() {
  for (let i = 0; i <= 6; i++) {
    let anotherDate = new Date(currentDate);
    anotherDate.setDate(anotherDate.getDate() + i);
    console.log(anotherDate);

    dayCard[i].querySelector(".day-date").innerHTML = anotherDate.getDate();
    dayCard[i].querySelector(".day-name").innerHTML =
      weekDays[anotherDate.getDay()];
    dayCard[i].querySelector(".day-month").innerHTML =
      months[anotherDate.getMonth()];
  }
  let weekRange = document.getElementById("week-range");
  console.log(weekRange);

  let endDate = new Date(currentDate);
  endDate.setDate(endDate.getDate() + 6);
  console.log(endDate);

  weekRange.innerHTML =
    "Week of " +
    months[currentDate.getMonth()] +
    " " +
    currentDate.getDate() +
    " - " +
    months[endDate.getMonth()] +
    " " +
    endDate.getDate();
}

let selectedDay;
let selectedMeal;

//ADD MEAL BTN
let addMealBtn = document.querySelectorAll(".add-meal-btn");
console.log(addMealBtn);

addMealBtn.forEach((element) => {
  element.addEventListener("click", function () {
    console.log("CLICKED");

    if (!currentDate) {
      alert("Please select a date first");
      return;
    }

    selectedDay = element.dataset.day;

    selectedMeal = element.dataset.meal;

    console.log("Day:", selectedDay);
    console.log("Meal:", selectedMeal);

    let recipeModal = document.getElementById("recipe-modal");
    console.log("MODAL:", recipeModal);
    recipeModal.hidden = false;
    console.log("HIDDEN:", recipeModal.hidden);
  });
});

//CLOSE MEAL BTN
let closeModalBtn = document.querySelector(".close-modal-btn");
console.log(closeModalBtn);

closeModalBtn.addEventListener("click", function () {
  let recipeModal = document.getElementById("recipe-modal");
  recipeModal.hidden = true;
});

let recipeList = document.getElementById("recipe-list");
console.log(recipeList);

recipes.forEach((element) => {
  console.log(element.title);
  let div = document.createElement("div");
  div.innerHTML = `
    <div class="recipe-item flex items-center justify-between p-3 border rounded-xl mt-4 w-2xl">
        <img
            src="../assets/images/recipes/${element.image}"
            class="recipe-image w-40 h-32 rounded-lg bg-gray-200 object-cover"
        >
        <div class="recipe-info flex-1 ml-4">
            <p class="recipe-name font-bold text-2xl">${element.title}</p>

            <p class="recipe-details font-light text-xl mt-2 text-gray-700">
                🍽️ ${element.category} · ⏱️ ${element.time} min · 👥 ${element.servings} servings
            </p>
        </div>
        <button
        data-recipe-id="${element.id}" class="select-recipe-btn border rounded-2xl px-2.5 py-1.5 cursor-pointer">
        Add
        </button>
    </div>
`;
  recipeList.append(div);
  console.log(div);
});

let selectedRecipeBtn = document.querySelectorAll(".select-recipe-btn");
console.log(selectedRecipeBtn);

selectedRecipeBtn.forEach((element) => {
  element.addEventListener("click", function () {
    console.log(element.dataset.recipeId);
    let recipeId = Number(element.dataset.recipeId);
    let selectedRecipe = recipes.find((recipe) => recipe.id === recipeId);
    console.log(selectedRecipe);

    console.log("Selected Day:", selectedDay);
    console.log("Selected Meal:", selectedMeal);

    // FIND THE CORRECT DAY CARD

    let dayCards = document.querySelectorAll(".day-card");

    dayCards.forEach((card) => {
      let button = card.querySelector(
        `.add-meal-btn[data-day="${selectedDay}"][data-meal="${selectedMeal}"],
   .change-meal-btn[data-day="${selectedDay}"][data-meal="${selectedMeal}"]`,
      );

      if (button) {
        let mealSection;

        if (selectedMeal === "Breakfast") {
          mealSection = card.querySelector(".meals-breakfast");
        }

        if (selectedMeal === "Lunch") {
          mealSection = card.querySelector(".meals-lunch");
        }

        if (selectedMeal === "Dinner") {
          mealSection = card.querySelector(".meals-dinner");
        }

        mealSection.innerHTML = `
      <p class="font-bold">
        ${selectedMeal}
      </p>

      <img
        src="../assets/images/recipes/${selectedRecipe.image}"
        class="w-full h-24 object-cover rounded-lg"
      >

      <p class="font-bold mt-2">
        ${selectedRecipe.title}
      </p>


        <button
    class="change-meal-btn border rounded-2xl px-2 py-1 mt-2 text-red-500 cursor-pointer"
    data-day="${selectedDay}"
    data-meal="${selectedMeal}">
    Change
  </button>
    `;
      }
    });

    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("change-meal-btn")) {
        selectedDay = event.target.dataset.day;
        selectedMeal = event.target.dataset.meal;

        let recipeModal = document.getElementById("recipe-modal");

        recipeModal.hidden = false;
      }
    });
    // CLOSE MODAL
    document.getElementById("recipe-modal").hidden = true;
  });
});

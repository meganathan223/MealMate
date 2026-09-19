

// ===============================
// Select HTML Elements
// ===============================

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".categoryButton");
const emptyMessage = document.getElementById("emptyMessage");

const recipeModal = document.getElementById("recipeModal");
const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalTime = document.getElementById("modalTime");
const modalDifficulty = document.getElementById("modalDifficulty");
const modalServings = document.getElementById("modalServings");
const modalIngredients = document.getElementById("modalIngredients");
const modalInstructions = document.getElementById("modalInstructions");

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

let selectedCategory = "all";


// ===============================
// Display Recipe Cards
// ===============================

function displayRecipes(recipeList) {
    recipeContainer.innerHTML = "";

    if (recipeList.length === 0) {
        emptyMessage.classList.remove("hidden");
        return;
    }

    emptyMessage.classList.add("hidden");

    recipeList.forEach(function (recipe) {

        const recipeCard = document.createElement("article");

        recipeCard.className =
            "group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-lg transition duration-500 hover:-translate-y-2 hover:border-sky-400 hover:shadow-2xl hover:shadow-sky-500/10";

        recipeCard.innerHTML = `

            <!-- Recipe Image -->
            <div class="relative overflow-hidden">

                <img
                    src="${recipe.image}"
                    alt="${recipe.title}"
                    class="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                >

                <!-- Category -->
                <span
                    class="absolute left-4 top-4 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-bold uppercase text-sky-400 shadow-lg backdrop-blur">
                    ${recipe.category}
                </span>

            </div>


            <!-- Recipe Content -->
            <div class="p-6">

                <!-- Time & Difficulty -->
                <div
                    class="mb-3 flex items-center justify-between text-xs font-semibold text-slate-400">

                    <span>
                        ⏱️ ${recipe.time}
                    </span>

                    <span>
                        🔥 ${recipe.difficulty}
                    </span>

                </div>


                <!-- Title -->
                <h3 class="text-xl font-extrabold text-white transition group-hover:text-sky-400">

                    ${recipe.title}

                </h3>


                <!-- Description -->
                <p
                    class="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">

                    ${recipe.description}

                </p>


                <!-- View Recipe Button -->
                <button
                    class="viewRecipeButton mt-6 w-full rounded-full bg-sky-500 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/30"
                    data-id="${recipe.id}">

                    View Recipe

                </button>

            </div>
        `;

        recipeContainer.appendChild(recipeCard);
    });


    // View Recipe Buttons
    const viewButtons = document.querySelectorAll(".viewRecipeButton");

    viewButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const recipeId = Number(button.dataset.id);

            window.location.href = `recipe-details.html?id=${recipeId}`;

        });

    });
}




// ===============================
// Filter Recipes
// ===============================

function filterRecipes() {
    const searchText = searchInput.value.toLowerCase().trim();

    const filteredRecipes = recipes.filter(function (recipe) {
        const matchesCategory =
            selectedCategory === "all" ||
            recipe.category === selectedCategory;

        const matchesSearch =
            recipe.title.toLowerCase().includes(searchText) ||
            recipe.description.toLowerCase().includes(searchText) ||
            recipe.category.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    displayRecipes(filteredRecipes);
}


// ===============================
// Category Button Events
// ===============================

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        selectedCategory = button.dataset.category;

        // Reset all buttons
        categoryButtons.forEach(function (item) {

            item.classList.remove(
                "bg-sky-500",
                "text-white",
                "shadow-lg",
                "shadow-sky-500/20"
            );

            item.classList.add(
                "bg-slate-900",
                "text-slate-300",
                "border",
                "border-slate-700"
            );

        });


        // Active button
        button.classList.remove(
            "bg-slate-900",
            "text-slate-300",
            "border-slate-700"
        );

        button.classList.add(
            "bg-sky-500",
            "text-white",
            "shadow-lg",
            "shadow-sky-500/20"
        );


        filterRecipes();

    });

});



if (searchInput) {
    searchInput.addEventListener("input", filterRecipes);
}

displayRecipes(recipes);

// ===============================
// Search Event
// ===============================

searchInput.addEventListener("input", function () {
    filterRecipes();
});


// ===============================
// Open Recipe Modal
// ===============================

function openRecipeModal(recipeId) {
    const selectedRecipe = recipes.find(function (recipe) {
        return recipe.id === recipeId;
    });

    if (!selectedRecipe) {
        return;
    }

    modalImage.src = selectedRecipe.image;
    modalImage.alt = selectedRecipe.title;

    modalTitle.textContent = selectedRecipe.title;
    modalCategory.textContent = selectedRecipe.category;
    modalDescription.textContent = selectedRecipe.description;

    modalTime.textContent = selectedRecipe.time;
    modalDifficulty.textContent = selectedRecipe.difficulty;
    modalServings.textContent = selectedRecipe.servings;

    modalIngredients.innerHTML = "";

    selectedRecipe.ingredients.forEach(function (ingredient) {
        const ingredientItem = document.createElement("li");

        ingredientItem.textContent = ingredient;

        modalIngredients.appendChild(ingredientItem);
    });

    modalInstructions.innerHTML = "";

    selectedRecipe.instructions.forEach(function (instruction) {
        const instructionItem = document.createElement("li");

        instructionItem.textContent = instruction;

        modalInstructions.appendChild(instructionItem);
    });

    recipeModal.classList.remove("hidden");
    recipeModal.classList.add("flex");

    document.body.classList.add("overflow-hidden");
}


// ===============================
// Close Recipe Modal
// ===============================

function closeRecipeModal() {
    recipeModal.classList.add("hidden");
    recipeModal.classList.remove("flex");

    document.body.classList.remove("overflow-hidden");
}

closeModal.addEventListener("click", closeRecipeModal);

recipeModal.addEventListener("click", function (event) {
    if (event.target === recipeModal) {
        closeRecipeModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeRecipeModal();
    }
});


// ===============================
// Mobile Menu
// ===============================

menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});


// ===============================
// Initial Display
// ===============================

displayRecipes(recipes);
// ===============================
// MealMate Recipes Data
// ===============================

const recipes = [
    {
        id: 1,
        title: "Chicken Biryani",
        category: "lunch",
        time: "60 mins",
        difficulty: "Hard",
        servings: "4",
        image: "../assets/images/recipes/chicken-biryani.jpg",
        description:
            "Aromatic and flavourful chicken biryani made with basmati rice and delicious spices.",
        ingredients: [
            "500 grams chicken",
            "2 cups basmati rice",
            "2 onions",
            "2 tomatoes",
            "1 cup yogurt",
            "2 tablespoons biryani masala",
            "1 tablespoon ginger garlic paste",
            "Mint leaves",
            "Coriander leaves",
            "Salt",
            "Oil"
        ],
        instructions: [
            "Wash and soak the basmati rice.",
            "Marinate the chicken with yogurt and spices.",
            "Fry onions until golden brown.",
            "Add tomatoes and ginger garlic paste.",
            "Add marinated chicken and cook properly.",
            "Add soaked rice and enough water.",
            "Cook until the rice is ready.",
            "Garnish with mint and coriander leaves.",
            "Serve hot."
        ]
    },

    {
        id: 2,
        title: "Chicken Pasta",
        category: "lunch",
        time: "30 mins",
        difficulty: "Medium",
        servings: "2",
        image: "../assets/images/recipes/chicken-pasta.jpg",
        description:
            "Creamy chicken pasta prepared with tender chicken, pasta, and a rich sauce.",
        ingredients: [
            "200 grams pasta",
            "200 grams chicken",
            "1 onion",
            "3 garlic cloves",
            "1 cup milk",
            "1/2 cup cheese",
            "1 tablespoon butter",
            "Black pepper",
            "Salt"
        ],
        instructions: [
            "Boil the pasta and keep it aside.",
            "Cut the chicken into small pieces.",
            "Heat butter in a pan.",
            "Add garlic and onion.",
            "Add chicken and cook completely.",
            "Add milk, cheese, salt, and pepper.",
            "Add boiled pasta.",
            "Mix well and serve hot."
        ]
    },

    {
        id: 3,
        title: "Chocolate Pancakes",
        category: "breakfast",
        time: "20 mins",
        difficulty: "Easy",
        servings: "2",
        image: "../assets/images/recipes/chocolate-pancakes.jpg",
        description:
            "Soft and fluffy chocolate pancakes perfect for a sweet and delicious breakfast.",
        ingredients: [
            "1 cup all-purpose flour",
            "2 tablespoons cocoa powder",
            "2 tablespoons sugar",
            "1 egg",
            "3/4 cup milk",
            "1 teaspoon baking powder",
            "1 tablespoon butter",
            "Chocolate syrup"
        ],
        instructions: [
            "Mix flour, cocoa powder, sugar, and baking powder.",
            "Add egg and milk.",
            "Mix until a smooth batter is formed.",
            "Heat a pan and add butter.",
            "Pour a small amount of batter.",
            "Cook both sides until soft and golden.",
            "Add chocolate syrup.",
            "Serve warm."
        ]
    },

    {
        id: 4,
        title: "Fresh Fruit Bowl",
        category: "breakfast",
        time: "10 mins",
        difficulty: "Easy",
        servings: "2",
        image: "../assets/images/recipes/fruit-bowl.jpg",
        description:
            "A refreshing fruit bowl made with colourful seasonal fruits and honey.",
        ingredients: [
            "1 apple",
            "1 banana",
            "1 orange",
            "1 cup grapes",
            "1/2 cup watermelon",
            "1 teaspoon honey",
            "Mint leaves"
        ],
        instructions: [
            "Wash all the fruits properly.",
            "Peel and chop the fruits.",
            "Add all fruits into a bowl.",
            "Add honey and mix gently.",
            "Garnish with mint leaves.",
            "Serve fresh."
        ]
    },

    {
        id: 5,
        title: "Mango Smoothie",
        category: "breakfast",
        time: "10 mins",
        difficulty: "Easy",
        servings: "2",
        image: "../assets/images/recipes/mango-smoothie.jpg",
        description:
            "A creamy and refreshing mango smoothie made with fresh mangoes and milk.",
        ingredients: [
            "2 ripe mangoes",
            "1 cup chilled milk",
            "2 tablespoons sugar",
            "4 ice cubes",
            "2 tablespoons yogurt"
        ],
        instructions: [
            "Peel and chop the mangoes.",
            "Add mango pieces into a blender.",
            "Add milk, sugar, yogurt, and ice cubes.",
            "Blend until smooth.",
            "Pour into glasses.",
            "Serve chilled."
        ]
    },

    {
        id: 6,
        title: "Masala Dosa",
        category: "breakfast",
        time: "30 mins",
        difficulty: "Medium",
        servings: "3",
        image: "../assets/images/recipes/masala-dosa.jpg",
        description:
            "Crispy South Indian masala dosa filled with spicy and tasty potato masala.",
        ingredients: [
            "2 cups dosa batter",
            "3 potatoes",
            "1 onion",
            "2 green chillies",
            "1/2 teaspoon mustard seeds",
            "Curry leaves",
            "Turmeric powder",
            "Salt",
            "Oil"
        ],
        instructions: [
            "Boil and mash the potatoes.",
            "Heat oil in a pan.",
            "Add mustard seeds and curry leaves.",
            "Add onion and green chillies.",
            "Add mashed potatoes, turmeric, and salt.",
            "Heat a dosa pan.",
            "Spread the dosa batter into a thin circle.",
            "Add potato masala and fold.",
            "Serve with chutney or sambar."
        ]
    },

    {
        id: 7,
        title: "Paneer Fried Rice",
        category: "lunch",
        time: "25 mins",
        difficulty: "Easy",
        servings: "3",
        image: "../assets/images/recipes/paneer-fried-rice.jpg",
        description:
            "Tasty fried rice with soft paneer cubes, vegetables, and simple spices.",
        ingredients: [
            "2 cups cooked rice",
            "150 grams paneer",
            "1 carrot",
            "1 capsicum",
            "1 onion",
            "2 garlic cloves",
            "1 tablespoon soy sauce",
            "Black pepper",
            "Salt",
            "Oil"
        ],
        instructions: [
            "Cut paneer and vegetables into small pieces.",
            "Heat oil in a pan.",
            "Add garlic and onion.",
            "Add carrot and capsicum.",
            "Add paneer cubes and cook for a few minutes.",
            "Add cooked rice.",
            "Add soy sauce, pepper, and salt.",
            "Mix gently and serve hot."
        ]
    },

    {
        id: 8,
        title: "Tomato Rice",
        category: "lunch",
        time: "25 mins",
        difficulty: "Easy",
        servings: "3",
        image: "../assets/images/recipes/tomato-rice.jpg",
        description:
            "Simple and flavourful tomato rice made with fresh tomatoes and aromatic spices.",
        ingredients: [
            "2 cups cooked rice",
            "3 tomatoes",
            "1 onion",
            "2 green chillies",
            "1 teaspoon ginger garlic paste",
            "1/2 teaspoon chilli powder",
            "Coriander leaves",
            "Salt",
            "Oil"
        ],
        instructions: [
            "Heat oil in a pan.",
            "Add onion and green chillies.",
            "Add ginger garlic paste.",
            "Add chopped tomatoes.",
            "Cook until the tomatoes become soft.",
            "Add chilli powder and salt.",
            "Add cooked rice.",
            "Mix everything properly.",
            "Garnish with coriander leaves."
        ]
    },

    {
        id: 9,
        title: "Vegetable Sandwich",
        category: "dinner",
        time: "15 mins",
        difficulty: "Easy",
        servings: "2",
        image: "../assets/images/recipes/veg-sandwich.jpg",
        description:
            "Quick and healthy vegetable sandwich filled with fresh vegetables and tasty spread.",
        ingredients: [
            "4 bread slices",
            "1 tomato",
            "1 cucumber",
            "1 onion",
            "1 capsicum",
            "2 tablespoons mayonnaise",
            "1 tablespoon butter",
            "Black pepper",
            "Salt"
        ],
        instructions: [
            "Wash and slice all vegetables.",
            "Spread mayonnaise on the bread.",
            "Place tomato, cucumber, onion, and capsicum.",
            "Add salt and black pepper.",
            "Cover with another bread slice.",
            "Apply butter on the outside.",
            "Toast until golden brown.",
            "Cut and serve."
        ]
    },

    {
        id: 10,
        title: "Vegetable Soup",
        category: "dinner",
        time: "25 mins",
        difficulty: "Easy",
        servings: "3",
        image: "../assets/images/recipes/vegetable-soup.jpg",
        description:
            "Warm and healthy vegetable soup made with fresh vegetables and simple seasoning.",
        ingredients: [
            "1 carrot",
            "1/2 cabbage",
            "1 capsicum",
            "1 onion",
            "2 garlic cloves",
            "4 cups water",
            "1 teaspoon pepper",
            "1 tablespoon corn flour",
            "Salt",
            "Oil"
        ],
        instructions: [
            "Wash and chop all vegetables.",
            "Heat oil in a large pot.",
            "Add garlic and onion.",
            "Add all chopped vegetables.",
            "Add water and bring it to a boil.",
            "Cook until the vegetables become soft.",
            "Add pepper and salt.",
            "Add corn flour mixed with water.",
            "Cook for another 2 minutes.",
            "Serve hot."
        ]
    },

    {
        id: 11,
        title: "Aloo Paratha",
        category: "breakfast",
        time: "35 mins",
        difficulty: "Medium",
        servings: "3",
        image: "../assets/images/recipes/aloo-paratha.jpg",
        description:
            "Soft whole wheat flatbread stuffed with a spiced mashed potato filling, served with butter.",
        ingredients: [
            "3 potatoes",
            "2 cups wheat flour",
            "1 onion",
            "2 green chillies",
            "1 teaspoon cumin seeds",
            "Coriander leaves",
            "Salt",
            "Ghee or butter",
            "Water"
        ],
        instructions: [
            "Boil and mash the potatoes.",
            "Mix mashed potatoes with onion, chillies, cumin, and salt.",
            "Knead the wheat flour into a soft dough.",
            "Divide the dough into balls and stuff with potato filling.",
            "Roll gently into flat parathas.",
            "Cook on a hot tawa with ghee until golden on both sides.",
            "Serve hot with butter and pickle."
        ]
    },

    {
        id: 12,
        title: "Berry Cheesecake",
        category: "dessert",
        time: "50 mins",
        difficulty: "Hard",
        servings: "6",
        image: "../assets/images/recipes/berry-cheesecake.jpg",
        description:
            "Creamy baked cheesecake topped with a fresh mixed berry compote.",
        ingredients: [
            "200 grams biscuits",
            "100 grams butter",
            "500 grams cream cheese",
            "3/4 cup sugar",
            "2 eggs",
            "1 teaspoon vanilla extract",
            "1 cup mixed berries",
            "2 tablespoons berry jam"
        ],
        instructions: [
            "Crush the biscuits and mix with melted butter.",
            "Press the mixture into a pan to form the base.",
            "Beat cream cheese, sugar, eggs, and vanilla until smooth.",
            "Pour the mixture over the biscuit base.",
            "Bake until the center is just set.",
            "Cool completely, then refrigerate for a few hours.",
            "Top with mixed berries and berry jam before serving."
        ]
    },

    {
        id: 13,
        title: "Berry Pancakes",
        category: "breakfast",
        time: "20 mins",
        difficulty: "Easy",
        servings: "2",
        image: "../assets/images/recipes/berry-pancakes.jpg",
        description:
            "Fluffy pancakes loaded with fresh berries and a drizzle of maple syrup.",
        ingredients: [
            "1 cup all-purpose flour",
            "1 tablespoon sugar",
            "1 teaspoon baking powder",
            "1 egg",
            "3/4 cup milk",
            "1 tablespoon butter",
            "1 cup mixed berries",
            "Maple syrup"
        ],
        instructions: [
            "Mix flour, sugar, and baking powder.",
            "Add egg and milk, whisk into a smooth batter.",
            "Fold in half the berries.",
            "Heat a pan and add butter.",
            "Pour batter and cook until bubbles form, then flip.",
            "Cook until golden on both sides.",
            "Top with remaining berries and maple syrup."
        ]
    },

    {
        id: 14,
        title: "Butter Chicken",
        category: "dinner",
        time: "45 mins",
        difficulty: "Medium",
        servings: "4",
        image: "../assets/images/recipes/butter-chicken.jpg",
        description:
            "Rich and creamy tomato-based chicken curry finished with butter and cream.",
        ingredients: [
            "500 grams chicken",
            "2 cups tomato puree",
            "1/2 cup cream",
            "2 tablespoons butter",
            "1 tablespoon ginger garlic paste",
            "1 teaspoon garam masala",
            "1 teaspoon kashmiri chilli powder",
            "Salt",
            "Coriander leaves"
        ],
        instructions: [
            "Marinate the chicken with ginger garlic paste and spices.",
            "Grill or pan-sear the chicken until cooked.",
            "Heat butter in a pan and add tomato puree.",
            "Add garam masala, chilli powder, and salt.",
            "Simmer the sauce until thick.",
            "Add the cooked chicken and cream.",
            "Simmer for a few more minutes.",
            "Garnish with coriander leaves and serve hot."
        ]
    },

    {
        id: 15,
        title: "Fish Curry Rice",
        category: "lunch",
        time: "40 mins",
        difficulty: "Medium",
        servings: "3",
        image: "../assets/images/recipes/fish-curry-rice.jpg",
        description:
            "Tangy and spicy fish curry served over steamed rice.",
        ingredients: [
            "400 grams fish",
            "2 cups cooked rice",
            "1 onion",
            "2 tomatoes",
            "1 tablespoon ginger garlic paste",
            "1 teaspoon turmeric powder",
            "1 tablespoon fish curry masala",
            "Curry leaves",
            "Salt",
            "Oil"
        ],
        instructions: [
            "Clean and marinate the fish with turmeric and salt.",
            "Heat oil in a pan and add curry leaves and onion.",
            "Add ginger garlic paste and tomatoes.",
            "Add fish curry masala and cook until oil separates.",
            "Add water and bring to a boil.",
            "Add fish pieces and simmer until cooked.",
            "Serve hot over steamed rice."
        ]
    },

    {
        id: 16,
        title: "Poori with Potato Curry",
        category: "breakfast",
        time: "35 mins",
        difficulty: "Medium",
        servings: "3",
        image: "../assets/images/recipes/poori-potato.jpg",
        description:
            "Deep-fried puffed bread served with a mildly spiced potato curry.",
        ingredients: [
            "2 cups wheat flour",
            "3 potatoes",
            "1 onion",
            "1 teaspoon mustard seeds",
            "Curry leaves",
            "1/2 teaspoon turmeric powder",
            "Salt",
            "Oil for frying"
        ],
        instructions: [
            "Knead the wheat flour into a firm dough.",
            "Boil and mash the potatoes.",
            "Heat oil, add mustard seeds and curry leaves.",
            "Add onion and turmeric, then the mashed potatoes.",
            "Add salt and a little water, simmer briefly.",
            "Roll the dough into small circles.",
            "Deep fry each until puffed and golden.",
            "Serve hot pooris with the potato curry."
        ]
    },

    {
        id: 17,
        title: "Spring Rolls",
        category: "dinner",
        time: "30 mins",
        difficulty: "Medium",
        servings: "4",
        image: "../assets/images/recipes/spring-rolls.jpg",
        description:
            "Crispy fried rolls filled with a savory mix of vegetables.",
        ingredients: [
            "10 spring roll sheets",
            "1 carrot",
            "1 cup shredded cabbage",
            "1 capsicum",
            "2 tablespoons soy sauce",
            "1 teaspoon pepper",
            "Salt",
            "Oil for frying",
            "Corn flour paste (for sealing)"
        ],
        instructions: [
            "Shred and stir-fry the carrot, cabbage, and capsicum.",
            "Add soy sauce, pepper, and salt to the filling.",
            "Let the filling cool slightly.",
            "Place filling on a spring roll sheet and roll tightly.",
            "Seal the edges with corn flour paste.",
            "Heat oil and deep fry the rolls until crisp and golden.",
            "Slice and serve with dipping sauce."
        ]
    },

    {
        id: 18,
        title: "Chicken Tacos",
        category: "dinner",
        time: "25 mins",
        difficulty: "Easy",
        servings: "3",
        image: "../assets/images/recipes/tacos.jpg",
        description:
            "Soft taco shells filled with seasoned chicken, fresh veggies, and salsa.",
        ingredients: [
            "6 taco shells",
            "300 grams chicken",
            "1 onion",
            "1 capsicum",
            "1 teaspoon taco seasoning",
            "1 tomato",
            "Lettuce",
            "Salsa",
            "Grated cheese"
        ],
        instructions: [
            "Cut the chicken into strips and season with taco seasoning.",
            "Cook the chicken with onion and capsicum until done.",
            "Warm the taco shells.",
            "Fill each shell with the cooked chicken mixture.",
            "Top with lettuce, tomato, cheese, and salsa.",
            "Serve immediately."
        ]
    },

    {
        id: 19,
        title: "Vegetable Sushi",
        category: "lunch",
        time: "40 mins",
        difficulty: "Hard",
        servings: "2",
        image: "../assets/images/recipes/vegetable-sushi.jpg",
        description:
            "Fresh vegetable sushi rolls made with seasoned rice and crisp vegetables.",
        ingredients: [
            "2 cups sushi rice",
            "3 tablespoons rice vinegar",
            "4 nori sheets",
            "1 cucumber",
            "1 carrot",
            "1 avocado",
            "Soy sauce",
            "Pickled ginger"
        ],
        instructions: [
            "Cook the sushi rice and mix with rice vinegar.",
            "Let the rice cool to room temperature.",
            "Cut cucumber, carrot, and avocado into thin strips.",
            "Place a nori sheet on a bamboo mat and spread rice evenly.",
            "Layer the vegetable strips in the center.",
            "Roll tightly using the bamboo mat.",
            "Slice into pieces and serve with soy sauce and pickled ginger."
        ]
    },

    {
        id: 20,
        title: "Ven Pongal",
        category: "breakfast",
        time: "30 mins",
        difficulty: "Easy",
        servings: "3",
        image: "../assets/images/recipes/ven-pongal.jpg",
        description:
            "A comforting South Indian dish made with rice and lentils, tempered with pepper and cumin.",
        ingredients: [
            "1 cup rice",
            "1/2 cup moong dal",
            "4 cups water",
            "1 teaspoon black pepper",
            "1 teaspoon cumin seeds",
            "Curry leaves",
            "Cashews",
            "2 tablespoons ghee",
            "Salt"
        ],
        instructions: [
            "Dry roast the moong dal lightly.",
            "Wash the rice and dal together.",
            "Pressure cook rice and dal with water until soft and mushy.",
            "Heat ghee in a pan, add cumin, pepper, and curry leaves.",
            "Fry cashews until golden.",
            "Pour the tempering over the cooked rice and dal.",
            "Add salt and mix well.",
            "Serve hot with chutney or sambar."
        ]
    },
        {
        id: 21,
        title: "Avocado Toast",
        category: "breakfast",
        time: "15 mins",
        difficulty: "Easy",
        servings: "2",

        image: "../assets/images/recipes/avocado-toast.jpg",

        description:
            "Creamy avocado spread on crispy toast, perfect for a healthy breakfast.",

        ingredients: [
            "2 bread slices",
            "1 ripe avocado",
            "1 teaspoon lemon juice",
            "Black pepper",
            "Salt",
            "Chilli flakes"
        ],

        instructions: [
            "Toast the bread slices.",
            "Cut and mash the avocado.",
            "Add lemon juice, salt, and pepper.",
            "Spread avocado on the toast.",
            "Sprinkle chilli flakes.",
            "Serve fresh."
        ]
    },

    {
        id: 22,
        title: "Chicken Curry",
        category: "lunch",
        time: "45 mins",
        difficulty: "Medium",
        servings: "4",

        image: "../assets/images/recipes/chicken-curry.jpg",

        description:
            "Flavourful chicken curry cooked with onions, tomatoes, and aromatic spices.",

        ingredients: [
            "500 grams chicken",
            "2 onions",
            "2 tomatoes",
            "1 tablespoon ginger garlic paste",
            "1 teaspoon turmeric powder",
            "1 tablespoon chilli powder",
            "1 teaspoon garam masala",
            "Coriander leaves",
            "Salt",
            "Oil"
        ],

        instructions: [
            "Clean and cut the chicken.",
            "Heat oil in a pan.",
            "Add onions and cook until golden.",
            "Add ginger garlic paste.",
            "Add tomatoes and spices.",
            "Add chicken and mix well.",
            "Add water and cook until chicken is tender.",
            "Garnish with coriander leaves.",
            "Serve hot."
        ]
    },

    {
        id: 23,
        title: "Chocolate Brownie",
        category: "dessert",
        time: "40 mins",
        difficulty: "Medium",
        servings: "6",

        image: "../assets/images/recipes/chocolate-brownie.jpg",

        description:
            "Rich and fudgy chocolate brownies with a delicious chocolate flavour.",

        ingredients: [
            "1 cup all-purpose flour",
            "1/2 cup cocoa powder",
            "1 cup sugar",
            "1/2 cup butter",
            "2 eggs",
            "1 teaspoon vanilla extract",
            "1/2 cup chocolate chips",
            "Salt"
        ],

        instructions: [
            "Preheat the oven.",
            "Melt the butter and chocolate.",
            "Mix eggs, sugar, and vanilla.",
            "Add flour and cocoa powder.",
            "Mix until the batter is smooth.",
            "Pour into a baking pan.",
            "Bake until the brownie is set.",
            "Cool and cut into squares.",
            "Serve."
        ]
    },

    {
        id: 24,
        title: "Grilled Salmon",
        category: "dinner",
        time: "25 mins",
        difficulty: "Medium",
        servings: "2",

        image: "../assets/images/recipes/grilled-salmon.jpg",

        description:
            "Tender grilled salmon seasoned with herbs and fresh lemon.",

        ingredients: [
            "2 salmon fillets",
            "1 tablespoon olive oil",
            "1 tablespoon lemon juice",
            "1 teaspoon garlic",
            "Black pepper",
            "Salt",
            "Fresh herbs"
        ],

        instructions: [
            "Clean the salmon fillets.",
            "Season with salt, pepper, and garlic.",
            "Add lemon juice and olive oil.",
            "Heat a grill pan.",
            "Grill the salmon until fully cooked.",
            "Garnish with fresh herbs.",
            "Serve hot."
        ]
    },

    {
        id: 25,
        title: "Quinoa Salad",
        category: "lunch",
        time: "20 mins",
        difficulty: "Easy",
        servings: "2",

        image: "../assets/images/recipes/quinoa-salad.jpg",

        description:
            "Fresh and healthy quinoa salad with colourful vegetables and lemon dressing.",

        ingredients: [
            "1 cup quinoa",
            "1 cucumber",
            "1 tomato",
            "1/2 capsicum",
            "1/2 cup corn",
            "1 tablespoon lemon juice",
            "Black pepper",
            "Salt"
        ],

        instructions: [
            "Wash and cook the quinoa.",
            "Let the quinoa cool.",
            "Chop all vegetables.",
            "Add quinoa and vegetables into a bowl.",
            "Add lemon juice, pepper, and salt.",
            "Mix well and serve."
        ]
    },

    {
        id: 26,
        title: "Vegetable Stir Fry",
        category: "dinner",
        time: "20 mins",
        difficulty: "Easy",
        servings: "3",

        image: "../assets/images/recipes/vegetable-stir-fry.jpg",

        description:
            "Colourful vegetables stir-fried with garlic and simple spices.",

        ingredients: [
            "1 carrot",
            "1 capsicum",
            "1 cup broccoli",
            "1 onion",
            "2 garlic cloves",
            "1 tablespoon soy sauce",
            "Black pepper",
            "Salt",
            "Oil"
        ],

        instructions: [
            "Wash and chop all vegetables.",
            "Heat oil in a pan.",
            "Add garlic and onion.",
            "Add carrot, capsicum, and broccoli.",
            "Stir-fry the vegetables.",
            "Add soy sauce, pepper, and salt.",
            "Mix well and serve hot."
        ]
    }
    
];


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
            "group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl";

        recipeCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img
                    src="${recipe.image}"
                    alt="${recipe.title}"
                    class="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                >

                <span class="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-orange-600 shadow">
                    ${recipe.category}
                </span>
            </div>

            <div class="p-6">

                <div class="mb-3 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>⏱️ ${recipe.time}</span>
                    <span>🔥 ${recipe.difficulty}</span>
                </div>

                <h3 class="text-xl font-extrabold">
                    ${recipe.title}
                </h3>

                <p class="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                    ${recipe.description}
                </p>

                <button
                    class="viewRecipeButton mt-6 w-full rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                    data-id="${recipe.id}"
                >
                    View Recipe
                </button>

            </div>
        `;

        recipeContainer.appendChild(recipeCard);
    });

    const viewButtons = document.querySelectorAll(".viewRecipeButton");

    viewButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const recipeId = Number(button.dataset.id);
            openRecipeModal(recipeId);
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

        categoryButtons.forEach(function (item) {
            item.classList.remove("bg-orange-500", "text-white");
            item.classList.add("bg-white", "text-slate-800");
        });

        button.classList.remove("bg-white", "text-slate-800");
        button.classList.add("bg-orange-500", "text-white");

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
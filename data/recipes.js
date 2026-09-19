const recipes = [
    {
        id: 1,
        title: "Chicken Pasta",
        category: "Dinner",
        difficulty: "Easy",
        time: 30,
        servings: 2,
        image: "chicken-pasta.jpg",
        ingredients: [
            "200g chicken",
            "150g pasta",
            "1 tomato",
            "1 onion"
        ],
        steps: [
            "Boil the pasta",
            "Cook the chicken",
            "Add onion and tomato",
            "Mix pasta and chicken",
            "Serve hot"
        ]
    },

    {
        id: 2,
        title: "Veg Sandwich",
        category: "Breakfast",
        difficulty: "Easy",
        time: 15,
        servings: 1,
        image: "veg-sandwich.jpg",
        ingredients: [
            "2 bread slices",
            "1 tomato",
            "1 cucumber",
            "Cheese"
        ],
        steps: [
            "Cut the vegetables",
            "Place vegetables on bread",
            "Add cheese",
            "Toast the sandwich"
        ]
    },

    {
        id: 3,
        title: "Fruit Bowl",
        category: "Healthy",
        difficulty: "Easy",
        time: 10,
        servings: 1,
        image: "fruit-bowl.jpg",
        ingredients: [
            "1 banana",
            "1 apple",
            "1 orange",
            "1 cup grapes"
        ],
        steps: [
            "Wash the fruits",
            "Cut the fruits",
            "Put everything in a bowl",
            "Mix and serve"
        ]
    },

    {
        id: 4,
        title: "Tomato Rice",
        category: "Lunch",
        difficulty: "Easy",
        time: 25,
        servings: 2,
        image: "tomato-rice.jpg",
        ingredients: [
            "1 cup rice",
            "2 tomatoes",
            "1 onion",
            "Spices"
        ],
        steps: [
            "Cook the rice",
            "Chop tomato and onion",
            "Cook tomato and onion",
            "Add spices",
            "Mix with rice"
        ]
    },

    {
        id: 5,
        title: "Masala Dosa",
        category: "Breakfast",
        difficulty: "Medium",
        time: 35,
        servings: 2,
        image: "masala-dosa.jpg",
        ingredients: [
            "Dosa batter",
            "2 potatoes",
            "1 onion",
            "Green chilli",
            "Spices"
        ],
        steps: [
            "Prepare potato masala",
            "Heat the dosa pan",
            "Spread dosa batter",
            "Add potato masala",
            "Fold and serve"
        ]
    },

    {
        id: 6,
        title: "Paneer Fried Rice",
        category: "Dinner",
        difficulty: "Medium",
        time: 30,
        servings: 2,
        image: "paneer-fried-rice.jpg",
        ingredients: [
            "2 cups cooked rice",
            "100g paneer",
            "1 carrot",
            "1 capsicum",
            "Soy sauce"
        ],
        steps: [
            "Cut the vegetables",
            "Cut paneer into cubes",
            "Fry the vegetables",
            "Add paneer",
            "Add cooked rice and sauce",
            "Mix well"
        ]
    },

    {
        id: 7,
        title: "Chocolate Pancakes",
        category: "Dessert",
        difficulty: "Easy",
        time: 20,
        servings: 2,
        image: "chocolate-pancakes.jpg",
        ingredients: [
            "1 cup flour",
            "1 egg",
            "1 cup milk",
            "2 tbsp cocoa powder",
            "Chocolate syrup"
        ],
        steps: [
            "Mix flour and cocoa powder",
            "Add egg and milk",
            "Prepare the batter",
            "Cook pancakes on a pan",
            "Add chocolate syrup"
        ]
    },

    {
        id: 8,
        title: "Vegetable Soup",
        category: "Healthy",
        difficulty: "Easy",
        time: 25,
        servings: 3,
        image: "vegetable-soup.jpg",
        ingredients: [
            "1 carrot",
            "1 potato",
            "1 tomato",
            "1 cup beans",
            "Salt and pepper"
        ],
        steps: [
            "Chop all vegetables",
            "Boil the vegetables",
            "Add salt and pepper",
            "Cook until vegetables are soft",
            "Serve hot"
        ]
    },

    {
        id: 9,
        title: "Chicken Biryani",
        category: "Lunch",
        difficulty: "Hard",
        time: 60,
        servings: 4,
        image: "chicken-biryani.jpg",
        ingredients: [
            "500g chicken",
            "2 cups basmati rice",
            "2 onions",
            "2 tomatoes",
            "Biryani spices"
        ],
        steps: [
            "Marinate the chicken",
            "Cook the onions and tomatoes",
            "Add chicken and spices",
            "Cook the rice separately",
            "Layer rice and chicken",
            "Cook on low heat"
        ]
    },

    {
        id: 10,
        title: "Mango Smoothie",
        category: "Drinks",
        difficulty: "Easy",
        time: 10,
        servings: 2,
        image: "mango-smoothie.jpg",
        ingredients: [
            "1 ripe mango",
            "1 cup milk",
            "2 tbsp sugar",
            "Ice cubes"
        ],
        steps: [
            "Peel and cut the mango",
            "Add mango and milk to blender",
            "Add sugar and ice",
            "Blend until smooth",
            "Serve chilled"
        ]
    },

    {
        id: 11,
        title: "Chocolate Brownie",
        category: "Dessert",
        difficulty: "Medium",
        time: 40,
        servings: 4,
        image: "chocolate-brownie.jpg",
        ingredients: [
            "1 cup flour",
            "1/2 cup cocoa powder",
            "1 cup sugar",
            "2 eggs",
            "100g butter"
        ],
        steps: [
            "Mix flour and cocoa powder",
            "Add sugar, eggs and butter",
            "Pour into a baking tray",
            "Bake for 30 minutes"
        ]
    },

    {
        id: 12,
        title: "Grilled Salmon",
        category: "Dinner",
        difficulty: "Medium",
        time: 25,
        servings: 2,
        image: "grilled-salmon.jpg",
        ingredients: [
            "2 salmon fillets",
            "1 tbsp olive oil",
            "1 lemon",
            "Salt",
            "Black pepper"
        ],
        steps: [
            "Season the salmon",
            "Heat a grill pan",
            "Grill both sides",
            "Add lemon juice and serve"
        ]
    },

    {
        id: 13,
        title: "Avocado Toast",
        category: "Breakfast",
        difficulty: "Easy",
        time: 10,
        servings: 1,
        image: "avocado-toast.jpg",
        ingredients: [
            "2 bread slices",
            "1 avocado",
            "Salt",
            "Black pepper",
            "1/2 lemon"
        ],
        steps: [
            "Toast the bread",
            "Mash the avocado",
            "Add lemon juice and seasoning",
            "Spread over toast"
        ]
    },

    {
        id: 14,
        title: "Healthy Quinoa Salad",
        category: "Healthy",
        difficulty: "Easy",
        time: 20,
        servings: 2,
        image: "quinoa-salad.jpg",
        ingredients: [
            "1 cup cooked quinoa",
            "1 cucumber",
            "1 tomato",
            "Sweet corn",
            "Lemon juice"
        ],
        steps: [
            "Cook the quinoa",
            "Chop the vegetables",
            "Add everything to a bowl",
            "Mix with lemon juice and serve"
        ]
    },

    {
        id: 15,
        title: "Chicken Curry",
        category: "Lunch",
        difficulty: "Medium",
        time: 45,
        servings: 4,
        image: "chicken-curry.jpg",
        ingredients: [
            "500g chicken",
            "2 onions",
            "2 tomatoes",
            "1 tbsp ginger garlic paste",
            "Curry spices"
        ],
        steps: [
            "Cook onions until golden",
            "Add ginger garlic paste",
            "Add tomatoes and spices",
            "Add chicken and cook until done"
        ]
    },

    {
        id: 16,
        title: "Vegetable Stir Fry",
        category: "Lunch",
        difficulty: "Easy",
        time: 20,
        servings: 2,
        image: "vegetable-stir-fry.jpg",
        ingredients: [
            "1 carrot",
            "1 bell pepper",
            "1 cup broccoli",
            "1 onion",
            "2 tbsp soy sauce"
        ],
        steps: [
            "Chop all vegetables",
            "Heat oil in a pan",
            "Stir fry the vegetables",
            "Add soy sauce and serve"
        ]
    }

];

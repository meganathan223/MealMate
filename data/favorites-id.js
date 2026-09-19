document.addEventListener('DOMContentLoaded', () => {
  const favoritesContainer = document.getElementById('favoritesContainer');
  const favoriteIds = JSON.parse(localStorage.getItem('favoriteRecipeIds')) || [];

  if (favoriteIds.length === 0) {
    favoritesContainer.innerHTML = `
      <div class="text-center py-16 bg-white rounded-2xl border border-green-100 shadow-sm">
        <div class="text-6xl mb-4">🤍</div>
        <h2 class="text-2xl font-bold text-green-900 mb-2">No favorites yet</h2>
        <p class="text-green-600 mb-6">Start adding recipes you love!</p>
        <a href="recipes.html" class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition">
          Browse Recipes
        </a>
      </div>
    `;
    return;
  }

  const favoriteRecipes = recipes.filter(recipe => favoriteIds.includes(recipe.id));

  favoritesContainer.innerHTML = favoriteRecipes.map(recipe => `
    <div class="flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-green-100">
      <div class="flex items-center gap-4">
        <img src="${recipe.image}" alt="${recipe.title}" class="w-16 h-16 rounded-xl object-cover">
        <div>
          <h3 class="font-bold text-green-900 text-lg">${recipe.title}</h3>
          <p class="text-sm text-green-600">${recipe.category} • ${recipe.difficulty}</p>
        </div>
      </div>
      <a href="recipes.html?id=${recipe.id}" class="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition">
        View Recipe
      </a>
    </div>
  `).join('');
});
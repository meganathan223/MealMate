document.addEventListener('DOMContentLoaded', () => {
  const recipeContainer = document.getElementById('recipeContainer');
  const searchInput = document.getElementById('searchInput');
  const categoryButtons = document.querySelectorAll('.categoryButton');
  const emptyMessage = document.getElementById('emptyMessage');
  const modal = document.getElementById('recipeModal');
  const closeModalBtn = document.getElementById('closeModal');

  let currentCategory = 'all';
  let currentSearch = '';

  // --- Render Recipes ---
  function renderRecipes() {
    const filtered = recipes.filter(recipe => {
      const matchesCategory = currentCategory === 'all' || recipe.category === currentCategory;
      const matchesSearch = recipe.title.toLowerCase().includes(currentSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      recipeContainer.innerHTML = '';
      emptyMessage.classList.remove('hidden');
      return;
    }

    emptyMessage.classList.add('hidden');

    recipeContainer.innerHTML = filtered.map(recipe => `
      <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition hover:shadow-lg flex flex-col">
        <img src="${recipe.image}" alt="${recipe.title}" class="h-48 w-full object-cover">
        <div class="p-5 flex-1 flex flex-col">
          <span class="text-xs font-bold uppercase tracking-wider text-orange-500 mb-1">${recipe.category}</span>
          <h3 class="text-xl font-bold text-slate-800 mb-2">${recipe.title}</h3>
          <p class="text-sm text-slate-500 mb-4 flex items-center gap-2">
            <span>⏱️ ${recipe.time}</span>
            <span>•</span>
            <span>🔥 ${recipe.difficulty}</span>
          </p>
          <button onclick="openRecipeModal(${recipe.id})" class="mt-auto w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl transition">
            View Details
          </button>
        </div>
      </div>
    `).join('');
  }

  // --- Search & Filter Events ---
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderRecipes();
  });

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active styles
      categoryButtons.forEach(b => {
        b.classList.remove('bg-orange-500', 'text-white');
        b.classList.add('bg-white', 'text-slate-800');
      });
      btn.classList.remove('bg-white', 'text-slate-800');
      btn.classList.add('bg-orange-500', 'text-white');

      currentCategory = btn.dataset.category;
      renderRecipes();
    });
  });

  // --- Modal Logic ---
  window.openRecipeModal = function(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    // Populate Modal Fields
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalCategory').textContent = recipe.category;
    document.getElementById('modalDescription').textContent = recipe.description;
    document.getElementById('modalTime').textContent = recipe.time;
    document.getElementById('modalDifficulty').textContent = recipe.difficulty;
    document.getElementById('modalServings').textContent = recipe.servings;

    document.getElementById('modalIngredients').innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join('');
    document.getElementById('modalInstructions').innerHTML = recipe.instructions.map(i => `<li>${i}</li>`).join('');

    // --- Dynamically Add "Add to Favorites" Button ---
    let favBtn = document.getElementById('modalFavoriteBtn');
    if (!favBtn) {
      favBtn = document.createElement('button');
      favBtn.id = 'modalFavoriteBtn';
      favBtn.className = 'mt-8 w-full rounded-full px-6 py-3 font-semibold transition flex items-center justify-center gap-2';
      document.querySelector('#recipeModal .p-7').appendChild(favBtn);
    }

    updateFavoriteButton(favBtn, recipe.id);

    favBtn.onclick = () => {
      toggleFavorite(recipe.id);
      updateFavoriteButton(favBtn, recipe.id);
    };

    // Show Modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });

  // --- Favorites Helper Functions ---
  function toggleFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem('favoriteRecipeIds')) || [];
    if (favorites.includes(id)) {
      favorites = favorites.filter(favId => favId !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem('favoriteRecipeIds', JSON.stringify(favorites));
  }

  function updateFavoriteButton(btn, id) {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipeIds')) || [];
    const isFavorited = favorites.includes(id);
    
    if (isFavorited) {
      btn.innerHTML = '❤️ Remove from Favorites';
      btn.classList.remove('bg-pink-100', 'text-pink-600', 'hover:bg-pink-200');
      btn.classList.add('bg-pink-600', 'text-white', 'hover:bg-pink-700');
    } else {
      btn.innerHTML = '🤍 Add to Favorites';
      btn.classList.add('bg-pink-100', 'text-pink-600', 'hover:bg-pink-200');
      btn.classList.remove('bg-pink-600', 'text-white', 'hover:bg-pink-700');
    }
  }

  // Initial Render
  renderRecipes();

  // Check if URL has an ID to auto-open modal (e.g., from Favorites page)
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get('id');
  if (recipeId) {
    openRecipeModal(parseInt(recipeId, 10));
  }
});
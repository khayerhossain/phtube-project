function loadCategories() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
}
function displayCategories(categories) {
    const categoriesContainer = document.getElementById('categories-container')
    for (let cat of categories) {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
      <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm  hover:bg-[#FF1F3D] hover:text-white"> ${cat.category}</button>
      `;
        categoriesContainer.appendChild(categoryDiv);
    }
}
loadCategories();
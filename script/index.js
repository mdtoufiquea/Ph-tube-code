console.log('file is connect')

function loadCategories(){

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
}

function displayCategories(categories){
    const categoryContainer = document.getElementById('category-container') 

    for(let cat of categories){
       const div = document.createElement("div")
       div.innerHTML= `
       <button class="btn btn-sm hover:bg-[#FF1F3D]">${cat.category}</button>
        
       `
       categoryContainer.appendChild(div)
    }
}

loadCategories()
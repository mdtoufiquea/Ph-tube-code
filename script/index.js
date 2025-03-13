console.log('file is connected')

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
       <button  onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D]">${cat.category}</button>
        
       `
       categoryContainer.appendChild(div)
    }
}

loadCategories()


function loadVideo(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(response => response.json())
    .then(data => displayVideo(data.videos))
}

const displayVideo = (videos) => {
    const videoContainer= document.getElementById('video-container')
    videoContainer.innerHTML = "";

    if(videos.length == 0){
      videoContainer.innerHTML = `
      <div class="py-20 col-span-full flex flex-col justify-center items-center gap-5">
            <img src="images/Icon.png" alt="">
            <h1 class="text-3xl font-bold">Oops!! Sorry, There is no content here</h1>
        </div>
      `
      return;
    }

    videos.forEach(video => {
        console.log(video)
        

        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
         <div class="card bg-base-100 ">
            <figure class="relative">
              <img class = "w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 bg-black text-white px-2 rounded-sm">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
              <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>
              <div class="intro">
                <h2 class="text-sm font-semibold">${video.title}</h2>
                <p class="flex gap-1 text-gray-400 text-sm">${video.authors[0].profile_name}<img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                <p class=" text-gray-400 text-sm">${video.others.views} views</p>
              </div>
            </div>
          </div>
        `;
        videoContainer.append(videoCard)

    });
}


const loadCategoryVideos = (id) => {

  
  const url = `
  https://openapi.programming-hero.com/api/phero-tube/category/${id}
  `
  console.log(url)

  fetch(url)
  .then(res => res.json())
  .then(data => displayVideo(data.category))
}

function clicked(category_id){

  document.getElementById(category_id).style.backgroundColor = 'red'

}

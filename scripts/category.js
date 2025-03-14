const loadCategoryVideos = (id) => {
    showLoader()
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log("Fetching data from:", url); // Debugging: Check URL

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log("API Response:", data); // Debugging: Check full response
            const clickedButton = document.getElementById(`btn-${id}`)
            clickedButton.classList.add("active");
            if (!data.category) {
                console.error("Error: 'category' property is missing in API response.");
                return;
            }
            displayVideos(data.category); // Fix: Use 'category' instead of 'videos'
        })
        .catch((error) => console.error("Error fetching category videos:", error));
};
const removeClassList = () => {
    const activeBtn = document.getElementsByClassName("active");
    for (let btn of activeBtn) {
        btn.classList.remove("active");
    }
}
removeClassList()


const loadVideoDetails = (videoId) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayVideoDetails(data.video))

}
const displayVideoDetails = (video) => {
    document.getElementById('video-details').showModal();
    const videoDetailsContainer = document.getElementById('video-details');
    videoDetailsContainer.innerHTML = `
    <div class="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img class=""
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p> card component has a figure, a body part, and inside body there are title and actions parts
     card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
</div>
    `;
}

const showLoader = () => {
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("video-container").classList.add("hidden");


}

const hideLoader = () => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("video-container").classList.remove("hidden");


}
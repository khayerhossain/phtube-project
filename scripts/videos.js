function loadVideos(searchText = "") {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos));
    showLoader()

}

const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos-container');
    videosContainer.innerHTML = ""; // Clear old videos
    if (videos.length == 0) {
        videosContainer.innerHTML = `
  <div class="py-20 col-span-full flex flex-col justify-center items-center">
    <img class="w-[150px]" src="assets/Icon.png" alt="">
    <h1 class="text-3xl font-bold">Oops!! Sorry, There is no content here</h1>
    </div>
`;
        return;
    }

    videos.forEach((video) => {
        const videosCard = document.createElement('div');
        videosCard.innerHTML = `
            <div class="card bg-base-100 lg:h-[350px]">
                <figure class="relative">
                    <img src="${video.thumbnail}" alt="" class="rounded w-full lg:h-[220px] object-cover" />
                    <p class="text-sm text-white bg-black rounded px-2 absolute bottom-2 right-2">
                        ${video.others.posted_date} sec ago
                    </p>
                </figure>
                <div class="flex gap-2 px-0 py-5">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 h-6 rounded-full ring ring-offset-2 mt-1 ml-4">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                    <div class="intro">
                        <h2 class="text-lg font-semibold">${video.title}</h2>
                        <p class="text-sm flex justify-center items-center text-gray-400">
                            ${video.authors[0].profile_name}
                            ${video.authors[0].verified ? '<img class="w-4 h-4" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">' : ""}
                        </p>
                        <p class="text-sm text-gray-400">${video.others.views} views</p>
                    </div>
                </div>
                <button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-wide">Show Details</button>
            </div>
        `;
        videosContainer.appendChild(videosCard);
    });
    hideLoader()
};

document.getElementById("input-box").addEventListener("keyup", (e) => {
    const input = e.target.value;
    loadVideos(input);
})

// loadVideos();

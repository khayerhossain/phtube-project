function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos').
        then((res) => res.json())
        .then((data) => displayVideos(data.videos))
}
const displayVideos = (videos) => {
    const videosContainer = document.getElementById('videos-container');
    videos.forEach((video) => {
        // console.log(video)
        const videosCard = document.createElement('div');
        videosCard.innerHTML = `
 <div class="card bg-base-100  lg:h-[350px] ">
      <figure class=" relative">
          <img src="${video.thumbnail}" alt="" class=" rounded w-full lg:h-[220px] object-cover" />
          <p class="text-sm text-white bg-black rounded px-2 absolute bottom-2 right-2">3hrs 56 min ago</p>
      </figure>
      <div class="flex gap-2 px-0 py-5">
          <div class="avatar">
              <div
                  class="ring-primary ring-offset-base-100 w-6 h-6 rounded-full ring ring-offset-2 mt-1 ml-4">
                  <img src="${video.authors[0].profile_picture}" />
              </div>
          </div>
          <div class="intro">
              <h2 class="text-lg font-semibold">${video.title}</h2>
              <p class="text-sm flex justify-center items-center text-gray-400">
              ${video.authors[0].profile_name}
                  <img class="w-4 h-4 ml-1" src="https://icons8.com/icon/98A4yZTt9abw/verified-badge"
                      alt="">
              </p>
              <p class="text-sm text-gray-400">${video.others.views} views</p>
          </div>
      </div>
  </div>
`;
        videosContainer.appendChild(videosCard);

    });
}
// loadVideos()




// {
//     "category_id": "1003",
//     "video_id": "aaae",
//     "thumbnail": "https://i.ibb.co/Yc4p5gD/inside-amy.jpg",
//     "title": "Inside Amy Schumer",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/YD2mqH7/amy.jpg",
//             "profile_name": "Amy Schumer",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "3.6K",
//         "posted_date": "15147"
//     },
//     "description": "'Inside Amy Schumer' is a comedy show by the popular comedian Amy Schumer, blending sharp satire and unfiltered humor to tackle everyday issues and societal norms. With 3.6K views, the show promises a blend of hilarious sketches, thought-provoking stand-up, and candid interviews. It's a must-watch for fans of bold, edgy comedy."
// }
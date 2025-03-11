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
<div class="card bg-base-100 h-[350px]  shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src="${video.thumbnail}"
      alt=""
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions">
    </div>
  </div>
</div>
`;
        videosContainer.appendChild(videosCard);

    });
}
loadVideos()




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
const videoData = {
    currentVideo: {
        title: "Sample Video Title",
        description: "Sample Video Description",
        videoUrl: "https://www.example.com/sample-video.mp4"
    },
    recommendedVideos: [
        { title: "Video 1", description: "Description 1", thumbnail: "video1.jpg", videoUrl: "https://www.example.com/video1.mp4" },
        { title: "Video 2", description: "Description 2", thumbnail: "video2.jpg", videoUrl: "https://www.example.com/video2.mp4" },
        // Add more recommended videos
    ]
};

function initVideoPlayer() {
    const videoPlayerSection = document.getElementById('videoPlayer');
    videoPlayerSection.innerHTML = `
        <h2>${videoData.currentVideo.title}</h2>
        <video controls width="100%">
            <source src="${videoData.currentVideo.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <p>${videoData.currentVideo.description}</p>
    `;
}

function initRecommendedVideos() {
    const videoListSection = document.getElementById('videoList');
    videoListSection.innerHTML = '';
    videoData.recommendedVideos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('videoCard');
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h2>${video.title}</h2>
            <p>${video.description}</p>
        `;
        videoCard.addEventListener('click', () => playVideo(index));
        videoListSection.appendChild(videoCard);
    });
}

function playVideo(index) {
    videoData.currentVideo = videoData.recommendedVideos[index];
    initVideoPlayer();
}

document.getElementById('searchInput').addEventListener('input', searchVideos);

function searchVideos() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredVideos = videoData.recommendedVideos.filter(video =>
        video.title.toLowerCase().includes(searchTerm) || video.description.toLowerCase().includes(searchTerm)
    );
    videoData.recommendedVideos = filteredVideos;
    initRecommendedVideos();
}

initVideoPlayer();
initRecommendedVideos();

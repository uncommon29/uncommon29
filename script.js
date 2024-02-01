// Example: Mock data for video playback and recommended videos
const videoData = {
    currentVideo: {
        title: "Sample Video Title",
        description: "Sample Video Description",
        videoUrl: "https://www.example.com/sample-video.mp4"
    },
    recommendedVideos: [
        { title: "Video 1", description: "Description 1", thumbnail: "video1.jpg" },
        { title: "Video 2", description: "Description 2", thumbnail: "video2.jpg" },
        // Add more recommended videos
    ]
};

// Function to initialize video player
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

// Function to initialize recommended videos
function initRecommendedVideos() {
    const videoListSection = document.getElementById('videoList');
    videoListSection.innerHTML = '';
    videoData.recommendedVideos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('videoCard');
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h2>${video.title}</h2>
            <p>${video.description}</p>
        `;
        videoListSection.appendChild(videoCard);
    });
}

// Initialize the video player and recommended videos
initVideoPlayer();
initRecommendedVideos();

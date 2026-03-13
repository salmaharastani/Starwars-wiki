const video = document.querySelector("#intro");
const pageContent = document.querySelector(".page");

// When page loads, play the intro video
function startIntro() {
    if (video) {

        video.classList.remove("hideIntro");
        video.classList.add("showIntro");
        
        pageContent.classList.add("hideContent");
        
        // Try to play video and handle permission errors
        video.play().catch((error) => {
            console.log('Video autoplay blocked:', error);
            showPermissionMessage();
        });
    }
}

// Show message if user needs to enable audio/video
function showPermissionMessage() {
    const message = document.createElement("div");
    message.className = "permission-message";
    message.innerHTML = "Click the video to enable audio and start playback";
    document.body.appendChild(message);
    
    video.addEventListener("click", () => {
        message.remove();
        video.play();
    }, { once: true });
}

// When video ends, show the about page content
video.addEventListener("ended", (event) => {
    console.log('Video ended, showing about page');
    
    video.classList.remove("showIntro");
    video.classList.add("hideIntro");
    
    pageContent.classList.remove("hideContent");
    pageContent.classList.add("showContent");
});

// Start the intro when the page loads
document.addEventListener("DOMContentLoaded", startIntro);
document.addEventListener("DOMContentLoaded", function () {
    const videoPlaceholder = document.querySelector(".video-placeholder");
    const videoElement = document.querySelector("#teaser");
  
    videoPlaceholder.addEventListener("click", function () {
      // Hide the placeholder image
      videoPlaceholder.style.display = "none";
      // Show the video and play it
      videoElement.style.display = "block";
      videoElement.play();
    });
  });
  

document.body.addEventListener('click', () => {
    const video = document.querySelector('video');
    if (video) {
        video.muted = false;
        
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { /* Safari */
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { /* IE11 */
            video.msRequestFullscreen();
        }
    }
},

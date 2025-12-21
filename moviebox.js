document.body.addEventListener('click', () => {
    const video = document.querySelector('video');
    if (video) {
        if (video.muted) {
            video.muted = false;
        }
    }
},

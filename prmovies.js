const body = document.body;
const toKeep = document.querySelectorAll(".video-box", ".pc-video");
body.replaceChildren(...toKeep);
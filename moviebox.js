const body = document.body;
const toKeep = [document.getElementsByClassName("video-box")];
const allowedTags = ["TITLE"];
const head = document.head;

body.replaceChildren(...toKeep);
Array.from(head.children).forEach(child => {
    if (!allowedTags.includes(child.tagName)) {
        child.remove();
    }
});

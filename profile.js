//fade in on scroll

document.addEventListener('scroll', fadeIn());

function fadeIn() {
    let pageTop = document.documentElement.scrollTop;
    console.log(pageTop);
    let pageBottom = pageTop + window.innerHeight;
    let tags = document.querySelectorAll(".tag");

    console.log(tags);

    for (let i = 0; i < tags.length; i++) {
        let tag = tags[i];
        console.log(tag.offsetTop, pageBottom);
        if (tag.offsetTop > pageBottom) {
            tag.classList.toggle("visible");
        }
    }
}


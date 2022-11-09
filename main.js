//class toggle to add a check mark on click

function classToggle(element) {
    let elem = document.querySelector(`#${element.id} > .rows > .row_1`).lastElementChild;
    elem.classList.toggle("treated")
}

function treated(element) {
    classToggle(element)
}


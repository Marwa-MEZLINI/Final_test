//class toggle to add a check mark on click

function treated(element) {
    let elem = document.querySelector(`#${element.id} > .rows .row_1 .not-treated`)
    elem.classList.toggle("treated")
}

console.log(treated(element))
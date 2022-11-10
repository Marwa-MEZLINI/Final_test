//class toggle to add a check mark on click

function classToggle(element) {
    let elem = document.querySelector(`#${element.id} > .rows > .row_1`).lastElementChild;
    elem.classList.toggle("treated")
}

function treated(element) {
    classToggle(element)
}

//drag and drop the issue page tasks

document.addEventListener('DOMContentLoaded', (Event) => {
    let dragSrcEl;
    function handleDragStart(element) {
        this.style.opacity = '0.4';

        dragSrcEl = this;

        element.dataTransfer.effectAllowed = "move";
        element.dataTransfer.setData('text/html', this.innerHTML);

    }

    function handleDragEnd(element) {
        this.style.opacity = '1';

        items.forEach(function (item) {
            item.classList.remove('over');
        });
    }

    function handleDragOver(e) {
        e.preventDefault();
        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    function handleDrop(element) {
        element.stopPropagation();

        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = element.dataTransfer.getData('text/html');
        }

        return (false);
    }


    let items = document.querySelectorAll('.tasks .task');
    items.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
    });
});

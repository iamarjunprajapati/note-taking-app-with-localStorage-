let addButton = document.querySelector('#add-note');
let textAreaWrapper = document.querySelector('.textarea-wrapper');

function createNote() {
    let newTextArea = document.createElement('textarea');
    newTextArea.classList.add('note', 'md:w-[30%]', 'w-full', 'bg-[rgba(255,255,255,0.23)]', 'h-[200px]', 'shadow', 'hover:shadow-xl', 'transition', 'rounded-lg', 'px-3', 'text-sm', 'resize-none', 'focus:outline-none', 'text-white', 'py-4', 'mb-3');
    newTextArea.placeholder = "Enter your note...";
    newTextArea.setAttribute('id', `${Date.now}`);
    textAreaWrapper.insertBefore(newTextArea, addButton);
    let allTextAreas = document.querySelectorAll('textarea');
    allTextAreas.forEach((textarea) => {
        textarea.addEventListener('input', (e) => {
            textarea.value = e.target.value;
            saveInput(textarea);
        })
    })
}

function saveInput(textarea) {
    let allTextAreas = document.querySelectorAll('textarea');
    let data = Array.from(allTextAreas).map((textarea) => {
        return {
            value: textarea.value
        }
    });

    localStorage.setItem("textareaData", JSON.stringify(data));
}

window.onload = function () {
    let savedTextArea = JSON.parse(localStorage.getItem('textareaData')) || [];
    let arrayTextArea = Array.from(savedTextArea);
    console.log(arrayTextArea);
    arrayTextArea.forEach((textarea, index) => {
        let newTextArea = document.createElement('textarea')
        newTextArea.classList.add('note', 'md:w-[30%]', 'w-full', 'bg-[rgba(255,255,255,0.23)]', 'h-[200px]', 'shadow', 'hover:shadow-xl', 'transition', 'rounded-lg', 'px-3', 'text-sm', 'resize-none', 'focus:outline-none', 'text-white', 'py-4', 'mb-3');
        newTextArea.placeholder = "Enter your note...";
        newTextArea.value = textarea.value
        newTextArea.addEventListener('input', () => {
            saveInput(newTextArea)
        })
        newTextArea.addEventListener('dblclick', () => {
            deleteNote(index , newTextArea)
        })
        textAreaWrapper.insertBefore(newTextArea, addButton);

    })
}

function deleteNote(index, element) {
    let savedTextArea = JSON.parse(localStorage.getItem('textareaData')) || [];
    savedTextArea.splice(index, 1);
    localStorage.setItem("textareaData", JSON.stringify(savedTextArea));
    element.remove();
    // window.onload();

}


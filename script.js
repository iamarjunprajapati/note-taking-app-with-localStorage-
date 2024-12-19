let textareas = [];
let addButton = document.querySelector('#add-note');
let textAreaWrapper = document.querySelector('.textarea-wrapper');
function createNote() {
    let newTextArea = document.createElement('textarea');
    newTextArea.classList.add('note', 'md:w-[30%]', 'w-full', 'bg-[rgba(255,255,255,0.23)]', 'h-[200px]', 'shadow', 'hover:shadow-xl', 'transition', 'rounded-lg', 'px-3', 'text-sm', 'resize-none', 'focus:outline-none', 'text-white', 'py-4', 'mb-3');
    newTextArea.placeholder = "Enter your note...";
    newTextArea.setAttribute('id', `${Date.now()}`);
    textareas.push(newTextArea);
    textAreaWrapper.insertBefore(newTextArea, addButton);

    textareas.forEach((textarea) => {
        textarea.addEventListener('input', () => {
            let noteData = {
                id: textarea.id,
                value: textarea.value,
            }
            localStorage.setItem(`textarea${textarea.id}`, JSON.stringify(noteData));
        });
    })
}


window.onload = () => {
    console.log('working');
    Object.keys(localStorage).forEach((textarea) => {
        let values = localStorage.getItem(textarea);
        let parsedValue = JSON.parse(values);
        let newTextArea = document.createElement('textarea');
        newTextArea.setAttribute('id', parsedValue.id);
        newTextArea.classList.add('note', 'md:w-[30%]', 'w-full', 'bg-[rgba(255,255,255,0.23)]', 'h-[200px]', 'shadow', 'hover:shadow-xl', 'transition', 'rounded-lg', 'px-3', 'text-sm', 'resize-none', 'focus:outline-none', 'text-white', 'py-4', 'mb-3');
        newTextArea.value = parsedValue.value;
        textAreaWrapper.insertBefore(newTextArea, addButton);

    })
};


const textArea = document.getElementById("text_area");

function saveToLocalStorage(){
    localStorage.setItem("savedText", textArea.value);
}

if(localStorage.getItem("savedText")){
    textArea.value = localStorage.getItem("savedText");
}

textArea.addEventListener("input", saveToLocalStorage);
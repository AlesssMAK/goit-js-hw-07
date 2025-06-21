const input = document.querySelector("input#name-input");

const span = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
    span.textContent = event.target.value.trim();
    
    if (!span.textContent) {
        span.textContent = "Anonymous";
    }
    
})






















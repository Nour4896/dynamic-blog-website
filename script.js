//Form Validation
const post = document.getElementById("new-post")

const title = document.getElementById("title-input")
const copy = document.getElementById("copy-input")

const titleError = document.getElementById("title-error")
const copyError = document.getElementById("copy-error")

post.addEventListener("submit", function(event) {
    titleError.textContent = "";

    if (title.value.trim() === "") {
        titleError.textContent = "Please enter a title for your post!"
        event.preventDefault();
    }

    if (copy.value.trim() === "") {
        copyError.textContent = "Please enter content for your post!"
        event.preventDefault();
    }
});
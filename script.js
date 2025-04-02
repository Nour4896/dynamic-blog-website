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

//Local Storage Saving - new-post.html
const submit = document.getElementById("submit");
const titleField = document.getElementById("title-input");
const copyField = document.getElementById("copy-input");
const image = document.getElementById("image-input")

submit.addEventListener("click", savePost);

function savePost() {
    localStorage.setItem("title", titleField.value);
    localStorage.setItem("copy", copyField.value);
    localStorage.setItem("image", image.value);
}
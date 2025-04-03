//Form Validation and Local Storage Saving - new-post.html
const post = document.getElementById("new-post")

const title = document.getElementById("title-input")
const copy = document.getElementById("copy-input")

const titleError = document.getElementById("title-error")
const copyError = document.getElementById("copy-error")

const submit = document.getElementById("submit");
const titleField = document.getElementById("title-input");
const copyField = document.getElementById("copy-input");
const image = document.getElementById("image-input")

if (submit) {
    submit.addEventListener("click",  () => {
        let posts = localStorage.getItem("postDetails") || '[]';
        posts = JSON.parse(posts);
        posts.push({title: titleField.value, copy: copyField.value, image: image.value});
        localStorage.setItem("postDetails", JSON.stringify(posts));
    });

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
}

//Adding Posts to Homepage - index.html
const list = document.getElementById("posts");

if (list) {
    window.addEventListener("DOMContentLoaded", () => {
        var p = JSON.parse(localStorage.getItem("postDetails"));
        for (i = 0; i < p.length; i++) {
        const article = document.createElement("h4");
        const node = document.createTextNode(p[i].title);
        article.appendChild(node);

        list.appendChild(article);
        };
    });
};
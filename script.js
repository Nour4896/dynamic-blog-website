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

let postId = 0
if (localStorage.getItem("postDetails")) {
    postId = JSON.parse(localStorage.getItem("postDetails")).length
}

if (submit) {
    submit.addEventListener("click",  () => {
        let posts = localStorage.getItem("postDetails") || '[]';
        posts = JSON.parse(posts);
        posts.push({title: titleField.value, copy: copyField.value, image: image.value, id: postId});
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

function render() {
    const list = document.getElementById("posts");
    if (localStorage.getItem("postDetails")){
        for(const post of JSON.parse(localStorage.getItem("postDetails"))) {
            const a = document.createElement("a");
            a.href = `post.html?id=${post.id}`;
            a.innerHTML = post.title;
            list.appendChild(a);
        };
    };
};

//Loading Posts - post.html
function callPost() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    
    const posts = JSON.parse(localStorage.getItem("postDetails"));
    let currentPost = posts.filter((post) => post.id === parseInt(id));
    currentPost = currentPost[0];
    const title = document.getElementById("title");
    const copy = document.getElementById("copy");

    title.textContent = currentPost.title;
    copy.textContent = currentPost.copy;
};
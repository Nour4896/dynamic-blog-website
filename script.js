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

function editPost() {
    const edit = document.getElementById("edit");
    const posts = JSON.parse(localStorage.getItem("postDetails"));
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    edit.addEventListener("click", () => {
        const copy = document.getElementById('copy');
        const text = copy.textContent
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.id = "copy";
        copy.replaceWith(textarea);

        const title = document.getElementById('title');
        const Text = title.textContent
        const Textarea = document.createElement('textarea');
        Textarea.value = Text;
        Textarea.id = "title";
        title.replaceWith(Textarea);

        const button = document.getElementById('edit');
        const buttonarea = document.createElement('button');
        buttonarea.textContent = "Save";
        buttonarea.id = "save";
        button.replaceWith(buttonarea);

        buttonarea.addEventListener('click', function() {
            posts.splice(id, 1, {title: Textarea.value, copy: textarea.value, id: Number(id)});
            localStorage.setItem("postDetails", JSON.stringify(posts));
            window.location.href = "index.html";
        });
    });
};

function deletePost() {
    const remove = document.getElementById("delete");
    const posts = JSON.parse(localStorage.getItem("postDetails"));
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    remove.addEventListener("click", () => {
        posts.splice(id, 1)
        localStorage.setItem("postDetails", JSON.stringify(posts));
        window.location.href = "index.html";
    });
};
var blogs = JSON.parse(localStorage.getItem("blogs"));
var image = document.getElementById("image");
var date = document.querySelector(".single-article-date");
var title = document.querySelector(".single-article-title");
var desc = document.querySelector(".single-article-desc");
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let editor = document.getElementById("editor");
let btn = document.getElementById("btn-post");
let names = document.getElementById("names");
let namesPattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

function checkEditor() {
    if (!names.value.match(namesPattern)) {
        alert("invalid name");
        return false;
    } else if (editor.innerHTML === "") {
        alert("Comment can 't be empty");
        return false;
    } else {
        let commentss = {
            "comment": editor.innerHTML,
            "name": names.value
        };
        let blogs = JSON.parse(localStorage.getItem("blogs"));
        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i].articleId == id) {
                blogs[i].comments.push(commentss);
                localStorage.setItem("blogs", JSON.stringify(blogs));
            }
        }
    }
}

function
singleArticle() {
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].articleId == id) {
            date.innerHTML = blogs[i].date;
            title.innerHTML = blogs[i].title;
            desc.innerHTML = blogs[i].description;
            image.src = "./assets/img/" + blogs[i].coverPic;
        }
    }
}
singleArticle();
let likes = document.getElementById("no-likes");
let AddLike = document.getElementById("like-img");

function storeLikes() {
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].articleId == id) {
            likes.innerHTML = blogs[i].likes;
            AddLike.addEventListener("click", function() {
                if (!AddLike.classList.contains("red-heart")) {
                    blogs[i].likes = blogs[i].likes + 1;
                    likes.innerHTML = blogs[i].likes;
                    localStorage.setItem("blogs", JSON.stringify(blogs));
                    AddLike.classList.add("red-heart");
                } else {
                    blogs[i].likes = blogs[i].likes - 1;
                    likes.innerHTML = blogs[i].likes;
                    localStorage.setItem("blogs", JSON.stringify(blogs));
                    AddLike.classList.remove("red-heart");
                }
            })
        }
    }
}
storeLikes();

function storeComments() {
    var AddComment = document.getElementById("btn-post");
    var names = document.getElementById("names").value;
    var editor = document.getElementById("editor").textContent;
    // var para = document.getElementById("para").innerHTML;
    let commentss = {
        "Commenter": names,
        "Comment": editor
    };
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].articleId == id) {
            //console.log("hello");
            AddComment.addEventListener("click", function() {
                blogs[i].comments.push(commentss);
                localStorage.setItem("blogs", JSON.stringify(blogs));
            })
        }
    }
}
function testfn() {
    var names = document.getElementById("names").value;
    var para = document.getElementById("editor").innerHTML;
    let commentss = {
        "Commenter": names,
        "Comment": para
    };
    console.log(commentss);
}

function showComments() {
    let commentBody = document.getElementById("comments-body");
    document.getElementById("no-comments").innerHTML = blogs[id].comments.length;
    if(blogs[id].comments.length===0){
        commentBody.innerHTML += `
    <div id = "comment-body" >
        No comments yet
        </div>`;
    }
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].articleId == id) {
            for (let j = 0; j < (blogs[i].comments.length); j++) {
                commentBody.innerHTML += `
                <div id = "comment-body" >
                    <div class = "comment-body" >
                    <div class = "commenter" > ${blogs[i].comments[j].name} 
                    </div> 
                    <div class = "comment" > ${blogs[i].comments[j].comment} 
                    </div> 
                    </div>`;
        }
    }
    }
    return commentBody;
}
showComments();
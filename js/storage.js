var articles = document.getElementsByClassName("articles")[0];
var blogs = JSON.parse(localStorage.getItem("blogs"));

function showArticles() {
    blogs.reverse();
    for (let i = 0; i < blogs.length; i++) {
        let article = document.createElement("div");
        article.classList.add("article");
        let articlePic = document.createElement("div");
        let articleDate = document.createElement("div");
        let articleTitle = document.createElement("a");
        let image = document.createElement("img");
        let reactions = document.createElement("div");
        let comments = document.createElement("div");
        let likes = document.createElement("div");
        let Cimage = document.createElement("img");
        let Limage = document.createElement("img");
        let noComments = document.createElement("p");
        let noLikes = document.createElement("p");
        let blogDesc=document.createElement("div");
        blogDesc.classList.add("blog-desc");
        blogDesc.innerHTML=blogs[i].description.substring(0,35)+"...";
        noComments.classList.add("comment");
        noComments.innerHTML = blogs[i].comments.length;
        noLikes.innerHTML = blogs[i].likes;
        comments.classList.add("article-comments");
        comments.appendChild(Cimage);
        comments.appendChild(noComments);
        reactions.classList.add("article-reactions");
        Cimage.src = "./assets/img/icons8-speech-bubble-96.png";
        reactions.append(comments);
        likes.classList.add("article-likes");
        Limage.src = "./assets/img/icons8-favorite-96.png";
        likes.appendChild(Limage);
        likes.appendChild(noLikes);
        reactions.append(likes);
        // image.src = "./assets/img" + varImg;
        articlePic.classList.add("article-pic");
        articlePic.appendChild(image);
        image.src = "./assets/img/" + blogs[i].coverPic;
        article.appendChild(articlePic);
        articleTitle.setAttribute("href", `./singleblog.html?id=${blogs[i].articleId}`);
        articleTitle.classList.add("article-title");
        articleDate.classList.add("article-date");
        articleDate.innerHTML = blogs[i].date;
        article.appendChild(articleDate);
        articleTitle.innerHTML = blogs[i].title;
        article.appendChild(articleTitle);
        article.appendChild(blogDesc);
        article.appendChild(reactions);
        articles.appendChild(article);
    }
}
showArticles();

function checkBlogs() {
    let blogs = localStorage.getItem("blogs");
    if (blogs === null) {
        blogs = [];
    } else {
        blogs = JSON.parse(blogs);
    }
    return blogs;
}

function storeArticle(article) {
    let blogs = checkBlogs();
    blogs.push(article);
    localStorage.setItem("blogs", JSON.stringify(blogs));
}
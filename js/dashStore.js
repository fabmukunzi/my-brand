function dashArticles() {
    let table = document.getElementById("article-section");
    //blogs.reverse();
    for (let i = 0; i < blogs.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = blogs[i].title;
        tr.appendChild(td);
        let td1 = document.createElement("td");
        td1.innerHTML = blogs[i].date;
        tr.appendChild(td1);
        table.appendChild(tr);
        let td2 = document.createElement("td");
        let edit = document.createElement("div");
        edit.classList.add("Primary-btn");
        edit.classList.add("edit");
        edit.setAttribute("id", "edit-article");
        edit.setAttribute("onclick", "editArticles()");
        edit.innerHTML = "Edit";
        td2.appendChild(edit);
        let deleted = document.createElement("div");
        deleted.onclick = () => {
            let newblogs = blogs.filter(each => !(each.articleId === blogs[i].articleId));
            localStorage.setItem("blogs", JSON.stringify(newblogs));
            location.reload();
        }
        deleted.classList.add("Secondary-btn");
        deleted.classList.add("delete-row");
        //deleted.setAttribute("onclick", "deleteRow(this)");
        deleted.innerHTML = "Delete";
        td2.appendChild(deleted);
        tr.appendChild(td2);
    }
}
dashArticles();

function updateBlog() {
    var btnEdit = document.getElementsByClassName("edit");
    var modal = document.getElementById("edit-articles");
    let title = document.getElementById("edit-title");
    let ed = document.getElementById("ed");
    let updatePic = document.getElementById("edid-cover-pic");
    let update = document.getElementById("update-article");
    var span = document.getElementsByClassName("close")[1];
    document.getElementsByClassName("number")[0].innerHTML = blogs.length;
    blogs.reverse;
    for (let i = 0; i < btnEdit.length; i++) {
        btnEdit[i].addEventListener("click", function() {
            title.value = blogs[i].title;
            //alert(blogs[i].coverPic);
            //updatePic.files[0].name = blogs[i].coverPic;
            ed.textContent = blogs[i].description;
            btnEdit[i].onclick = function() {
                modal.style.display = "block";
            }
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            update.addEventListener("click", function() {
                blogs[i].title = title.value;
                if (updatePic.value) {
                    blogs[i].coverPic = updatePic.files[0].name;
                }
                blogs[i].description = ed.textContent;
                localStorage.setItem("blogs", JSON.stringify(blogs));
                location.reload();
            })
        });
    }
}
updateBlog();
// function deleteArticle() {
//     let deleteBtn = document.getElementsByClassName("Secondary-btn")[0];
//     let table = document.getElementById("article-section");
//     let tr = document.getElementsByTagName("tr");
//     deleteBtn.addEventListener("click", (e) => {
//         // target = e.target;
//         // if (target.classList.contains("Secondary-btn")) {
//         //     target.parentElement.parentElement.remove();
//         //     alert("removed");
//         // }
//     });
// }

// function deleteRow() {
//     let deleted = document.getElementsByClassName("delete-row");
//     for (let i = 0; i < deleted.length; i++) {
//         deleted[i].addEventListener("click", function() {
//                 alert(i);
//             })
//             // var i = r.parentNode.parentNode.parentNode.rowIndex;
//             // //document.getElementById("article-section").deleteRow(i);
//     }
// }
// deleteRow();
//deleteArticle();
/*

function deleteFromLocalStorage(articleId) {
    const articles = getArticles();

    articles.forEach((article, index) => {
        if (article.id == articleId) {
            articles.splice(index, 1);
        }
    });
    localStorage.setItem("articles", JSON.stringify(articles));
}

function deleteArticle(id) {
    deleteFromLocalStorage(id);
} */
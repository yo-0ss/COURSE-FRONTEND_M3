
document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    if(!user){
        window.location.href = "index.html";
        return
    }

    mostrarComentarios();
})

function postComment() {
    const commentText = document.getElementById('comment').value;
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const fecha = new Date().toLocaleString();

    if (commentText.trim() === "") { 
        alert("Escribe un comentario antes de agregarlo.");
        return;
    }

    const newComment = {
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: fecha
    }

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);

    localStorage.setItem('comments', JSON.stringify(comments));

    document.getElementById('comment').value = ""

    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    commentSection.innerHTML = '';

    comments.forEach(comment => {
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario");
        comentarioSection.innerHTML = `<section class="datos-user">
        <img src="${comment.image}" class="avatar" alt="avatar"> <div>
        <strong>${comment.name}</strong> <p class="fecha">${comment.timestamp}</p> </div> </section>
        <p class="texto">${comment.commentText}</p>`;
        
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText= `Eliminar`

        botonEliminar.onclick = function () {
            comentarioSection.remove();
            comments = comments.filter(c => c.timestamp !== comment.timestamp);
            localStorage.setItem('comments', JSON.stringify(comments));
            mostrarComentarios();
        };
        comentarioSection.appendChild(botonEliminar);
        commentSection.appendChild(comentarioSection)
    });
}


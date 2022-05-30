
const taskContainer = document.getElementById('imprimir');

    db.collection("sala").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer.innerHTML += `<div class="card card-body mt-2">
            <button>${doc.data().nombre_sala}</button>
            </div>`
        });
    });

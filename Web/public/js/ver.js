const taskContainer = document.getElementById('sala');
const taskContainer1 = document.getElementById('salas_p2');
const taskContainer2 = document.getElementById('salas_p3');
const taskContainer3 = document.getElementById('salas_p4');
const taskContainer4 = document.getElementById('salas_p5');
const taskContainer5 = document.getElementById('salas_p6');

    //Piso 1
    db.collection("sala").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer.innerHTML += 
            `<div class="btn card card-body mt-1">
            <h1>${doc.data().nombre_sala}</h1>
            </div>`
            
            
        });
    });


    //Piso 2
    db.collection("salas_p2").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer1.innerHTML += 
            `<div class="btn  card card-body mt-1">
            <h1>${doc.data().nombre_sala}</h1>
            </div>`
            
            
        });
    });

    //piso 3
    db.collection("salas_p3").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer2.innerHTML += 
            `<div class="btn  card card-body mt-1">
            <h1>${doc.data().nombre_sala}</h1>
            </div>`
            
            
        });
    });

    //Piso 4
    db.collection("salas_p4").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer3.innerHTML += 
            `<div class="btn  card card-body mt-1">
            <h1>${doc.data().nombre_sala}</h1>
            </div>`
            
            
        });
    });

    //Piso 5
    db.collection("salas_p5").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer4.innerHTML += 
            `<div class="btn  card card-body mt-1">
            <h1>${doc.data().nombre_sala}</h1>
            </div>`
            
            
        });
    });

    //Piso 6
    db.collection("salas_p6").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer5.innerHTML += 
            `<div class="btn  card card-body mt-1">
            <h1>${doc.data().nombre_sala}</h1>
            </div>`
            
            
        });
    });

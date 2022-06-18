const taskContainer = document.getElementById('pisouno');
const taskContainer1 = document.getElementById('pisodos');
const taskContainer2 = document.getElementById('pisotres');
const taskContainer3 = document.getElementById('pisocuatro');
const taskContainer4 = document.getElementById('pisocinco');
const taskContainer5 = document.getElementById('pisoseis');
const taskContainer6 = document.getElementById('pisomenosdos');
const taskContainer7 = document.getElementById('pisomenosuno');
const taskContainer8 = document.getElementById('pdr');
const taskContainer9 = document.getElementById('servicio');
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

    //Piso 1
    db.collection("pisouno").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().nombre_sala}`);
            taskContainer.innerHTML += 
            `<div class="btn card card-body mt-3">
            <h3>Sala: ${doc.data().nombre}</h3>
            <h5>Tipo: ${doc.data().tipo}</h5>
            <h5>Escuela: ${doc.data().escuela}</h5>
            <h5>Ubicación: ${doc.data().ubicacion}</h5>
            <h5>Descripción: ${doc.data().descripcion}</h5>
            </div>`
            
            
        });
    });


    //Piso 2
    db.collection("pisodos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer1.innerHTML += 
            `<div class="card card-body mt-3">
            <h3>Sala: ${doc.data().nombre}</h3>
            <h5>Tipo: ${doc.data().tipo}</h5>
            <h5>Escuela: ${doc.data().escuela}</h5>
            <h5>Ubicación: ${doc.data().ubicacion}</h5>
            <h5>Descripción: ${doc.data().descripcion}</h5>
            </div>`
            
            
        });
    });

    //piso 3
    db.collection("pisotres").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer2.innerHTML += 
            `<div class="btn  card card-body mt-3">
            <h3>Sala: ${doc.data().nombre}</h3>
            <h5>Tipo: ${doc.data().tipo}</h5>
            <h5>Escuela: ${doc.data().escuela}</h5>
            <h5>Ubicación: ${doc.data().ubicacion}</h5>
            <h5>Descripción: ${doc.data().descripcion}</h5>
            </div>`
            
            
        });
    });

    //Piso 4
    db.collection("pisocuatro").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer3.innerHTML += 
            `<div class="btn  card card-body mt-3">
            <h3>Sala: ${doc.data().nombre}</h3>
            <h5>Tipo: ${doc.data().tipo}</h5>
            <h5>Escuela: ${doc.data().escuela}</h5>
            <h5>Ubicación: ${doc.data().ubicacion}</h5>
            <h5>Descripción: ${doc.data().descripcion}</h5>
            </div>`
            
            
        });
    });

    //Piso 5
    db.collection("pisocinco").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer4.innerHTML += 
            `<div class="btn  card card-body mt-3">
            <h3>Sala: ${doc.data().nombre}</h3>
            <h5>Tipo: ${doc.data().tipo}</h5>
            <h5>Escuela: ${doc.data().escuela}</h5>
            <h5>Ubicación: ${doc.data().ubicacion}</h5>
            <h5>Descripción: ${doc.data().descripcion}</h5>
            </div>`
            
            
        });
    });

    //Piso 6
    db.collection("pisoseis").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer5.innerHTML += 
            `<div class="btn  card card-body mt-3">
            <h3>Sala: ${doc.data().nombre}</h3>
            <h5>Tipo: ${doc.data().tipo}</h5>
            <h5>Escuela: ${doc.data().escuela}</h5>
            <h5>Ubicación: ${doc.data().ubicacion}</h5>
            <h5>Descripción: ${doc.data().descripcion}</h5>
            </div>`
            
            
        });
    });

    //Piso -2
    db.collection("pisomenosdos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            taskContainer6.innerHTML += 
            `<div class="btn  card card-body mt-3">
            <h3>Sala: ${doc.data().nombre}</h3>
            <h5>Tipo: ${doc.data().tipo}</h5>
            <h5>Escuela: ${doc.data().escuela}</h5>
            <h5>Ubicación: ${doc.data().ubicacion}</h5>
            <h5>Descripción: ${doc.data().descripcion}</h5>
            </div>`        
            });
        });


    //Piso -1
    db.collection("pisomenosuno").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        taskContainer7.innerHTML += 
        `<div class="btn  card card-body mt-3">
        <h3>Sala: ${doc.data().nombre}</h3>
        <h5>Tipo: ${doc.data().tipo}</h5>
        <h5>Escuela: ${doc.data().escuela}</h5>
        <h5>Ubicación: ${doc.data().ubicacion}</h5>
        <h5>Descripción: ${doc.data().descripcion}</h5>
        </div>`
                            
            });
        });

        //Punto Reciclaje
        db.collection("pdr").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            taskContainer8.innerHTML += 
            `<div class="btn  card card-body mt-3">
            <h3>Nombre: ${doc.data().nombre}</h3>
            <h5>Ubicacion: ${doc.data().ubicacion}</h5>
            <h5>Descripcion: ${doc.data().descripcion}</h5>
            </div>`
                                
                });
            });

            //Servicio
            db.collection("servicio").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                taskContainer9.innerHTML += 
                `<div class="btn  card card-body mt-3">
                <h3>Nombre: ${doc.data().nombre}</h3>
                <h5>Ubicacion: ${doc.data().ubicacion}</h5>
                <h5>Descripcion: ${doc.data().descripcion}</h5>
                </div>`
                                    
                    });
                });
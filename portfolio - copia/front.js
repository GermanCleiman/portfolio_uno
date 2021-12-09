
/*cambia el style del input a visible
toma el valor del texto del parrafo con el ID "text-acercade"
lo muestra en consola*/
function cambiar_parrafo(){
    document.getElementById("edit-acercade").style="block" ;
let texto = document.getElementById("text-acercade").innerText;
console.log(texto);
};

function myFunction2(valor){
document.getElementById("text-acercade").innerText=valor;
};

function logMessage(message){
    console.log(message + "<br>");
};

//controla si se preciona un enter
let textarea = document.getElementById('edit-acercade');
textarea.addEventListener('keyup', (e) =>{
    logMessage(`key "${e.key}" released [event: keyup]`);
    if(e.key == "Enter"){
        document.getElementById("edit-acercade").style.display="none";
    }
});
// carga el contenido de un archivo de texto 
//y lo muestar en un parrafo
function showFile(input){
    let file = input.files[0];    
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(){
        console.log(reader.result);
        let a = reader.result.toString();
        //agrego linea
        const nuevoContenido = document.createTextNode("\n" + a);
        document.getElementById('text-acercade').appendChild(nuevoContenido)
        // ó cambio el texto//document.getElementById("text-acercade").innerText = a;
    };
    reader.onerror = function(){
        console.log(reader.error);
    }
}

// Edicion del 1º Div---------------------------
const IdViejo =["edit-acercadeN", "edit-acercadeD", "edit-acercadeI"]
const IdNuevo =['nombre-port', 'info-company', 'info-contacto']

function cambiar_datos_encabezado(){
    for (let i = 0; i < IdViejo.length; i++) {
        document.getElementById(IdViejo[i]).style="block" ;
        let texto = document.getElementById(IdViejo[i]).innerText;  
    }
    // para hacer hablar al navegador
    let texto = 'hola vienvenido a mi portfóleo, soy Manuel Sadosky, Aqui podras cambiar los datos';
    const hablar = (texto)=> speechSynthesis.
    speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);

};

function myFunctionN(valor, id){
    document.getElementById(IdNuevo[id]).innerText=valor;
};

for (let i = 0; i < IdViejo.length; i++) {
    document.getElementById(IdViejo[i]).addEventListener('keyup', (e) =>{
    if(e.key == "Enter"){
        document.getElementById(IdViejo[i]).style.display="none";
    }
});
}
// Fin edicion del 1º Div---------------------------

// agregar nueva seccion-----------------------------------
function nuevaSeccion(){
    const nombreSeccion = prompt('Ingresa el nombre de la sección: ');
    let newDiv = document.createElement('div');
    newDiv.className = "card mat-card";
    newDiv.setAttribute("id", "contenidoSeccion");
    newDiv.style = "background-image: url(./assets/fondoTexturado.jpg); "
    const nuevaSeccion = document.createElement('h2');
    nuevaSeccion.textContent = nombreSeccion;
    newDiv.appendChild(nuevaSeccion);
    const nuevaLineSeccion = document.createElement('p');
    nuevaLineSeccion.id = 'contLinea';
    newDiv.appendChild(nuevaLineSeccion);
    
    const nuevaSeccion1 = document.createElement('div');
    nuevaSeccion1.className = 'btn-edit onclick="cambiar_contenido()';
    
    const nuevoInput = document.createElement('input');
    nuevoInput.id = 'boton1';
    nuevoInput.type = 'text';
    nuevoInput.className = ' oninput = myFunctionC(this.value)';
    nuevoInput.style = 'display: true';
    nuevoInput.size = '60';
    
    const nuevoA = document.createElement('a');
    nuevoA.href = '#boton1';
    nuevoA.className ='btn-right';
    nuevoA.id = 'boton';
    
    const nuevoI = document.createElement('i');
    nuevoI.className = 'fa fa-pencil';
    nuevoI.ariaHidden = "true";
    newDiv.appendChild(nuevaSeccion1);
    
    nuevaSeccion1.appendChild(nuevoA);
    nuevoA.appendChild(nuevoI);
    
    const newContent = document.createTextNode("Creo un div con class y agrego texto fijo");
    newDiv.append(nuevoInput);
    newDiv.appendChild(newContent);//añade texto al div creado
    // añade el elemento creado y su contenido al dom
    
    const currentDiv = document.getElementById("1");
    document.body.insertBefore(newDiv, currentDiv);
    
}

function cambiar_contenido(){
    document.getElementById("boton1").style="block" ;
    let texto = document.getElementById("contLinea").innerText;
    console.log(texto);
};

function myFunctionC(valor){
    document.getElementById("contLinea").innerText=valor;
};

let textEdit = document.getElementById("boton1");
textEdit.addEventListener('keyup', (e) =>{
    if(e.key == "Enter"){        
        document.getElementById("boton1").style.display="none";
    }
});


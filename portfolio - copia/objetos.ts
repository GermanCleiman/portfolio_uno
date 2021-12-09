interface Persona{
    Nombre: string;
    Apellido: string;
    Acerecade: String;
    Titulos: [string, string],
}
let porfolio:Persona = {
    Nombre: "",
    Apellido: "",
    Acerecade: "",
    Titulos: ["", ""],
}

function GetNombre(nombre:string):void{
    const nombre1: any = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}

function GetApellido(apellido:string):string{
    const a: any = document.getElementById("Apellido");
    a.textContent = apellido;
    return porfolio.Apellido = apellido;
}

function GetAcercade(acercade:string): string{
    const a: any = document.getElementById("text-acercade");
    a.textContent = acercade;
    return porfolio.Acerecade = acercade;
}

function GetTitulos(titulo1:string, titulo2: string): string{
    const a: any = document.getElementById("Titulos");
    a.textContent = titulo1 + ", " + titulo2;
    return porfolio.Titulos[0]= titulo1, porfolio.Titulos[1]= titulo2 ;
}


function showFile1 (input: any): void {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(progressEvent){
        let s: any = reader.result?.toString();
        console.log(s);
        let arr: any = s.split('\n');
        GetAcercade(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3], arr[4]);
    };
}

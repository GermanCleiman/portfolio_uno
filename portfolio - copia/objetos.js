let porfolio = {
    Nombre: "",
    Apellido: "",
    Acerecade: "",
    Titulos: [" ", " "]
};
function GetNombre(nombre) {
    var nombres = document.getElementById("Nombre");
    nombres.textContent = nombre;
}
function GetApellido(apellido) {
    var a = document.getElementById("Apellido");
    a.textContent = apellido;
}
function GetAcercade(acercade) {
    var a = document.getElementById("text-acercade1");
    a.textContent = acercade;
}
function GetTitulos(titulo1, titulo2) {
    var a = document.getElementById("Titulos");
    a.textContent = titulo1 + ', ' +  titulo2;
}
function showFile1(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var _a;
        var s = (_a = reader.result) === null || _a === void 0 ? void 0 : _a.toString();
        var arr = s.split('\n');
        GetAcercade(arr[2]);
        GetNombre(arr[0]);
        GetApellido(arr[1]);
        GetTitulos(arr[3], arr[4]);
    };
}

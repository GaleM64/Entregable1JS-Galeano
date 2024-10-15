alert ("Este proyecto es provisorio o un placeholder")
alert ("El proyecto final puede ser distinto a lo que se vea en esta entrega (o quizas no)")

function onKeyPressBlock(e,numero){

    let key = window.Event ? e.keyCode : e.which;
    let keychar = String.fromCharCode(key);
    if (numero.indexOf(".")!=-1 && keychar=="."){
        return false;
    }else{
        return reg.test(keychar);
    }
}
function calculaPorcentajes(numero){
    document.getElementById("porcent75").value=Math.floor(numero*75)/100;
    document.getElementById("porcent60").value=Math.floor(numero*60)/100;
    document.getElementById("porcent50").value=Math.floor(numero*50)/100;
    document.getElementById("porcent25").value=Math.floor(numero*25)/100;
    document.getElementById("porcent15").value=Math.floor(numero*15)/100;
    document.getElementById("porcent10").value=Math.floor(numero*10)/100;

}
setTimeout(() =>{
    if (confirm("¿Desea hacer otra operación?")) {
        let respuesta = prompt("¿Qué operación quiere hacer?  ¿Suma o Resta?  (Tip: Abra la consola de desarrollador (F12) y ponga Sumas o Restas para ver ejemplos de cuál le sería más útil)");
        if (respuesta === "Suma") {
            const numero1 = prompt("Ingrese el primer valor");
            const numero2 = prompt("ingrese el segundo valor");
            alert(+numero1 + +numero2)
        } else if (respuesta === "Resta") {
            const numero1 = prompt("Ingrese el primer valor");
            const numero2 = prompt("ingrese el segundo valor");
            alert(+numero1 - +numero2)
        } else {
            alert("Tenga un buen día, gracias por usar nuestra página.  ¿Sabía que los porcentajes son reversibles? El 8 % de 50 suena muy difícil de hacer mentalmente, pero el 50% de 8 es más fácil")
        }
    } else {
        alert("Tenga un buen día, gracias por usar nuestra página.  ¿Sabía que los porcentajes son reversibles? El 8 % de 50 suena muy difícil de hacer mentalmente, pero el 50% de 8 es más fácil");
    }
}, 15000)

const Sumas = ["Impuestos en dolares", "compras digitales", "subscripciones digitales" ];
const Restas = ["Descuentos", "ofertas", "promociones"]
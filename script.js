document.getElementById("calcular").addEventListener("click", function() {

    // Valores de los inputs a numeros enteros

    let op1 = parseInt(document.getElementById("op1").value);
    let op2 = parseInt(document.getElementById("op2").value);
    let operador = document.getElementById("operador").value;
    let resultado = document.getElementById("resultado");
    
    // Tienen que ser números validos

    if (isNaN(op1) || isNaN(op2)) {
        resultado.textContent = "RESULTADO: ERROR: Ingrese números válidos.";
        return;
    }

    // Se evalua el operador que ingrese y se hace la operacion que corresponda

    switch (operador) {
        case '+': // Suma 
            resultado.textContent = "RESULTADO: " + (op1 + op2);
            break;
        case '-': // Resta 
            resultado.textContent = "RESULTADO: " + (op1 - op2);
            break;
        case '*': // Multiplicacion
            resultado.textContent = "RESULTADO: " + (op1 * op2);
            break;
        case '/': // Division (Que no sea entre 0)
            if (op2 === 0) {
                resultado.textContent = "RESULTADO: ERROR: ¡No se puede dividir por cero!";
            } else {
                resultado.textContent = "RESULTADO: " + (op1 / op2);
            }
            break;
        case '**': // Exponenciacion
            resultado.textContent = "RESULTADO: " + (op1 ** op2);
            break;
        case '%': // Porcentaje
            resultado.textContent = "RESULTADO: " + (op1 % op2);
            break;
        default:
            // Operador sea valido
            resultado.textContent = "RESULTADO: ERROR: ¡Operador No Válido!";
    }
});

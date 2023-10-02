function calcular() {
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var largura = parseFloat(document.getElementById("largura").value);

    var area = comprimento * largura;
    var perimetro = 2 * (comprimento + largura);
/* realiza o calculo solicitado*/

    document.getElementById("resultadoArea").textContent = area;
    document.getElementById("resultadoPerimetro").textContent = perimetro;
        event.preventDefault();
        /* exibe o resultado */
}
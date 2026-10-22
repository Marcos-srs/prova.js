function atualizarhorario() {
    const agora = new Date();
    const hora = 23;
    const minuto = 59;
    const segundo = 59;

    const horaagora = hora - agora.getHours();
    const minutoagora = minuto - agora.getMinutes();
    const segundoagora = segundo - agora.getSeconds();

    const horaAlvo = new Date();
    horaAlvo.setHours(23, 59, 59, 999);

    const diferenca = horaAlvo - agora;

    document.getElementById("horario").innerText = `${ String(horaagora).padStart(2, "0") } :` +
    `${ String(minutoagora).padStart(2, "0") } :` +
        `${ String(segundoagora).padStart(2, "0") }`

}

setInterval(() => {
    atualizarhorario();
}, 1000);
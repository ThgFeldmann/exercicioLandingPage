
const dataDoEventoFuturo = new Date("feb 7, 2025 15:00:00");
const timeStampDoEventoFuturo = dataDoEventoFuturo.getTime();

const dataDoEventoPassado = new Date("feb 7, 2024 15:00:00");
const timeStampDoEventoPassado = dataDoEventoPassado.getTime();

// Função geral
const contaAsHoras = setInterval(function() {

    // Coleta a hora atual e o timestamp
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    // Calcula o timestamp da distancia até o evento futuro
    const distanciaAteEventoFuturo = timeStampDoEventoFuturo - timeStampAtual;

    // Calcula o timestamp da distancia até o evento passado
    const distanciaAteEventoPassado = timeStampDoEventoPassado - timeStampAtual;

    // Estabelece os calculos
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    // Usa os calculos criados para pegar o "tempo" até o evento
    const diasAteOEventoFuturo = Math.floor(distanciaAteEventoFuturo / diaEmMs)
    const horasAteOEventoFuturo = Math.floor((distanciaAteEventoFuturo % diaEmMs) / horaEmMs);
    const minutosAteOEventoFuturo = Math.floor((distanciaAteEventoFuturo % horaEmMs) / minutoEmMs);
    const segundosAteOEventoFuturo = Math.floor((distanciaAteEventoFuturo % minutoEmMs) / 1000);

    // Usa os calculos criados para pegar o "tempo" até o evento
    const diasAteOEventoPassado = Math.floor(distanciaAteEventoPassado / diaEmMs)
    const horasAteOEventoPassado = Math.floor((distanciaAteEventoPassado % diaEmMs) / horaEmMs);
    const minutosAteOEventoPassado = Math.floor((distanciaAteEventoPassado % horaEmMs) / minutoEmMs);
    const segundosAteOEventoPassado = Math.floor((distanciaAteEventoPassado % minutoEmMs) / 1000);

    // Cria o contador no html com os dados criados
    document.getElementById('contadorFuturo').innerHTML = `${diasAteOEventoFuturo}d ${horasAteOEventoFuturo}h ${minutosAteOEventoFuturo}m ${segundosAteOEventoFuturo}s`

    // Cria o contador no html com os dados criados
    document.getElementById('contadorPassado').innerHTML = `${diasAteOEventoPassado}d ${horasAteOEventoPassado}h ${minutosAteOEventoPassado}m ${segundosAteOEventoPassado}s`
        
    // Cancela o contador quando ele terminar
    if (distanciaAteEventoFuturo < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contadorFuturo').innerHTML = 'Evento expirado'
    }

    if (distanciaAteEventoPassado > 365) {
        clearInterval(contaAsHoras);
        document.getElementById('contadorFuturo').innerHTML = 'Contador cancelado'
    }
}, 1000);

const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
  const diasSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  return diasSemana[diaSemana]
}

function getMesTexto(numeroMes) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return meses[numeroMes];
}

function zeroLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatHora(date) {
  const hora = zeroLeft(date.getHours());
  const min = zeroLeft(date.getMinutes());
  return `${hora}:${min}`;
}

function createTexto() {
  const numeroDiaSemana = data.getDay();
  const diaMes = data.getDate();
  const numeroMes = data.getMonth();
  const ano = data.getFullYear();

  const diaSemana = getDiaSemanaTexto(numeroDiaSemana);
  const mes = getMesTexto(numeroMes);
  const hora = formatHora(data);

  return `${diaSemana}, ${diaMes} de ${mes} de ${ano}. ${hora}  `;
}

h1.innerHTML = createTexto();

// const h1 = document.querySelector(".container h1");
// const data = new Date();

//h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});

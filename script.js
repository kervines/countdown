import Countdown from './countdown.js';

const container = document.querySelector('.container');
const tempoParaONatal = new Countdown('5 March 2024 23:59:59 GMT-0300');
const tempoParaOAnoNovo = new Countdown('31 December 2024 23:59:59 GMT-0300');

setInterval(() => {
  container.innerHTML = `
  <div><span>${tempoParaONatal.total.days} </span><p>dias</p></div> 
  <div><span>${tempoParaONatal.total.hours} </span><p>horas</p></div>
  <div><span>${tempoParaONatal.total.minutes}</span><p>minutos</p></div>
  <div><span>${tempoParaONatal.total.seconds}</span><p>segundos</p></div>`;
});

console.log(tempoParaONatal.total);
console.log(tempoParaOAnoNovo.total);

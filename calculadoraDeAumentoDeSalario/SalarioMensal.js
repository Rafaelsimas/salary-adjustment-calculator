












/* 

Escreva um algoritmo para ler o salário
 mensal atual de um funcionário e o
  percentual de reajuste.
   Calcular e escrever o valor do novo salário
*/



























function calc() {
  let screenResultNewWage = document.querySelector("#newWage");
  let valueOfWage = document.querySelector("#valueOfWage");

  let monthlySalary = Number(document.querySelector("#wageInput").value);
  let percentage = Number(document.querySelector("#increasePorcentage").value);
  let increase = 0;
  let salaryWithIncrease = 0;

  console.log(monthlySalary, percentage);

  increase = (monthlySalary * percentage) / 100;
  salaryWithIncrease = monthlySalary + increase;

  screenResultNewWage.innerHTML = salaryWithIncrease.toFixed(2);
  valueOfWage.innerHTML = increase.toFixed(2);

  const screenResult = document.querySelector(".box-wage");
  screenResult.classList.remove("screen-hidden");
}

nowHour();
function nowHour() {
  let nowHourExact = document.querySelector("#now-hour");

  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var mes = dataAtual.getMonth() + 1;
  var ano = dataAtual.getFullYear();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  nowHourExact.innerHTML =
    dia + "/" + mes + " de " + ano + " " + horas + ":" + minutos + "h.";
}

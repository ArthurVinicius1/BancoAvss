//  Banco
var saldo = 100.5; //Float
var extrato = [
  "Foi sacado 520 reais",
  "\nFoi transferido 200 reais para a conta (358964)",
];

function boas_vindas() {
  var user = prompt("Insira seu nome:");
  alert(`Olá, ${user}! Seja bem-vindo(a) ao Banco Avss!`);
  inicio();
}

function validar_senha() {
  var senha = 3589;
  var validacao = parseInt(prompt("Insira a senha:"));

  if (validacao < senha || validacao > senha) {
    alert("A senha está incorreta!");
    inicio();
  }
}

function inicio() {
  var escolha = parseInt(
    prompt(
      "Selecione uma opção:\n 1.) Saldo\n 2.) Extrato\n 3.) Saque\n 4.) Depósito\n 5.) Transferência\n 6.) Sair"
    )
  );

  switch (escolha) {
    case 1:
      ver_saldo();
      break;
    case 2:
      ver_extrato();
      break;
    case 3:
      fazer_saque();
      break;
    case 4:
      fazer_deposito();
      break;
    case 5:
      fazer_transferencia();
      break;
    case 6:
      sair();
      break;
    default:
      erro();
  }
}

function ver_saldo() {
  validar_senha();
  alert("Seu saldo atual é: " + saldo);
  inicio();
}

function saldo_posfunc() {
  alert("Seu saldo atual é: " + saldo);
  inicio();
}

function ver_extrato() {
  validar_senha();
  alert(extrato);

  inicio();
}

function fazer_saque() {
  validar_senha();

  var saque = parseFloat(prompt("Qual o valor para saque?"));
  if (isNaN(saque) || saque === "" || saque <= 0) {
    alert("Operação não autorizada! Por favor, insira um valor válido.");
    fazer_saque();
  } else {
    saldo -= saque;
    extrato.push(`\nFoi sacado ${saque} reais`);

    saldo_posfunc();
  }
}

function fazer_deposito() {
  var deposito = parseFloat(prompt("Qual o valor para depósito?"));
  // Not a Number
  if (isNaN(deposito) || deposito === "" || deposito <= 0) {
    alert("Operação não autorizada! Por favor, insira um valor válido.");
    fazer_deposito();
  } else {
    saldo += deposito;
    extrato.push(`\nFoi depositado ${deposito} reais`);

    saldo_posfunc();
  }
}

function fazer_transferencia() {
  validar_senha();

  var conta = parseInt(prompt("Insira o número da conta:"));
  var transferencia = parseFloat(
    prompt("Insira a quantia que deseja transferir:")
  );

  if (
    isNaN(transferencia) ||
    transferencia === "" ||
    transferencia <= 0 ||
    transferencia > saldo
  ) {
    alert("Operação não autorizada! Por favor, insira um valor válido.");
    fazer_transferencia();
  } else {
    saldo -= transferencia;
    extrato.push(
      `\nFoi transferido ${transferencia} reais para a conta (${conta})`
    );

    saldo_posfunc();
  }
}

function sair() {
  var confirma = confirm("Você deseja sair?");
  if (confirma) {
    alert(
      `Obrigado por utilizar nossos serviços, é um prazer ter você como cliente.`
    );
    close();
  } else {
    inicio();
  }
}

function erro() {
  alert("Por favor, informe um número entre 1 e 6");
  inicio();
}

boas_vindas();

# BancoAvss
Realizei uma atividade do professor gabriel pelo instituto proa, e essa atividade o desafio foi realizar um banco ficctio com várias funções.

Aqui estão as principais funções e características do código:

var saldo = 100.5;: declara uma variável de saldo inicial para a conta bancária.

var extrato = [...]: declara uma matriz que armazena informações sobre as transações da conta, como saques, depósitos e transferências.

function boas_vindas() {...}: função que é executada no início do programa e solicita o nome do usuário. Ela usa o prompt para coletar o nome do usuário e exibe uma mensagem de boas-vindas.

function validar_senha() {...}: função que solicita a senha do usuário para acessar as funções bancárias. A senha é definida como um número inteiro e é verificada com o valor digitado pelo usuário usando a declaração if.

function inicio() {...}: função que exibe um menu de opções para o usuário e solicita que ele selecione uma delas. As opções incluem Saldo, Extrato, Saque, Depósito, Transferência e Sair. Dependendo da opção selecionada, a função chama a função apropriada.

function ver_saldo() {...}: função que exibe o saldo atual da conta bancária. Antes de exibir o saldo, é solicitada a senha do usuário para autenticar a solicitação.

function ver_extrato() {...}: função que exibe o extrato da conta bancária. O extrato é armazenado na matriz extrato e é exibido usando alert(). A senha do usuário é solicitada antes de exibir o extrato para autenticar a solicitação.

function fazer_saque() {...}: função que permite ao usuário realizar um saque. Ela solicita o valor a ser sacado e verifica se o valor é válido antes de atualizar o saldo e o extrato da conta bancária.

function fazer_deposito() {...}: função que permite ao usuário fazer um depósito na conta bancária. Ela solicita o valor a ser depositado e verifica se o valor é válido antes de atualizar o saldo e o extrato da conta bancária.

function fazer_transferencia() {...}: função que permite ao usuário fazer uma transferência para outra conta. Ela solicita o número da conta e o valor a ser transferido e verifica se a conta tem saldo suficiente para fazer a transferência.

function sair() {...}: função que é executada quando o usuário seleciona a opção "Sair". Ela exibe uma mensagem de despedida e fecha a janela do navegador.

function erro() {...}: função que é executada quando o usuário seleciona uma opção inválida no menu. Ela exibe uma mensagem de erro e chama a função inicio() novamente para exibir o menu novamente.

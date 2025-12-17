import java.util.Scanner;

public class Banco {
    public static void main(String[] args) {

                /*Importação da biblioteca Scanner para entrada de dados do usuário, definindo as váriaveis saldo como double, opcao como int,
                resposta como boolean, nome como String e opcao conta como int, usando saldo para saldo da conta, opcao para as opções do menu,
                nome para definir o nome do cliente, resposta para usar no loop e opcaoconta para escolher qual tipo de conta.
                Usando switch para definir diferentes casos para cada tipo de conta, cada uma entrando em um tipo de loop while, com if, else if e
                else para as diferentes operações do sistema. */
        /* BLOCO 1: CONFIGURAÇÃO INICIAL E COLETA DE DADOS */
        Scanner sc = new Scanner(System.in);
        System.out.println("Informe seu nome : " );
        String nome = sc.nextLine();
        double saldo = 200.00;
        int opcao=0;
        boolean resposta = true; /*Controla a permanência no laço de repetição*/
        System.out.println("escolha uma conta: " + "1-CORRENTE" + " 2-POUPANÇA ");

        int opcaoconta = sc.nextInt();

        /*BLOCO 2: SELEÇÃO DO AMBIENTE DE CONTA (SWITCH)*/
        switch (opcaoconta){
            /*Caso 1: Regras e operações específicas para Conta Corrente*/
            case 1:
                String mensagemInicial = """
                Dados iniciais do cliente:
                Nome: %s
                Tipo conta: Corrente\s
                Saldo inicial: %s
                
                """.formatted(nome,saldo);

                System.out.println(mensagemInicial);

        /* BLOCO 3: LOOP DE INTERAÇÃO (MENU)*/
                while (resposta==true){
                    System.out.println("Operações\n" +
                            "1- Consultar saldos\n" +
                            "2- Realizar Saque\n" +
                            "3- Realizar Transferência\n" +
                            "4. Realizar Depósito\n" +
                            "5- Sair \n" +
                            "Digite a opção desejada:");
                    opcao = sc.nextInt();

                    /*BLOCO 4: PROCESSAMENTO DAS TRANSAÇÕES (LÓGICA FINANCEIRA)*/
                    if (opcao == 1) {
                        System.out.println("Saldo atual: R$ " + saldo) ;
                    }


                    else if (opcao == 2) {
                        /* Lógica de Saque: requer verificação de saldo disponível*/
                        System.out.println("Digite o valor do saque: ");
                        double saque = sc.nextDouble();
                        if (saque > 0 && saque < saldo) {
                            saldo -= saque;
                            System.out.println("Saque realizado com sucesso. Seu saldo atual é: R$" + saldo);

                        }
                        else {
                            System.out.println("Saldo insuficiente !! ");


                        }

                    }

                    else if (opcao == 3) {
                        /*Lógica de Transferência: similar ao saque, reduz o saldo*/
                        System.out.println("Digite o valor da transferencia: R$" + saldo);
                        double transferencia = sc.nextDouble();

                        if (transferencia > 0 && transferencia < saldo) {
                            saldo -= transferencia;
                            System.out.println("transferência realizada com sucesso. Seu saldo atual é: R$" + saldo);

                        }
                        else {
                            System.out.println("Saldo insuficiente !! ");

                        }

                    }

                    else if (opcao == 4) {
                        /*Lógica de Depósito: incrementa o saldo após validar valor positivo*/
                        System.out.println("Digite o valor do deposito: ");
                        double deposito = sc.nextDouble();
                        if (deposito < 0){
                            System.out.println("Valor inválido");
                        }
                        /*Encerramento do programa*/
                        else{
                            saldo += deposito;
                            System.out.println("Depósito realizado com sucesso, seu novo saldo é: " + saldo);
                        }
                    }
                    else{
                        System.out.println("Obrigada por usar nossos serviços. Operação finalizada! ");
                        resposta = false;
                    }

                }
            break;

                /* Caso 2: Regras e operações específicas para Conta Poupança*/
            case 2:
                String mensagemInicial2 = """
                Dados iniciais do cliente:
                Nome: %s
                Tipo conta: Poupança\s
                Saldo inicial: %s
                
                """.formatted(nome,saldo);

                System.out.println(mensagemInicial2);

                while (resposta==true){
                    System.out.println("Operações\n" +
                            "1- Consultar saldos\n" +
                            "2- Realizar Transferência\n" +
                            "3. Realizar Depósito\n" +
                            "4- Sair \n" +
                            "Digite a opção desejada:");
                    opcao = sc.nextInt();
                    if (opcao == 1) {
                        System.out.println("Saldo atual: R$ " + saldo) ;
                    }

                    else if (opcao == 2) {
                        System.out.println("Digite o valor da transferencia: R$" + saldo);
                        double transferencia = sc.nextDouble();

                        if (transferencia > 0 && transferencia < saldo) {
                            saldo -= transferencia;
                            System.out.println("transferência realizada com sucesso. Seu saldo atual é: R$" + saldo);

                        }
                        else {
                            System.out.println("Saldo insuficiente !! ");

                        }

                    }

                    else if (opcao == 3) {
                        System.out.println("Digite o valor do deposito: ");
                        double deposito = sc.nextDouble();
                        if (deposito < 0){
                            System.out.println("Valor inválido");
                        }
                        else {
                            saldo += deposito;
                            System.out.println("Depósito realizado com sucesso, seu novo saldo é: " + saldo);
                        }
                    }
                    else{
                        System.out.println("Obrigada por usar nossos serviços. Operação finalizada! ");
                        resposta = false;
                    }

                }
            break;
        }










    }
}
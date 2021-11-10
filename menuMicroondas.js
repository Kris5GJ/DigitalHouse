/*Checkpoint1 - Kristy Alejandra Godoy Jaimes*/

/*Usuário por favor introducir o número da sua opção e o tempo desejado. Use a seguinte tabela para fazer sua escolha.
Opcoes do Menu do microondas.

1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão);*/




function microondas(opcaoN,tempo){
    let opcao = ['','pipoca','macarrao','carne','feijao','brigadeiro'];
    let tempoPredefinido = [0,10,8,15,12,8];
    let mensagemFinal = '***Prato pronto, bom apetite!!!***';

    if (opcaoN == 0 || opcaoN > 5){
        console.log('Opção escolhida: ' + opcaoN + ' **Prato inexistente**');

    }else if(typeof opcaoN === 'string'){
        console.log('Escreva o número da sua opção por favor, não utilizar letras');  
    }else{
         
        console.log('Opção escolhida: ' + opcao[opcaoN]); //Mostrar prato escolhido
        console.log('Tempo Predefinido para essa opção: ' + tempoPredefinido[opcaoN]); //Mostrar tempo predefinido para esse prato
        console.log('Tempo definido: ' + tempo); //Mostrar tempo definido pelo usuário

        if (tempo > tempoPredefinido[opcaoN]*2 && tempo <= tempoPredefinido[opcaoN]*3){
            console.log('A comida queimou');
        }else if(tempo < tempoPredefinido[opcaoN]){
            console.log('Tempo insuficiente');
        }else if(tempo > tempoPredefinido[opcaoN]*3){
            console.log('KABUMM!');
        }else{
            //nao faz nada        
        }
        
        console.log(mensagemFinal)
    }
}

/*Usuário por favor introducir o número da sua opção e o tempo desejado. Use a seguinte tabela para fazer sua escolha.
Opcoes do Menu do microondas.

1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão);*/

microondas(5,9);

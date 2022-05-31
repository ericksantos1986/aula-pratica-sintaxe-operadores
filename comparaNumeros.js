var primeiroNumero = prompt ("Digite o primeiro número: ");
var segundoNumero = prompt ("Digite o Segundo número: ");

function comparaNumeros(num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return document.write(`${primeiraFrase} ${segundaFrase}`);
}

function criaPrimeiraFrase(num1, num2){
    let primeiraFrase = `Os Números ${num1} e ${num2}`;
    let simNao = 'não';

    if (num1 === num2){
        simNao = '';
    }

    return `${primeiraFrase} ${simNao} são iguais. `;
}

function criaSegundaFrase(num1, num2) {
	const soma = Number(num1) + Number(num2);
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

comparaNumeros(primeiroNumero, segundoNumero);





function achacep() {
	
	var cep = document.getElementById("fcep").value;		//*declaração da variavel.
	
	$(document).ready(function() {


		$.ajax({
			url: "http://viacep.com.br/ws/"+cep+"/json/"	// 1- Nessa linha ele chama a URL (http://viacep.com.br/ws/cep/json/), onde cep é uma variável que contém o cep pesquisado*.
															// 4- É um serviço REST que pega todas as informações de um dado cep e retorna em um JSON.
			
		}).then(function(data) {							// 3- Aqui o JQuerry realiza a função que vai preencher os dados com o retorno da URL chamada anteriormente.
															// A URL retorna um JSON com uma lista de informaçãoes sobre o cep a serem preenchidas.
															
			$('.cep-cep').append(data.cep);					// 2- Dessa linha em diante o programa preenche as informações com os parametros que foram retornados no JSON, de cep até siafi.
			$('.cep-logradouro').append(data.logradouro);
			$('.cep-complemento').append(data.complemento);
			$('.cep-bairro').append(data.bairro);
			$('.cep-localidade').append(data.localidade);
			$('.cep-uf').append(data.uf);
			$('.cep-ibge').append(data.ibge);
			$('.cep-gia').append(data.gia);
			$('.cep-ddd').append(data.ddd);
			$('.cep-siafi').append(data.siafi);
		});													
	});
}
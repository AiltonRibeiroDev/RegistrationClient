function validarForm() {

    var name = document.getElementById("name").value;
    let cpf = document.getElementById("cpf").value;
    let re = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;



    if (name.value == "") {
        alert("Nome não informado!");

    }


    if (name.value < 10) {
        alert("ERRO! Campo do nome deve conter no minimo 10 caracteres.");

    }

    if (!re.test(cpf)) {

        alert('Conteúdo dos campos vazios ou incorretos!');
        document.form.cpf.focus();
        return false;
    }
    return true;



    
}

function limpa_formulário_cep() {
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    document.getElementById('ibge').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
        document.getElementById('ibge').value = (conteudo.ibge);
    } 
    else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

    
        var validacep = /^[0-9]{8}$/;

      
        if (validacep.test(cep)) {

          
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('ibge').value = "...";

        
            var script = document.createElement('script');

         
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';


            document.body.appendChild(script);

        } 
        else {
           
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
   
        limpa_formulário_cep();
    }
};
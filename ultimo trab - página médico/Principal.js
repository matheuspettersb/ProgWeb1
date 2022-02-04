function cadastro(){

    var email= document.getElementById("email").value;
    var nome= document.getElementById("nome").value;
    var telefone= document.getElementById("telefone").value;
    var rg= document.getElementById("rg").value;
    var idade= document.getElementById("idade").value;
    var endereco= document.getElementById("Endereco").value;
    var senha= document.getElementById("senha").value;

    var usuario={emailUsuario:email, nomeUsuario:nome, telefoneUsuario:telefone, rgUsuario:rg, idadeUsuario:idade, enderecoUsuario:endereco, senhaUsuario:senha};

    //validar campos

    if(localStorage.usuarios){
// ler localstorage, converter json para lista,add mais um usuario na lista, voltar para json e add no local storage 
       var jsonUsuarios=localStorage.getItem("usuarios");
        var listaUsuarios= JSON.parse(jsonUsuarios);
        listaUsuarios.push(usuario);
        jsonUsuarios=JSON.stringify(listaUsuarios);
        localStorage.setItem("usuarios", jsonUsuarios);

    }else{
        var listaUsuarios=[usuario];
        var jsonUsuarios=JSON.stringify(listaUsuarios);
        localStorage.setItem("usuarios", jsonUsuarios);
    }

    //colocar função para limpar campos 
};

function validaEntrada(){
    var login= document.getElementById("emailValida").value;
    var senha= document.getElementById("senhaValida").value;

    var jsonUsuarios= localStorage.getItem("usuarios");
    var usuarios= JSON.parse(jsonUsuarios);

    //for(int i=0, i<usuarios.lenght, i++){
    //}

}
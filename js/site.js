function validaFormulario(){
    //Validação do campo Nome completo
    var nome = document.formdecontato.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome completo corretamente.");
        document.formdecontato.txtnome.focus();
        return false;
    }
    
    //Validação do campo E-mail
    var email = document.formdecontato.txtemail.value;
    var expRegEmail = new RegExp("^[A-zÀ-ü0-9.!#$%&*]{3,}[@]{1}[a-z]{4,}[.]{1}[a-z]{2,}$");

    if(!expRegEmail.test(email)){
        alert("Preencha o campo E-mail corretamente.");
        document.formdecontato.txtemail.focus();
        return false;
    }

    //Validação do campo Telefone
    var fone = document.formdecontato.txtfone.value;
    var expRegTelefone = new RegExp("^[(]{1}[1-9]{2}[)]{1}([ ]{1})?[0-9]{4,5}[-]{1}[0-9]{4}$");

    if(!expRegTelefone.test(fone)){
        alert("Preencha o campo Telefone corretamente.");
        document.formdecontato.txtfone.focus();
        return false;
    }

    //Validação do campo CPF
    var cpf = document.formdecontato.txtcpf.value;
    var expRegcpf = new RegExp("^[0-9]{3}[.]{1}[0-9]{3}[.]{1}[0-9]{3}[-]{1}[0-9]{2}$");

    if(!expRegcpf.test(cpf)){
        alert("Preencha o campo CPF corretamente.");
        document.formdecontato.txtcpf.focus();
        return false;
    }

    //Validação do campo Data de nascimento

    if(document.formdecontato.txtnasc.value == ""){
        alert("Preencha o campo Nascimento!");
        document.formdecontato.txtnasc.focus();
        return false;
    }

    //Validação dos campos Gênero
    if(document.getElementById("opcradm").checked != true && document.getElementById("opcradf").checked != true && document.getElementById("opcrado").checked != true){
        alert("Escolha uma opção do campo Gênero!");
        document.getElementById("opcradm").focus();
        return false;
    }

    //Validação do campo de Descoberta do fã-clube
    var valorEscolhido = document.getElementById("descoberta");
    if(valorEscolhido.value == " "){
        alert("Escolha uma opção do campo 'Como descobriu o fã-clube?'");
        document.formdecontato.selmotivo.focus();
        return false;
    }
}

function verificaMarcacao(){
    var verificaBotao = document.getElementById("enviar");
    if(document.formdecontato.checkparticipacao.checked){
        verificaBotao.removeAttribute('disabled');
    } else {
        desativaBotaoEnvio();   
    }
}

function desativaBotaoEnvio(){
    var botao = document.getElementById("enviar");
    if(document.formdecontato.checkparticipacao.checked == false){
        botao.setAttribute('disabled', '');   
    }
}

//jQuery
$(document).ready(function(){
    $("header").load("/paginas/geral/cabecalho.html");
    $("nav").load("/paginas/geral/menu.html");
    $("footer").load("/paginas/geral/rodape.html");
});
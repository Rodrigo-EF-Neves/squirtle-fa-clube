function aplicaMascaraCpf(cpf){
    cpf = document.querySelector("#txtcpf");
    cpf.addEventListener('keyup', () => {
        let cpfLength = cpf.value.length
        
        if(cpfLength === 3 || cpfLength === 7){
            cpf.value += ".";
        } else if (cpfLength === 11){
            cpf.value += "-";
        }
        // TO DO replace format
    })
    return cpf;
// replace
// /^(\d{3})(\d{3})(\d{3})(\d{2})/ 
// "$1.$2.$3-$4"
}

function aplicaMascaraTelefone(){
    // TO DO replace format
}
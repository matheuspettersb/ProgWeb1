function preencher() {
    var medico = document.getElementById("fmedico").value;
    var especialidade = document.getElementById("fespecialidade").value;
    var data = document.getElementById("fdata").value;

    var consulta = { Cmedico: medico, Cespecialidade: especialidade, Cdata: data };

    if (localStorage.consultas) {
        var jsonConsultas = localStorage.getItem("consultas");
        var listaConsultas = JSON.parse(jsonConsultas);
        listaConsultas.push(consulta);
        jsonConsultas = JSON.stringify(listaConsultas);
        localStorage.setItem("consultas", jsonConsultas);

    } else { //cria a lista pro caso de n ter ainda
        var listaConsultas = [consulta];
        var jsonConsultas = JSON.stringify(listaConsultas);
        localStorage.setItem("consultas", jsonConsultas); //consultas = nome da lista no LS
    }

    var tabela = document.getElementById("tabela");
    var totalLinhas = tabela.rows.length;
    var linha = tabela.insertRow(totalLinhas);
    var coluna1 = linha.insertCell(0);
    var coluna2 = linha.insertCell(1);
    var coluna3 = linha.insertCell(2);
    var coluna4 = linha.insertCell(3);
    coluna1.innerHTML = document.getElementById("fmedico").value;
    coluna2.innerHTML = document.getElementById("fespecialidade").value;
    coluna3.innerHTML = document.getElementById("fdata").value;
    coluna4.innerHTML = "<button type='button' onclick='excluir(this)'>Exlcluir</button> <button type='button' onclick='editar(this)'>Editar</button>";
}

function ordena(n) {
    var tabela, linhas, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    tabela = document.getElementById("tabela");
    switching = true;
    dir = "asc"; //ascendente
    while (switching) { //em loop até um switch ser feito
        switching = false; //começa dizendo q switch ta falso
        linhas = tabela.rows;
        for (i = 1; i < (linhas.length - 1); i++) {// loop pelas linhas tirando a primeira (header)
            shouldSwitch = false; // não deve trocar
            //compara a linha atual com a proxima
            x = linhas[i].getElementsByTagName("TD")[n];
            y = linhas[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") { //checa se deve trocar de acordo com a orientação (asc/desc)
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true; //quebra o loop (troca)
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
               }
            }
        }
        if (shouldSwitch) {
            //faz a troca e marca que uma troca foi feita
            linhas[i].parentNode.insertBefore(linhas[i + 1], linhas[i]);
            switching = true;
            switchcount++; //cada vez q troca add 1
        } else {
            //se n fez troca e tá em "asc" roda dnv com "desc"
        if (switchcount == 0 && dir == "asc") {
              dir = "desc";
                switching = true;
            }
        }
    }
}

function procura() {
    var input, filtro, tabela, tr, td, i, texto;
    input = document.getElementById("barra_procura");
    filtro = input.value.toUpperCase();
    tabela = document.getElementById("tabela");
    tr = tabela.getElementsByTagName("tr");

    //loop em todas as linhas e esconde as que n tem nd a ver
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            texto = td.textContent || td.innerText;
            if (texto.toUpperCase().indexOf(filtro) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function excluir(id) {
    var i = id.parentNode.parentNode.rowIndex;
    document.getElementById("tabela").deleteRow(i);

    var jsonConsultas = localStorage.getItem("consultas");
    var listaConsultas = JSON.parse(jsonConsultas);
    
    listaConsultas.splice((i-1), 1);

    jsonConsultas = JSON.stringify(listaConsultas);
    localStorage.setItem("consultas", jsonConsultas);
}

function editar(id) {    
    var i = id.parentNode.parentNode.rowIndex;

    var jsonConsultas = localStorage.getItem("consultas");
    var listaConsultas = JSON.parse(jsonConsultas);
    
    var medico = document.getElementById("fmedico").value;
    var especialidade = document.getElementById("fespecialidade").value;
    var data = document.getElementById("fdata").value;
    var consulta = { Cmedico: medico, Cespecialidade: especialidade, Cdata: data};

    listaConsultas.splice((i-1), 1, consulta);

    jsonConsultas = JSON.stringify(listaConsultas);
    localStorage.setItem("consultas", jsonConsultas);

    //ta mudando só no localStorage, n sei como trocar na tabela em si;
}

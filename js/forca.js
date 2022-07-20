let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "ESTADOS UNIDOS",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "ESPANHA",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "BELGICA",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "CANADA",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "PORTUGAL",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "ITÁLIA",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra012 = {
        nome: "LANCHA",
        categoria: "TRANSPORTE"
    },
    palavra013 = {
        nome: "CARRO",
        categoria: "TRANSPORTE"
    },
    palavra014 = {
        nome: "MOTO",
        categoria: "TRANSPORTE"
    },
    palavra015 = {
        nome: "AVIÃO",
        categoria: "TRANSPORTE"
    },
    palavra016 = {
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra017 = {
        nome: "QUADRICICULO",
        categoria: "TRANSPORTE"
    },
    palavra018 = {
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra019 = {
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavra020 = {
        nome: "HELICÓPTERO",
        categoria: "TRANSPORTE"
    },
    palavra021 = {
        nome: "LÁPIS",
        categoria: "OBEJETOS"
    },
    palavra022 = {
        nome: "BORRACHA",
        categoria: "OBJETOS"
    },
    palavra023 = {
        nome: "TENIS",
        categoria: "OBJETOS"
    },
    palavra024 = {
        nome: "PRATO",
        categoria: "OBJETOS"
    },
    palavra025 = {
        nome: "GELADEIRA",
        categoria: "OBJETOS"
    },
    palavra026 = {
        nome: "CONTROLE",
        categoria: "OBJETOS"
    },
    palavra027 = {
        nome: "CAMA",
        categoria: "OBJETOS"
    },
    palavra028 = {
        nome: "CELULAR",
        categoria: "OBJETOS"
    },
    palavra029 = {
        nome: "ARMARIO",
        categoria: "OBJETOS"
    },
    palavra030 = {
        nome: "BACIA",
        categoria: "OBJETOS"
    },
    palavra031 = {
        nome: "MORANGO",
        categoria: "ALIMENTOS"
    },
    palavra032 = {
        nome: "BOLO",
        categoria: "ALIMENTOS"
    },
    palavra033 = {
        nome: "MACARRAO",
        categoria: "ALIMENTOS"
    },
    palavra034 = {
        nome: "STROGONOFF",
        categoria: "ALIMENTOS"
    },
    palavra035 = {
        nome: "CAVIAR",
        categoria: "ALIMENTOS"
    },
    palavra036 = {
        nome: "SUSHI",
        categoria: "ALIMENTOS"
    },
    palavra037 = {
        nome: "ARROZ",
        categoria: "ALIMENTOS"
    },
    palavra038 = {
        nome: "GRAO DEE BICO",
        categoria: "ALIMENTOS"
    },
    palavra039 = {
        nome: "BATATA ASSADA",
        categoria: "ALIMENTOS"
    },
    palavra040 = {
        nome: "HAMBURGUER",
        categoria: "ALIMENTOS"
    },
    palavra041 = {
        nome: "JACARE",
        categoria: "ANIMAIS"
    },
    palavra042 = {
        nome: "ONÇA",
        categoria: "ANIMAIS"
    },
    palavra043 = {
        nome: "DINOSSAURO",
        categoria: "ANIMAIS"
    },
    palavra044 = {
        nome: "TUBARÃO",
        categoria: "ANIMAIS"
    },
    palavra045 = {
        nome: "JABUTI",
        categoria: "ANIMAIS"
    },
    palavra046 = {
        nome: "TAMANDUÁ",
        categoria: "ANIMAIS"
    },
    palavra047 = {
        nome: "TATU",
        categoria: "ANIMAIS"
    },
    palavra048 = {
        nome: "GANSO",
        categoria: "ANIMAIS"
    },
    palavra049 = {
        nome: "ESQUILO",
        categoria: "ANIMAIS"
    },
    palavra050 = {
        nome: "HIPOPÓTAMO",
        categoria: "ANIMAIS"
    },
];


criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)
    console.log(indexPalavra)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaCategoria)
}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    if (categoria != null) {
        categoria.innerHTML = palavraSecretaCategoria;

        const palavraTela = document.getElementById("palavra-secreta");
        palavraTela.innerHTML = "";

        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (listaDinamica[i] == undefined) {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
            else {
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
    }
}

function verificarLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true
        if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#c71585";
    document.getElementById(tecla).style.color = "#affffff";
}

function comparalistas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--
        carregaImagemForca();
        
        if(tentativas == 0)
        {
            abreModal("OPS!", "Não foi dessa vez ... A palavra secreta era <br>" + palavraSecretaSorteada);
        }
    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("PARABÉNS!", "Você venceu...");
        tentativas = 0;
    }
}

function carregaImagemForca() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('../img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('../img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('../img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('../img/forca04.png')"
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('../img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('../img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('../img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
  location.reload();

});
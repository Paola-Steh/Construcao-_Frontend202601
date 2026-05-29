const url = "http://localhost:5173/produtos";

// estrutura para todas as funções
// chamada assíncrona, com await (esperar)
async function criar(produto) {                // função CRIAR/POST
    try {  // 1° "try" tenta primeiro
        const resposta = await fetch(url, {
            method: "POST",  // método usado > POST(Criar)
            body: JSON.stringify(produto), //
            headers: {
                "content-type": "application/json" //
            }
        });
        const dados = await resposta.json();  // pega a resposta e converte os dados para json
    return dados;
    } catch (error) { // 2° "catch" se deu ruim
        console.log(" Deu ruim: ", error.message)
    }
}

async function obter(produto) {                // função OBTER/GET
    try {  // 1° "try" tenta primeiro
        const resposta = await fetch(`${url}/${produto.id}`); // url específica do produto
        const dados = await resposta.json();  // pega a resposta e converte os dados para json
    return dados;
    } catch (error) { // 2° "catch" se deu ruim
        console.log(" Deu ruim: ", error.message)
    }
}

async function listar() {                // função LISTAR/GET tbm
    try {  // 1° "try" tenta primeiro
        const resposta = await fetch(url); // sem url específica, lista TODAS
        const dados = await resposta.json();  // pega a resposta e converte os dados para json
    return dados;
    } catch (error) { // 2° "catch" se deu ruim
        console.log(" Deu ruim: ", error.message)
    }
}

async function modificar(produto) {                // função MODIFICAR/PUT
    try {  // 1° "try" tenta primeiro
        const resposta = await fetch(`${url}/${produto.id}`, {
            method: "PUT",  // método usado > PUT(Modificar)
            body: JSON.stringify(produto), //
            headers: {
                "content-type": "application/json" //
            }
        });
        const dados = await resposta.json();  // pega a resposta e converte os dados para json
    return dados;
    } catch (error) { // 2° "catch" se deu ruim
        console.log(" Deu ruim: ", error.message)
    }
}

async function remover(produto) {                // função REMOVER/DELETE
    try {  // 1° "try" tenta primeiro
        const resposta = await fetch(`${url}/${produto.id}`, {
            method: "DELETE"   // método usado > DELETE(Apagar)
        });
        const dados = await resposta.json();  // pega a resposta e converte os dados para json
    return dados;
    } catch (error) { // 2° "catch" se deu ruim
        console.log(" Deu ruim: ", error.message)
    }
}

export {criar, obter, listar, modificar, remover }

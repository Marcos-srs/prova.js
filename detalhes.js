class Comida{
    constructor(id, imagem, produto, descricao, nome){
        this.id = id;
        this.imagem = imagem;
        this.produto = produto;
        this.descricao = descricao;
        this.nome = nome;
    }
    exibir(){
        return`
        <div class="card" style="width: 18rem;">
                    <img src="${this.imagem}" alt="Carne">
                    <h1>${this.nome}</h1>
                    <button class="btn" onclick="alert('comprado-com-sucesso')">
                        Comprar Agora
                    </button>
                </div>`
                
}
}

const combo = document.getElementById("combo");

let buscar = async () =>{
    const id = new URLSearchParams(window.location.search).get("id");


    const resposta = await fetch(`https://tech4produtos.fly.dev/produtos/${(id)}`);
    const comidas = await resposta.json();
    exibir(comidas);
}

let exibir = (comida) =>{
    combo.innerText = "";

        const comidaObjeto = new Comida(comida.id, comida.imagem, comida.produto, comida.descricao, comida.nome);
        combo.innerHTML += comidaObjeto.exibir();
    };


buscar();
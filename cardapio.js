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
        <div class="card" >
                <img src="${this.imagem}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${this.nome}</h5>
                    <p class="card-text">${this.descricao}<br>
                    </p>
                    <a href="detalhes.html?id=${this.id}" class="btn-detalhes">
                        Ver detalhes
                    </a>
                    <p> produto: ${this.produto}</p>
                </div>
                
        </div>`
        
    }
}

const cardapio = document.getElementById("cardapio");
const cardapio2 = document.getElementById("cardapio2");

let exibirComida = async () => {
    const resposta = await fetch("https://tech4produtos.fly.dev/produtos/restaurante=brasaquente");
    const comidas = await resposta.json();
    exibir(comidas);
}

let exibir = (comidas) =>{
    cardapio.innerText = "";
    cardapio2.innerText = "";

    let contador = 0;
    comidas.forEach(comida => {
        const comidaObjeto = new Comida(comida.id, comida.imagem, comida.produto, comida.descricao, comida.nome);
        contador++;
        if(contador <= 3){
            cardapio.innerHTML += comidaObjeto.exibir();
        } else {
            cardapio2.innerHTML += comidaObjeto.exibir();
        }
    });
}

exibirComida();
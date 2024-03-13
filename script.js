itens = [
    {
        id: 0,
        nome: 'Acer Nitro 5',
        img: '/produtos/ACER-NITRO-5.jpg',
        preco: 4000,
        qntd: 0
    },
    {
        id: 1,
        nome: 'Watch Apple',
        img: '/produtos/APPLE-WATCH.jpg',
        preco: 7000,
        qntd: 0
    },
    {
        id: 2,
        nome: 'Asus Ryzen 7',
        img: '/produtos/ASUS-RYZEN.jpg',
        preco: 2900,
        qntd: 0
    },
    {
        id: 3,
        img: '/produtos/CLIMATIZADOR-UMIDIFICADOR.webp',
        nome: 'Climatizador',
        preco: 150,
        qntd: 0
    },
    {
        id: 4,
        nome: 'Mouse G pro X superlight',
        img: '/produtos/G-PRO-X-SUPERLIGHT.png',
        preco: 700,
        qntd: 0
    },
    {
        id: 5,
        nome: 'Headset Jbl Quantum 800',
        img: '/produtos/JBL-QUANTUM-800.jpg',
        preco: 2000,
        qntd: 0
    },
    {
        id: 6,
        nome: 'Teclado Mecânico K500',
        img: '/produtos/K500.webp',
        preco: 120,
        qntd: 0
    },
    {
        id: 7,
        nome: 'Samsung Galaxy S23+',
        img: '/produtos/S23-PLUS.jpg',
        preco: 4000,
        qntd: 0
    },
    {
        id: 8,
        nome: 'Smartwatch Xiaomi',
        img: '/produtos/SMARTWATCH-XIAOMI.png',
        preco: 4000,
        qntd: 0
    },
    {
        id: 9,
        nome: 'Ventilador Mondial',
        img: '/produtos/VENTILADOR-MONDIAL.jpg',
        preco: 200,
        qntd: 0
    },

]

function iniciarLoja(){
    let corpoItens = document.getElementById('corpo-itens')
    itens.map((val)=>{
        corpoItens.innerHTML += `
        <div id="caixa-item">
            <img id="imagem-produto" src="${val.img}" alt="browser do not support">
            <p id="nome-produto">${val.nome}</p>
            <p id="preco-produto">R$${val.preco},00</p>
            <a href="#" key='${val.id}' class='botao-adicionar-carrinho' id="botao-Adicionar-Carrinho">Adicionar ao carrinho</a>
        </div>
        
        
        `
    })
}

iniciarLoja()





var sectionCorpo = document.getElementById('corpo')
var botaoCarrinho = document.getElementById('carrinho-icon')
var divCarrinho = document.getElementById('corpo-carrinho')
let carrinhoVisivel = false
var botaoAdicionarCarrinho = document.getElementsByClassName('botao-adicionar-carrinho')

let carrinhoUsuario = []
let valorCarrinhoUsuario = 0

botaoCarrinho.addEventListener('click', ()=>{
    if(carrinhoVisivel === false){
        sectionCorpo.innerHTML += `
        
        <div id='corpo-carrinho'>
        </div>
        `
        carrinhoVisivel = true
        divCarrinho = document.getElementById('corpo-carrinho')
        function atualizarCarrinho(){
            divCarrinho.innerHTML = `<p>Total: $${valorCarrinhoUsuario}</p>`
            itens.map((val)=>{
                if(val.qntd>0){
                    divCarrinho.innerHTML += `
                        <div id='caixa-itens-carrinho'>
                            <img src='${val.img}'>
                            <p class='nome-dentro-carrinho'>${val.nome}</p>
                            <div id='quantidade-preco'
                                <p class='preco-dentro-carrinho'>R$${val.preco}</p>
                                <p class='qntd-dentro'>Qntd:${val.qntd}</p>
                            </div>
                        </div>
                    ` 
                    console.log(carrinhoUsuario)
                }
            })
        }
            for(var i = 0; i < botaoAdicionarCarrinho.length; i++){
                botaoAdicionarCarrinho[i].addEventListener('click', function(){
                    let key = this.getAttribute('key')
                    itens[key].qntd++
                    carrinhoUsuario.push(itens[key].id)
                    valorCarrinhoUsuario += itens[key].preco
                    atualizarCarrinho()
                })
            }
    }
        
    
    else{
        sectionCorpo.removeChild(divCarrinho)
        carrinhoVisivel = false
    }
})



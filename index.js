let produtos = [];

function buscarProdutos(){
    fetch("https://fakestoreapi.com/products")
    .then((resposta) => resposta.json())
    .then((resposta) => { 
        produtos = resposta;
        carregarProdutos(resposta);
    })
}

buscarProdutos()

function carregarProdutos(listaDeprodutos){
    let grade = document.querySelector("#gradeDeProdutos");
    grade.innerHTML = "";
    listaDeprodutos.map((produto) => {
        grade.innerHTML += `
         <div class="bg-white p-3 rounded">
            <div class="relative">
                <img src="${produto.image}" alt="${produto.title}" class="w-full h-[200px] object-contain">
                <h3 class="absolute top-0 right-0 bg-orange-500 px-2 rounded text-white font-semibold">${produto.rating.rate}</h3>
            </div>
            <h2 class="text-[18px] font-semibold line-clamp-1" title="${produto.title}">${produto.title}</h2>
            <h3>${produto.category}</h3>
            <h3 class="text-right">R$ ${produto.price}</h3>
            <button class="w-full h-[40px] bg-orange-500 mt-3 font-bold text-white rounded hover:bg-orange-600 duration-200">Comprar</button>
        </div>
        `;
    })
}

function buscarCategorias(){
    fetch("https://fakestoreapi.com/products/categories")
    .then((resposta) => resposta.json())
    .then((resposta) => { 
        carregarCategorias(resposta);
    })
}

buscarCategorias();

function carregarCategorias(listaDeCategorias){
    let select = document.querySelector("#categorias");
    listaDeCategorias.map((categoria) => {
        select.innerHTML += `
            <option value="${categoria}">${categoria}</option>
        `
    })

}

function filtrarPorCategoria(categoria){
    let filtrados = produtos.filter((produto) => produto.category == categoria);
    carregarProdutos(filtrados)
}
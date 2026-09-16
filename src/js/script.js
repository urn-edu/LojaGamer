// array de imagens
let imagens = ["/src/assets/t1.jpg",
    "/src/assets/t2.webp",
    "/src/assets/t3.jpg"];

// posição base para as imagens
let index = 0;  

// tempo para a troca de imagens
let tempo = 2000; // 2s


// função do slideshow
function SlideShow(){
    // dom - pega o id e passa o caminho das imagens (document)
    document.getElementById("imgBanner").src = imagens[index];
    // incremento   
    index++;

    // estrutura condicional if
    if(index == imagens.length){
        index = 0;
    }

    // método set timeout para executar a função e chamar o tempo
    setTimeout('SlideShow()', tempo) // callback - função que chama outra função
}

// executando a função
SlideShow();


const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener('click',()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open")
})
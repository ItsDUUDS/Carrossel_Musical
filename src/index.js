const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const banners = document.querySelectorAll('.banner');
let bannerAtual = 0;

function esconderBannerSelecionado(){
const bannerSelecionado = document.querySelector('.selecionado');
    bannerSelecionado.classList.remove('selecionado');
}

function mostrarBanner(indiceBanner){
banners[indiceBanner].classList.add('selecionado');
}


btnAvancar.addEventListener('click', function(){

    if(bannerAtual === banners.length - 1) return

    esconderBannerSelecionado();
    
    bannerAtual++;
    mostrarBanner(bannerAtual)
});

btnVoltar.addEventListener('click', function(){

    if(bannerAtual === 0) return

    esconderBannerSelecionado()
    
    bannerAtual--;
    mostrarBanner(bannerAtual)
});


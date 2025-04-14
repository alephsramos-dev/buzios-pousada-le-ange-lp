document.addEventListener('DOMContentLoaded', function () {
    // Carrossel para a seção de Autoridade
    
    var splideAutoridade = new Splide('#autoridade-carrossel', {
        arrows: false,
        type: 'loop',
        perPage: 1,
        autoplay: true,
        pagination: true,
        focus: 'center',
        focus: clearInterval,
        gap: 10,
        padding: '5rem',
        breakpoints: {
            768: {
                padding: '.5rem',
            }
        }
    });
    splideAutoridade.mount();

    document.getElementById('autoridade-btnPrev').addEventListener('click', function () {
        splideAutoridade.go('<');
        console.log("Botão de voltar foi clicado com sucesso");
    })

    document.getElementById('autoridade-btnNext').addEventListener('click', function () {
        splideAutoridade.go('>');
        console.log("Botão de avançar foi clicado com sucesso");
    })

    // Carrossel para a seção de Depoimentos

    var splideDepoimentos = new Splide('#depoimentos-carrossel', {
        arrows: false,
        pagination: false,
        type: 'loop',
        drag: 'free',
        snap: true,
        perPage: 1,
        autoplay: true,
    });
    splideDepoimentos.mount();

    document.getElementById('depoimentos-btnPrev').addEventListener('click', function () {
        splideDepoimentos.go('<');
        console.log("Botão de voltar foi clicado com sucesso");
    })

    document.getElementById('depoimentos-btnNext').addEventListener('click', function () {
        splideDepoimentos.go('>');
        console.log("Botão de avançar foi clicado com sucesso");
    })

    // Carrossel para a seção de palavra do hospede

    var splidePalavra = new Splide('#palavra-carrossel', {
        arrows: false,
        pagination: false,
        type: 'loop',
        snap: true,
        perPage: 3,
        autoplay: true,
        gap: 20,
        breakpoints: {
            768: {
                perPage: 1,
            }
        }
    });
    splidePalavra.mount();

    document.getElementById('palavra-btnPrev').addEventListener('click', function () {
        splidePalavra.go('<');
        console.log("Botão de voltar foi clicado com sucesso");
    })

    document.getElementById('palavra-btnNext').addEventListener('click', function () {
        splidePalavra.go('>');
        console.log("Botão de avançar foi clicado com sucesso");
    })
    

    // Carrossel para a seção de garantia

    var splideGarantia = new Splide('#garantia-carrossel', {
        arrows: false,
        pagination: false,
        perPage: 3,
        gap: 30,
        breakpoints: {
            768: {
                perPage: 1,
            }
        }
    });
    var bar = splideGarantia.root.querySelector('.my-slider-progress-bar');

    splideGarantia.on('mounted move', function() {
        var end = splideGarantia.Components.Controller.getEnd() + 1;
        var rate = Math.min ((splideGarantia.index + 1 ) / end, 1 );
        bar.style.width = String( 100 * rate ) + '%';
    });
    splideGarantia.mount();

    document.getElementById('garantia-btnPrev').addEventListener('click', function () {
        splideGarantia.go('<');
        console.log("Botão de voltar foi clicado com sucesso");
    })

    document.getElementById('garantia-btnNext').addEventListener('click', function () {
        splideGarantia.go('>');
        console.log("Botão de avançar foi clicado com sucesso");
    })
});
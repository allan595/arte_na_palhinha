


document.addEventListener('DOMContentLoaded', function() {
    let botaoMostrarPreco = document.getElementById('mostrar-preco');
    console.log(botaoMostrarPreco); // Verifica se o botão está sendo identificado corretamente

    botaoMostrarPreco.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do botão

        let priceDisplay = document.getElementById('service-price');
        let selectedOption = document.getElementById('service-empalhar').value;
        let contactMessage = document.getElementById('contact-message');
        
        // Mapeamento de opções para valores
        let priceMap = {
            'option1': 'Valor: R$ 350',
            'option2': 'Valor: R$ 900',
            'option3': 'Valor: R$ 170',
            'option4': 'Valor: R$ 350',
            'option5': 'Valor: R$ 1500',
            'option6': 'Valor: R$ 3500'
        };

        // Definir o valor baseado na opção selecionada
        if (priceMap[selectedOption]) {
            setTimeout(function() {
                priceDisplay.textContent = priceMap[selectedOption];
                contactMessage.innerHTML = 'Entre em contato para realizar o serviço: <a href="https://wa.me/5582987172873" target="_blank">WhatsApp</a> ';
            }, 100); // Adiciona um atraso de 100 milissegundos
        } else {
            setTimeout(function() {
                priceDisplay.textContent = '';
                contactMessage.innerHTML = '';
            }, 100); // Adiciona um atraso de 100 milissegundos
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Código existente

    // Verificar se estamos na página da galeria
    if (document.querySelector('.gallery-section')) {
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlide(index) {
            if (index >= totalSlides) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = totalSlides - 1;
            } else {
                slideIndex = index;
            }

            const offset = -slideIndex * 100;
            document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
        }

        document.querySelector('.prev').addEventListener('click', function() {
            showSlide(slideIndex - 1);
        });

        document.querySelector('.next').addEventListener('click', function() {
            showSlide(slideIndex + 1);
        });

        showSlide(slideIndex);
    }
});


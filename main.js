document.addEventListener('DOMContentLoaded', () => {
    const btnTopo = document.getElementById('btn-topo');

    // Botão para voltar ao topo suavemente
    btnTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Rolagem suave nos links do menu de navegação
    const linksNav = document.querySelectorAll('nav a');
    linksNav.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// WhatsApp
function abrirWhatsApp() {
    window.open("https://wa.me/520000000000", "_blank");
}

// Formulario
document.getElementById("formPedido").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("mensaje").textContent = "✅ Pedido enviado. ¡Gracias!";
    this.reset();
});

// Animación al hacer scroll
const elementos = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    elementos.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
});
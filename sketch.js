// Obtén el elemento canvas por su id
var canvas = document.getElementById('miCanvas');

// Verifica si el navegador es compatible con el canvas
if (canvas.getContext) {
    // Obtén el contexto de dibujo 2D
    var ctx = canvas.getContext('2d');

    // Establece el estilo de texto
    ctx.font = '24px Arial';
    ctx.fillStyle = 'black';

    // Dibuja el texto en el canvas
    ctx.fillText('Este es un texto en el primer canvas', 50, 100);

    // Agregar más texto o cualquier otro elemento en el canvas aquí
}

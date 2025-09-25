function mostrarInfoEnlaces() {
  const enlaces = document.querySelectorAll('a');
  const total = enlaces.length;

  // Obtener el primer y último enlace
  const primero = enlaces[0].href;
  const ultimo = enlaces[enlaces.length - 1].href;

  const mensaje = `
    <p><strong>Total de enlaces:</strong> ${total}</p>
    <p><strong>Primer enlace:</strong> <a href="${primero}">${primero}</a></p>
    <p><strong>Último enlace:</strong> <a href="${ultimo}">${ultimo}</a></p>
  `;

  document.getElementById('infoEnlaces').innerHTML = mensaje;
}



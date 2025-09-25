function js_style() {
  const paragraph = document.getElementById("text");

  // Cambiar estilo del párrafo
  paragraph.style.fontFamily = "Arial, sans-serif";
  paragraph.style.fontSize = "24px";
  paragraph.style.color = "#007BFF"; // Azul Bootstrap

  // Opcional: añadir transición suave
  paragraph.style.transition = "all 0.3s ease";
}

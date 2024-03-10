function botao () {
    const html = document.documentElement
    html.classList.toggle('root')
    html.classList.toggle('claro')

    if (html.classList.contains("root")) {
        Swal.fire("Modo Claro!");
      } else { 
        Swal.fire("Modo Escuro!");
      }
}




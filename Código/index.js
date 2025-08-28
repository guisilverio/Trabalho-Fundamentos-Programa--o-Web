function conteudo(id) {

  document.querySelectorAll('.content').forEach(div => {
    div.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
}

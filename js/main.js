(function () {
  'use strict';
  var root = document.documentElement;

  // menu móvel
  var btn = document.querySelector('[data-menu]');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('aberto');
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('aberto')) { nav.classList.remove('aberto'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    });
  }

  // tema claro/escuro
  var tema = document.querySelector('[data-tema-btn]');
  function atual() {
    var t = root.getAttribute('data-tema');
    return t || (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'escuro' : 'claro');
  }
  function rotular() { if (tema) tema.setAttribute('aria-pressed', String(atual() === 'escuro')); }
  if (tema) {
    tema.addEventListener('click', function () {
      var n = atual() === 'escuro' ? 'claro' : 'escuro';
      root.setAttribute('data-tema', n);
      try { localStorage.setItem('tema', n); } catch (e) {}
      rotular();
    });
    rotular();
  }

  // avisos do formulário (?enviado=1 ou ?erro=1)
  var q = location.search, av = document.getElementById('aviso');
  if (av && /[?&]enviado=1/.test(q)) { av.className = 'aviso aviso--ok'; av.textContent = 'Mensagem enviada. Retornaremos o mais breve possível.'; av.hidden = false; }
  else if (av && /[?&]erro=1/.test(q)) { av.className = 'aviso aviso--erro'; av.textContent = 'Não foi possível enviar. Confira os campos ou chame no WhatsApp.'; av.hidden = false; }
})();

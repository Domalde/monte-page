# Monte Ambiental: site estático

Site HTML/CSS/JS puro (sem build, sem CDN), no estilo "Alagoas Saneamento".

## Publicar no cPanel
1. Gerenciador de Arquivos > `public_html`.
2. Envie todo o conteúdo desta pasta (index.html, about.html, service.html, contact.html, contato.php, .htaccess, robots.txt, css/, js/, fonts/, images/). Ative "Mostrar arquivos ocultos" para ver o `.htaccess`.
3. O formulário usa `contato.php` (função `mail()` do servidor) e envia para `comercial@monteambiental.com`; edite `$para` no arquivo se precisar.
4. O `.htaccess` força HTTPS: ative o SSL (AutoSSL) no cPanel antes de publicar.

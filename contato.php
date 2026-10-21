<?php
// Envio do formulário de contato (cPanel / PHP). Altere $para se necessário.
$para = 'comercial@monteambiental.com';

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !empty($_POST['site'])) {
    header('Location: contact.html'); exit;
}
function limpa($v) { return trim(str_replace(["\r", "\n"], ' ', strip_tags((string)$v))); }

$nome     = limpa($_POST['nome'] ?? '');
$telefone = limpa($_POST['telefone'] ?? '');
$email    = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$mensagem = trim(strip_tags((string)($_POST['mensagem'] ?? '')));

if ($nome === '' || !$email || $mensagem === '') {
    header('Location: contact.html?erro=1'); exit;
}

$host    = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'monteambiental.com');
$assunto = '=?UTF-8?B?' . base64_encode("Contato pelo site: $nome") . '?=';
$corpo   = "Nome: $nome\nTelefone: $telefone\nE-mail: $email\n\nMensagem:\n$mensagem\n";
$cab     = "From: Site Monte Ambiental <nao-responder@$host>\r\n"
         . "Reply-To: $email\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n";

$ok = mail($para, $assunto, $corpo, $cab);
header('Location: contact.html?' . ($ok ? 'enviado=1' : 'erro=1'));

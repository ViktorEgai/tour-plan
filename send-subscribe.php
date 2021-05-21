<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$email = $_POST['email'];


// Формирование самого письма
$subscribe_title = "Запрос на подписку Best Tour plan";
$subscribe_body = "
<h2>Новое письмо</h2>
<b>Электронная почта':</b> $email<br>
<span> хочет подписаться на обновления </span>
";

// Настройки PHPMailer
$subscribe = new PHPMailer\PHPMailer\PHPMailer();
try {
    $subscribe->isSMTP();   
    $subscribe->CharSet = "UTF-8";
    $subscribe->SMTPAuth   = true;
    // $subscribe->SMTPDebug = 2;
    $subscribe->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $subscribe->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $subscribe->Username   = 'egai.viktor94@gmail.com'; // Логин на почте
    $subscribe->Password   = 'jygbdxddpaqmztwn'; // Пароль на почте
    $subscribe->SMTPSecure = 'ssl';
    $subscribe->Port       = 465;
    $subscribe->setFrom('egai.viktor94@gmail.com', 'Best Tour Plan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $subscribe->addAddress('egay.viktor.1994@yandex.ru');      


// Отправка сообщения
$subscribe->isHTML(true);
$subscribe->Subject = $subscribe_title;
$subscribe->Body = $subscribe_body;    

// Проверяем отравленность сообщения
if ($subscribe->send()) {$subscribe_result = "success";} 
else {$subscribe_result = "error";}

} catch (Exception $e) {
    $subscribe_result = "error";
    $subscribe_status = "Сообщение не было отправлено. Причина ошибки: {$subscribe->ErrorInfo}";
}

// Отображение результата
header ('Location: subscribe.html');

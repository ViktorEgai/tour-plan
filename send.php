<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];


if( $email == "" ) {
    // Формирование самого письма
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое обращение</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
    header ('Location: thankyou.html');
} elseif( $email != "" && $name == "" && $phone == "" && $message == "" ){
    $title = "Запрос на подписку Best Tour plan";
    $body = "
    <h2>Новое письмо</h2>
    <b>Электронная почта':</b> $email<br>
    <span> хочет подписаться на обновления </span>
    ";
        // Отображение результата
    header ('Location: subscribe.html');    
} else{
    $title = "Запрос на бронирование номера Best Tour plan";
    $body = "
    <h2>Новое заявка</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Электронная почта':</b> $email<br>
    <b>Сообщение:</b><br>$message
    ";
    header ('Location: booking.html');
};

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'egai.viktor94@gmail.com'; // Логин на почте
    $mail->Password   = 'jygbdxddpaqmztwn'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('egai.viktor94@gmail.com', 'Best Tour Plan'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('egay.viktor.1994@yandex.ru');      


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}










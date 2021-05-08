<?php

$recepient = "andreyweb30@gmail.com";
$siteName = "Ajax-форма";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$country = trim($_POST["country"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $email \ncountry:$country";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
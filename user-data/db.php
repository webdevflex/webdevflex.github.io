<?
include __DIR__.'/conf.php'; // подключение файла конфигурации
try{ // отлавливаем ошибку подключения
	$_connect_=new pdo("mysql:host=$conf->dbhost;dbname=$conf->dbname;","$conf->dblogin","$conf->dbpass"); // создание подключения к базе данных
	$_connect_->exec("set names utf8mb4"); // указание кодировки данных
}catch(exception $error){
	exit("Failed to get: ".$error->getMessage().':'.$error->getLine()); // вывод ошибки подключения к базе данных
}
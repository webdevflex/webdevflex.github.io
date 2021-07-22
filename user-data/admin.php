<?
$username="admin"; // логин для авторизации
$password="admin"; // пароль для авторизации
if(!isset($_SERVER['PHP_AUTH_USER'])||!isset($_SERVER['PHP_AUTH_PW'])||($_SERVER['PHP_AUTH_USER']!=$username)||($_SERVER['PHP_AUTH_PW']!=$password)){ // проверка авторизирован ли пользователь
	header('WWW-Authenticate: Basic realm="Backend"');
	header('HTTP/1.0 401 Unauthorized');
	exit;
}

include __DIR__.'/db.php'; // подключение базыданных
$user_id=$_connect_->prepare("SELECT * FROM user_data"); // запрос в базу данных для получения всех записей в базе
$user_id->execute(); // извлечение следующей строки из результирующего набора

echo"
		<ul class='data-content data-content-title'>
		<li>Имя</li>
		<li>Фамилия</li>
		<li>Телефон</li>
		<li>Email</li>
		</ul>
"; // шапка таблицы
while($rows=$user_id->fetch(PDO::FETCH_BOTH)){ // вывод в цикле всех записей в таблице 
	echo "
			<ul class='data-content data-content-content'>
			
				<li>{$rows['first_name']}</li>
				<li>{$rows['last_name']}</li>
				<li>{$rows['tel']}</li>
				<li>{$rows['email']}</li>
			</ul>
	
	"; // тело таблицы
}
echo''; // конец таблицы
?>


<style type="text/css">
	/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}details,main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}
*{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}body{font-family:Nunito,sans-serif}li{list-style-type:none}h1{text-align:center}.container{max-width:1200px;margin:0 auto}.data-wrapper{height:800px;background-color:#89b6b2}.data-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:20px;position:relative}.data-content li{width:33.3%;text-align:center;font-weight:700;font-size:18px}.data-content::before{content:'';width:100%;background-color:#000;position:absolute;height:2px;top:50px}@media (max-width:680px){.data-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding-left:20px}.data-content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:180px}.data-content-content{width:100%;padding-left:20px}.data-content-content li{text-align:inherit;width:100%}}
	</style>


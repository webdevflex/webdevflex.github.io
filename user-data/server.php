<?
header('Content-Type: application/json'); // определение типа контента
if($_SERVER['REQUEST_METHOD']=='GET')exit; // если get запрос то ничего не делать

include __DIR__.'/db.php'; // подключение файла для подключения к базе данных

function response($b,$d){ // функция для отдачи ответа
	echo json_encode(array(
		'success'=>$b,
		'data'=>$d,
	));
	exit;
}
try{ // отлавливаем ошибку во всем коде

	$first_name=$_POST['first_name']; // post параметр first_name
	$last_name=$_POST['last_name']; // post параметр last_name
	$telephone=$_POST['telephone']; // post параметр telephone
	$email=$_POST['email']; // post параметр email
	$password_one=$_POST['password_one']; // post параметр password_one
	$password_two=$_POST['password_two']; // post параметр password_two

	$user=$_connect_->prepare("SELECT * FROM user_data WHERE email=? ORDER BY 'id'"); // запрос в базу данных чтоб узнать есть ли такой email
	$user->execute([$email]); // передача параметра запроса
	$user_fetch=$user->fetch(); // извлечение следующей строки из результирующего набора
	if($user_fetch!='') // если есть такой email то отдать ошибку
		response(false,'There is such a user.'); // отдаем ответ

	// запрос в базу данных для сохранения данных
	$stmt=$_connect_->prepare("
		INSERT INTO user_data(
			first_name,last_name,tel,email,password	
		)VALUES(
			?,?,?,?,?
		)
	");
	$stmt->execute([$first_name,$last_name,$telephone,$email,$password_one]); // передача параметра запроса
	response(true,'Data saved.'); // отдаем ответ

}catch(Exception $e){ // отдаем ошибку на фронт
	response(false,'Error.'); // отдаем ответ
}
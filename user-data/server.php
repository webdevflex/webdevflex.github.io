<?
header('Content-Type: application/json'); 
if($_SERVER['REQUEST_METHOD']=='GET')exit; 

include __DIR__.'/db.php'; 

function response($b,$d){ 
	echo json_encode(array(
		'success'=>$b,
		'data'=>$d,
	));
	exit;
}
try{ 

	$first_name=$_POST['first_name']; 
	$last_name=$_POST['last_name']; 
	$telephone=$_POST['telephone'];
	$email=$_POST['email']; 
	$password_one=$_POST['password_one']; 
	$password_two=$_POST['password_two'];

	$user=$_connect_->prepare("SELECT * FROM user_data WHERE email=? ORDER BY 'id'"); 
	$user->execute([$email]); 
	$user_fetch=$user->fetch(); 
	if($user_fetch!='') 
		response(false,'There is such a user.'); 

	// запрос в базу данных для сохранения данных
	$stmt=$_connect_->prepare("
		INSERT INTO user_data(
			first_name,last_name,tel,email,password	
		)VALUES(
			?,?,?,?,?
		)
	");
	$stmt->execute([$first_name,$last_name,$telephone,$email,$password_one]); 
	response(true,'Data saved.'); 

}catch(Exception $e){ 
	response(false,'Error.');
}
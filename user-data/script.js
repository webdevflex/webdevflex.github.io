function sendForm(data){ 
	$.post("server.php",data).done(function(res){ 
		if(res.success){ 
			$('.success').html(res.data).css('visibility','visible');
		}else{ 
			$('.error').html(res.data).css('visibility','visible'); 
		}
	});
}
$(function() {
	jQuery('form').submit(function(ev){ 
		var formData=$(this).serializeArray(); 
		$('.success').css('visibility','hidden'); 
		$('.error').css('visibility','hidden'); 

		if($('[name="first_name"]').val()==''||$('[name="last_name"]').val()==''||$('[name="telephone"]').val()==''||$('[name="email"]').val()==''||$('[name="password_one"]').val()==''){ // проверяем все поля на заполненость
			$('.error').html("Fill the form.").css('visibility','visible'); 
			return ev.preventDefault(); 
		}
		if($('[name="telephone"]').val().match(/[^0-9+]/)!=null){ 
			$('.error').html("You entered an invalid telephone.").css('visibility','visible'); 
			return ev.preventDefault();
		}
		if($('[name="email"]').val().indexOf('@')==-1){ 
			$('.error').html("You entered an invalid email.").css('visibility','visible'); 
			return ev.preventDefault(); 
		}
		if($('[name="password_one"]').val()!=$('[name="password_two"]').val()){ 
			$('.error').html("Passwords don't get through.").css('visibility','visible'); 
			return ev.preventDefault(); 
		}
		$('[name="first_name"]').val(''); 
		$('[name="last_name"]').val(''); // очиска формы
		$('[name="telephone"]').val(''); 
		$('[name="email"]').val(''); 
		$('[name="password_one"]').val(''); 
		$('[name="password_two"]').val(''); 
		
		sendForm(formData); // вызов функции отправки данных
		
		ev.preventDefault(); // отменяем отправку формы
		return false; 
	});
});
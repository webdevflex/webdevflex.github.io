function sendForm(data){ // функция отправки запроса на сервер
	$.post("server.php",data).done(function(res){ // запрос на сервер
		if(res.success){ // если ок
			$('.success').html(res.data).css('visibility','visible'); // выводим уведомление
		}else{ // иначе
			$('.error').html(res.data).css('visibility','visible');  // выводим ошибку
		}
	});
}
$(function() {
	jQuery('form').submit(function(ev){ // отлавливаем отправку формы
		var formData=$(this).serializeArray(); // сериализуем данные формы в массив
		$('.success').css('visibility','hidden'); // скрываем блок уведомления
		$('.error').css('visibility','hidden'); // скрываем блок уведомления об ошибке

		if($('[name="first_name"]').val()==''||$('[name="last_name"]').val()==''||$('[name="telephone"]').val()==''||$('[name="email"]').val()==''||$('[name="password_one"]').val()==''){ // проверяем все поля на заполненость
			$('.error').html("Fill the form.").css('visibility','visible'); // выводим ошибку что какое то поле не заполнено
			return ev.preventDefault(); // отменяем отправку формы и выпонение скрипта
		}
		if($('[name="telephone"]').val().match(/[^0-9+]/)!=null){ // проверка поля telephone на валидность
			$('.error').html("You entered an invalid telephone.").css('visibility','visible'); // выводим ошибку что телефон не валидный
			return ev.preventDefault(); // отменяем отправку формы и остановка выпонения скрипта
		}
		if($('[name="email"]').val().indexOf('@')==-1){ // проверка поля email на валидность
			$('.error').html("You entered an invalid email.").css('visibility','visible'); // выводим ошибку что email не валидный
			return ev.preventDefault(); // отменяем отправку формы и остановка выпонения скрипта
		}
		if($('[name="password_one"]').val()!=$('[name="password_two"]').val()){ // проверка поля password_one на валидность
			$('.error').html("Passwords don't get through.").css('visibility','visible'); // выводим ошибку что пароли не совпадают
			return ev.preventDefault(); // отменяем отправку формы и остановка выпонения скрипта
		}
		$('[name="first_name"]').val(''); // очиска формы
		$('[name="last_name"]').val(''); // очиска формы
		$('[name="telephone"]').val(''); // очиска формы
		$('[name="email"]').val(''); // очиска формы
		$('[name="password_one"]').val(''); // очиска формы
		$('[name="password_two"]').val(''); // очиска формы
		
		sendForm(formData); // вызов функции отправки данных
		
		ev.preventDefault(); // отменяем отправку формы
		return false; // остановка выпонения скрипта
	});
});
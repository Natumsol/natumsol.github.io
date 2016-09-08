$(document).ready(function() { 

	$('.selectpicker').selectpicker();

	$('#step1-submit').click(function(event) {
		var name = $('#name').val();
		var sex = $('input[name="sex"]:checked').val();
		var phone = $('#phone').val();
		var verifycode = $('#verifycode').val();
		var identity = $('#identity').val();
		var email = $('#email').val();
		$.ajax({
			url: 'index.html',
			type: 'post',
			data: {
				name: name,
				sex: sex,
				phone: phone,
				verifycode: verifycode,
				identity: identity,
				email: email,
			},
		})
		.done(function() {
			$('img#step-img').attr('src', 'img/step2.png');
			$('span.step2-text').addClass('my-text-blue');
			$('div#step1').addClass('not-visible');
			if (0 == identity) {
				$('div#step2-type1').removeClass('not-visible');
			} else {
				$('div#step2-type2').removeClass('not-visible');
			}
		})
		.fail(function() {
			alert("name : " + name + "\n" + 
				"sex : " + sex + "\n" + 
				"phone : " + phone + "\n" +
				"verifycode : " + verifycode + "\n" + 
				"identity : " + identity + "\n" +
				"email : " + email);
			//测试用，ajax成功后删除
			$('img#step-img').attr('src', 'img/step2.png');
			$('span.step2-text').addClass('my-text-blue');
			$('div#step1').addClass('not-visible');
			if (0 == identity) {
				$('div#step2-type1').removeClass('not-visible');
			} else {
				$('div#step2-type2').removeClass('not-visible');
			}
		});
	});

	$('#step2-submit').click(function(event) {
		var step2 = $(this).parent('div');
		var type = $(step2).attr('id');
		var is_licence_agreed = $('input#licence').get(0).checked;

		if (!is_licence_agreed) {
			alert("请同意条款");
			return;
		}

		var teach_age = $('#teach-age').val();
		var highest_education = $('#highest-education').val();
		if ("step2-type1" == type) {
			var school_name = $('#school-name').val();
			var school_type = $('#school-type').val();
			var teacher_title = $('#teacher-title').val();
			var graduate_school = $('#graduate-school').val();
			var graduate_major = $('#graduate-major').val();
			if (undefined == school_name || "" == school_name) {
				$('#school-name').parent('div').addClass('has-error');
				$('#school-name-error').removeClass('not-visible');
				return;
			}
			$.ajax({
				url: 'index.html',
				type: 'post',
				data: {
					school_type: school_type,
					school_name: school_name,
					teacher_title: teacher_title,
					teach_age: teach_age,
					highest_education: highest_education,
					graduate_school: graduate_school,
					graduate_major: graduate_major,
				},
			})
			.done(function() {
				$('img#step-img').attr('src', 'img/step3.png');
				$('span.step3-text').addClass('my-text-blue');
				$(step2).addClass('not-visible');
				$('div#step3').removeClass('not-visible');
			})
			.fail(function() {
				alert("school_type : " + school_type + "\n" + 
					"school_name : " + school_name + "\n" + 
					"teacher_title : " + teacher_title + "\n" +
					"teach_age : " + teach_age + "\n" + 
					"highest_education : " + highest_education + "\n" +
					"graduate_school : " + graduate_school + "\n" +
					"graduate_major : " + graduate_major);
				//测试用，ajax成功后删除
				$('img#step-img').attr('src', 'img/step3.png');
				$('span.step3-text').addClass('my-text-blue');
				$(step2).addClass('not-visible');
				$('div#step3').removeClass('not-visible');
			});
		} else {
			var at_school_name = $('#at-school-name').val();
			var at_school_major = $('#at-school-major').val();
			$.ajax({
				url: 'index.html',
				type: 'post',
				data: {
					at_school_name: at_school_name,
					at_school_major: at_school_major,
					teach_age: teach_age,
					highest_education: highest_education,
				},
			})
			.done(function() {
				$('img#step-img').attr('src', 'img/step3.png');
				$('span.step3-text').addClass('my-text-blue');
				$(step2).addClass('not-visible');
				$('div#step3').removeClass('not-visible');
			})
			.fail(function() {
				alert("at_school_name : " + at_school_name + "\n" + 
					"at_school_major : " + at_school_major + "\n" +
					"teach_age : " + teach_age + "\n" + 
					"highest_education : " + highest_education);
				//测试用，ajax成功后删除
				$('img#step-img').attr('src', 'img/step3.png');
				$('span.step3-text').addClass('my-text-blue');
				$(step2).addClass('not-visible');
				$('div#step3').removeClass('not-visible');
			});
		}
		
	});

	$('#step3-submit').click(function(event) {
		var identity_name = $('#identity-name').val();
		var identity_code = $('#identity-code').val();
		var identity_photo = $('img.img-identity').attr('src');
		$.ajax({
			url: 'index.html',
			type: 'post',
			data: {
				identity_name: identity_name,
				identity_code: identity_code,
				identity_photo: identity_photo,
			},
		})
		.done(function() {
			$('input#step3-submit').removeClass('btn-primary')
				.addClass('btn-default').val("正在审核");
			$('input#identity-name').attr('disabled', 'disabled');
			$('input#identity-code').attr('disabled', 'disabled');
		})
		.fail(function() {
			alert("identity_name : " + identity_name + "\n" + 
				"identity_code : " + identity_code + "\n" + 
				"identity_photo : " + identity_photo);
			//测试用，ajax成功后删除			
			$('input#step3-submit').removeClass('btn-primary')
				.addClass('btn-default').val("正在审核");
			$('input#identity-name').attr('disabled', 'disabled');
			$('input#identity-code').attr('disabled', 'disabled');
		});
	});

	$('#btn-getcode').click(function(event) {
		//获取验证码
		var btn = $(this);
    	$(btn).attr('disabled', 'disabled');
        $(btn).html("重新获取(60s)");
        var count = 59;
        var countdown = setInterval(countDown, 1000);

        function countDown() {
        	$(btn).attr('disabled', 'disabled');
            $(btn).html("重新获取(" + count + "s)");
            if (count == 0) {
                $(btn).html("获取验证码").removeAttr("disabled");
                clearInterval(countdown);
            }
            count--;
        }
	});

	$('input#school-name').on('input', function(event) {
		if ("" != $(this).val()) {
			$(this).parent('div').removeClass('has-error');
			$('#school-name-error').addClass('not-visible');
		};
	});

	$('img#iphone-dl').hover(function() {
		$(this).attr('src', 'img/iphone-download-select.png');
	}, function() {
		$(this).attr('src', 'img/iphone-download.png');
	});

	$('img#android-dl').hover(function() {
		$(this).attr('src', 'img/android-download-select.png');
	}, function() {
		$(this).attr('src', 'img/android-download.png');
	});

	$('input#identity-photo').click(function(event) {
		var btn = $(this);
		$.ajax({
			url: 'index.html',
			type: 'post',
			data: {
				filepath: 'filepath'
			},
		})
		.done(function() {
			$(btn).addClass('not-visible');
			$('img.img-identity').removeClass('not-visible');
			$('input#licence').parent('label').parent('div').removeClass('not-visible');
			$('input#step3-submit').removeClass('not-visible');
		})
		.fail(function() {
			//测试用，ajac成功后删除
			$(btn).addClass('not-visible');
			$('img.img-identity').removeClass('not-visible');
			$('input#licence').parent('label').parent('div').removeClass('not-visible');
			$('input#step3-submit').removeClass('not-visible');
			console.log("error");
		});
	});

});

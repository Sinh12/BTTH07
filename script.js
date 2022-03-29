function check_length(id, min_length, max_length, message){
	document.getElementById(`${id}`).addEventListener('blur', function(){
		if(this.value.length>0 && (this.value.length < min_length || this.value.length > max_length)){
			this.setCustomValidity(`${message} cần phải có độ dài từ ${min_length} đến ${max_length} kí tự`);
		}
		else{
			this.setCustomValidity("");
		}
	});
}

function check_type(id, value_check, message){
	document.getElementById(`${id}`).addEventListener('blur', function(){
		if(this.value.length>0 && !value_check.test(this.value)){
			this.setCustomValidity(`${message}`);
		}
		else{
			this.setCustomValidity("");
		}
	});
}

let check_alphabates = /^[a-zA-Z]+$/;
let check_numeric = /^[0-9]+$/;
let message_alphabates = 'chỉ được phép chứa các chữ cái a-z hoặc A-Z';
let message_numeric = 'chỉ được phép chứa các số 0-9';

check_length('txtId',5,12,'User id');
check_length('txtPassword',7,12, 'Password');
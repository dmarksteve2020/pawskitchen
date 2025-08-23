function initpaws() {

	$('#addcook').on('click', function() {

	    var form = new FormData();
	    form.append("deviceid", get_finger_print())
	    form.append("source", window.location.host);
	    form.append("cookname", $("cookname").val());
	    form.append("cookemail", $("#cookemail").val());
	    form.append("cookzipcode", $("#cookzipcode").val());
	    form.append("cookphone", $("#cookphone").val());


	    $.ajax({
		url: SERVER + "paw/addcook",
		async: true,
		crossDomain: true,
		method: "POST",
		processData: false,
		contentType: false,
		mimeType: "multipart/form-data",
		data: form,

		success: function (response) {
		    console.log("start session response: ", response);
		},
		error: function (err) {
		    console.log("start error", err)
		},
	    });

	})
}


window.addEventListener('DOMContentLoaded', initpaws, false);

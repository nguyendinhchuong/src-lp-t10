$(document).ready(function () {
  $("#register-promotion").validate({
    rules: {
      name: "required",
      phone: {
        required: true,
        minlength: 9,
        maxlength: 10,
        number: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: "Vui lòng nhập họ tên",
      phone: {
        required: "Vui lòng nhập số điện thoại",
        minlength: "Vui lòng nhập số điện thoại hợp lệ",
        maxlength: "Vui lòng nhập số điện thoại hợp lệ",
        number: "Vui lòng nhập số điện thoại hợp lệ",
      },
      email: {
        required: "Vui lòng nhập email",
        email: "Vui lòng nhập email hợp lệ",
      },
    },
  });
  $("#register-advisory").validate({
    rules: {
      name_advise: "required",
      phone_advise: {
        required: true,
        minlength: 9,
        maxlength: 10,
        number: true,
      },
      email_advise: {
        required: true,
        email: true,
      },
    },
    messages: {
      name_advise: "Vui lòng nhập họ tên",
      phone_advise: {
        required: "Vui lòng nhập số điện thoại",
        minlength: "Vui lòng nhập số điện thoại hợp lệ",
        maxlength: "Vui lòng nhập số điện thoại hợp lệ",
        number: "Vui lòng nhập số điện thoại hợp lệ",
      },
      email_advise: {
        required: "Vui lòng nhập email",
        email: "Vui lòng nhập email hợp lệ",
      },
    },
  });

  $("#register-promotion").submit(function (event) {
    event.preventDefault();
    var isvalid = $("#register-promotion").valid();
    if (isvalid) {
      var data = $("#register-promotion").serializeArray();
      console.log(data);
    }
  });
  $("#register-advisory").submit(function (event) {
    event.preventDefault();
    var isvalid = $("#register-advisory").valid();
    if (isvalid) {
      var data = $("#register-advisory").serializeArray();
      console.log(data);
    }
  });
});

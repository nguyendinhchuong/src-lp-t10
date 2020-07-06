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
  function formatDate(d) {
    return (
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":")
    );
  }
  $("#register-promotion").submit(function (event) {
    url =
      "https://script.google.com/macros/s/AKfycbxmLf15_RKOIK0RnNvThoJ-yUN-Ur9GIK-Sqe9upEiOqzi2_b4/exec";
    var $form = $("#register-promotion");
    event.preventDefault();
    var isvalid = $form.valid();
    if (isvalid) {
      // console.table($form.serializeArray())
      var data = $form.serializeArray();
      var time_stamp = {
        name: "time_stamp",
        value: formatDate(new Date()),
      };
      data.push(time_stamp)
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: data,
        success: function () {
          alert("Submit successfully!");
        },
      });
    }
  });
  $("#register-advisory").submit(function (event) {
    url =
      "https://script.google.com/macros/s/AKfycbwTZEh80QfoH9YRWv4rFKAUh3YnbWaUlLYOGsefiSul8XjTo4y6/exec";
    var $form = $("#register-advisory");
    event.preventDefault();
    var isvalid = $form.valid();
    if (isvalid) {
      var data = $("#register-advisory").serializeArray();
      var time_stamp = {
        name: "time_stamp",
        value: formatDate(new Date()),
      };
      data.push(time_stamp)
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: data,
        success: function () {
          alert("Submit successfully!");
        },
      });
    }
  });
});

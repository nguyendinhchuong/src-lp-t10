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
      "https://script.google.com/macros/s/AKfycbwmTxkpFEGa6aMkqYy576kf0RwIJL4dnilxIeQ-8CXF5n5Kj_0/exec";
    var $form = $("#register-promotion");
    event.preventDefault();
    var isvalid = $form.valid();
    if (isvalid) {
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
        success: function (res) {
          if(res.result === "error"){
            alert("Submit error!")
          }else {
            $('#successModal').modal({
              show: true
            })
          }
        },
      });
    }
  });
  $("#register-advisory").submit(function (event) {
    url = 
      "https://script.google.com/macros/s/AKfycbwpvtJ5OemnR470A5Jd77GNAw8IPsCUyLg53FyoY4reVSHYTbKT/exec";
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
        success: function (res) {
          if(res.result === "error"){
            alert("Submit error!")
          }else {
            $('#successModal').modal({
              show: true
            })
          }
        },
      });
    }
  });
});

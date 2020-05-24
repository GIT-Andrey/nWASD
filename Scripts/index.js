let logFlag = 0;
let eyeFlag = 0;

$('span').click(function () {
    eyeFlag = 0;
    $('.fas').addClass("fa-eye-slash");
    $('.fas').removeClass("fa-eye");
    document.getElementById("pass1").type = "password";
    document.getElementById("pass2").type = "password";
    if (logFlag) {
        logFlag = 0;
        $("#reg").addClass("login-block_none");
        $("#log").removeClass("login-block_none");
    } else {
        logFlag = 1;
        $("#log").addClass("login-block_none");
        $("#reg").removeClass("login-block_none");
    }
});

$('.fas').click(function () {
    if (eyeFlag) {
        eyeFlag = 0;
        $('.fas').addClass("fa-eye-slash");
        $('.fas').removeClass("fa-eye");
        document.getElementById("pass1").type = "password";
        document.getElementById("pass2").type = "password";
    } else {
        eyeFlag = 1;
        $('.fas').addClass("fa-eye");
        $('.fas').removeClass("fa-eye-slash");
        document.getElementById("pass1").type = "text";
        document.getElementById("pass2").type = "text";
    }
})


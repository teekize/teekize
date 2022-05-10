$(function() {
    $('form#contact_form').submit(function(e) {
        e.preventDefault();
        $('form#contact_form .error').remove();
        var hasError = false;
        var $email = $('form input[name="email');
        var $name = $('form input[name="name');
        var $message = $('form textarea[name="message');
        var re = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if ($email.val() == '' || !re.test($email.val())){
            $('#email').parent().append('<span class="error">Please provide valid Email.</span>');
            $('#email').addClass('inputError');
            hasError = true;
        }

        if($name.val() == '') {
            $('#name').parent().append('<span class="error">Please provide Your name.</span>');
            $('#name').addClass('inputError');
            hasError = true;
        }

        if($message.val() == '') {
            $('#message').parent().append('<span class="error">Please enter details About Project.</span>');
            $('#message').addClass('inputError');
            hasError = true;
        }

        if(!hasError) {

            var chat_id = '-1001596962975';
            var token = '1283891993:AAGa9NV3ntsmIRj89yHSGCb-znW5WUhpJio';
            var mes = $message.val();
            var sender = $name.val();
            var sender_mail = $email.val();

            var message = `From Bileonaire Website Sender - ${sender} || sender's email - ${sender_mail} || Message - ${mes} `;

            var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=html`;

            var oReq = new XMLHttpRequest();
            oReq.open("GET", url, true);
            oReq.onreadystatechange = function () {
                console.log(oReq.status);
                // In local files, status is 0 upon success in Mozilla Firefox
                if(oReq.readyState === XMLHttpRequest.DONE) {
                    var status = oReq.status;
                    if (status === 0 || (status >= 200 && status < 400)) {
                    // The request has been completed successfully
                        alert("Message sent");
                    } else {
                    // Oh no! There has been an error with the request!
                    alert("Message sent");
                    }
                }
                };
            oReq.send();
        }
        return false;
    });
});

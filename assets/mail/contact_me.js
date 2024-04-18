$(function () {
    $(
        "#contactForm input,#contactForm textarea,#contactForm button"
    ).jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // prevent default submit behaviour

            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();

            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(" ") >= 0) {
                firstName = name.split(" ").slice(0, -1).join(" ");
            }

            $this = $("#sendMessageButton");
            $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages

            var successMessage = function () {
                // Success message
                $("#success").html("<div class='alert alert-success'>");
                $("#success > .alert-success")
                    .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                    )
                    .append("</button>");
                $("#success > .alert-success").append(
                    "<strong>Your message has been sent. </strong>"
                );
                $("#success > .alert-success").append("</div>");
                //clear all fields
                $("#contactForm").trigger("reset");
            };

            var errorMessage = function () {
                // Fail message
                $("#success").html("<div class='alert alert-danger'>");
                $("#success > .alert-danger")
                    .html(
                        "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
                    )
                    .append("</button>");
                $("#success > .alert-danger").append(
                    $("<strong>").text(
                        "Sorry " +
                        firstName +
                        ", it seems that my mail server is not responding. Please try again later!"
                    )
                );
                $("#success > .alert-danger").append("</div>");
                //clear all fields
                // $("#contactForm").trigger("reset");
            }

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;

                if (xhr.status === 200) {
                    successMessage();
                } else {
                    errorMessage();
                }

                setTimeout(function () {
                    $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                }, 1000);
            };
            xhr.open($form.get(0).method, $form.get(0).action, true);
            xhr.responseType = 'text';
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send(new FormData($form.get(0)));

            // $.ajax({
            //     url: $form.get(0).action,
            //     type: $form.get(0).method,
            //     data: {
            //         name: name,
            //         phone: phone,
            //         email: email,
            //         message: message,
            //     },
            //     dataType: 'json',
            //     success: function () {
            //         successMessage();
            //     },
            //     error: function () {
            //         errorMessage();
            //     },
            //     complete: function () {
            //         setTimeout(function () {
            //             $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
            //         }, 1000);
            //     },
            // });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
    $("#success").html("");
});

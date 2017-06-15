$(document).ready(function () {
    //stat notificcaion
    $('.tap-target').tapTarget('open');
    //form append
    //responsive slide navigation
    $(".button-collapse").sideNav();
    //drop down menus
    $(".dropdown-button").dropdown();
    Materialize.updateTextFields();

    $("#edit_data_btn").click(function () {
        var user_name = $(this).closest(".avatar").find(".user_name_list").text(),
            email = $(this).closest(".avatar").find(".user_mail_list").text(),
            phone_number = $(this).closest(".avatar").find(".user_phone_list").text(),
            locaion = $(this).closest(".avatar").find(".user_locaion_list").text(),
            date = $(this).closest(".avatar").find(".user_date_list").text(),
            company = $(this).closest(".avatar").find(".user_company_list").text(),
            other = $(this).closest(".avatar").find(".user_other_list").text(),
            image = $(this).closest(".avatar").find(".user_image_list img").attr('src');


        $("#modal3").find(".user_name_edit").val(user_name);
        $("#modal3").find(".user_phone_edit").val(phone_number);
        $("#modal3").find(".user_date_edit").val(date);
        $("#modal3").find(".user_mail_edit").val(email);
        $("#modal3").find(".user_company_edit").val(company);
        $("#modal3").find(".user_locaion_edit").val(locaion);
        $("#modal3").find(".user_other_edit").val(other);
        $("#modal3").find(".user_image_edit").attr("src", image);
    });
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '40%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
    });

});


//Handle change in the image input

function showImage(event) {

    readURL($(event.target)[0]);
}

//Read the image file and display it to the user

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#uploadedImage').fadeIn();
            $('#uploadedImage').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

//Open the file input when click on upload

function clickOnFileInput() {

    $('input[name=image]').click();
}

//Post a new contact to the server

function addContact(e) {

    e.preventDefault();

    var form = document.forms.addContact;

    var formData = new FormData();

    formData.append('_token',form._token.value);
    formData.append('name',form.name.value);
    formData.append('email',form.email.value);
    formData.append('phone',form.phone.value);
    formData.append('address',form.address.value);
    formData.append('image',form.image.files[0]);
    formData.append('company',form.company.value);
    formData.append('birthday',form.birthday.value);

    $.ajax({


        url:form.getAttribute('action'),
        data: formData,
        method:'POST',
        processData: false,
        contentType: false,
        success:function (res) {
            form.reset();
            $(form).find('#uploadedImage').fadeOut();
            $('#modal1').modal('close');
            $('#contactsList').prepend(res);
            Materialize.toast('Your contact has been added',1000);
        },
        error:function (xhr,status,error) {

            Materialize.toast((xhr.responseJSON.email) ? xhr.responseJSON.email : error ,4000);
        }

    });

}
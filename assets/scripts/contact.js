function addContactQuery() {
    if (processForm())
        $.ajax({
            type: 'post',
            url: 'functions/add-query.php',
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            success: function (data) {
                showStatusMessage('success');
                processingForm = false;
                clearForm();
            }
        });
}

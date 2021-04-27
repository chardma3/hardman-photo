window.onload = function () {
    document.getElementById('hp_contact_template').addEventListener('submit', function (event) {
        event.preventDefault();
        const form = document.getElementById('bs');
        emailjs.sendForm('hp_id', 'hp', this)
            .then(function () {
                console.log('SUCCESS!');
                form.reset();
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}
window.onload = function() {
    document.getElementById('hp').addEventListener('submit', function(event) {
        event.preventDefault();
        const form = document.getElementById('hp');
        emailjs.sendForm('hp_id', 'hp', this)
            .then(function() {
                console.log('SUCCESS!');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
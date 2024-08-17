emailjs.init('n0UUYkJ_Cl_V3UpDu'); // Initialize EmailJS with your user ID

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const btn = document.getElementById('button');
    btn.value = 'Sending...'; // Change button text to indicate sending

    const serviceID = 'service_ysviq7m'; // Your Service ID
    const templateID = 'template_gttgo2o'; // Your Template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email'; // Reset button text
            alert('Sent!'); // Notify user of success
        }, (err) => {
            btn.value = 'Send Email'; // Reset button text
            alert('Failed to send email: ' + JSON.stringify(err)); // Notify user of error
        });
});

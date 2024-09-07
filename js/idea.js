emailjs.init('n0UUYkJ_Cl_V3UpDu');
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const btn = document.getElementById('button');
    btn.value = 'Sending...'; 
    const serviceID = 'service_ysviq7m'; 
    const templateID = 'template_gttgo2o'; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Submit'; 
            alert('Sent!'); 
        }, (err) => {
            btn.value = 'Submit'; 
            alert('Failed to send email: ' + JSON.stringify(err)); 
        });
});

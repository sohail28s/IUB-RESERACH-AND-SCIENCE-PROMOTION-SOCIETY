const copyButtons = document.querySelectorAll('.copyButton');
copyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const linkToCopy = button.getAttribute('data-link');
        navigator.clipboard.writeText(linkToCopy)
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});

                    
                  



            
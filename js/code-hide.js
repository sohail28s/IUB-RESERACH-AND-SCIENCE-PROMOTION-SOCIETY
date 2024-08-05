function showAlert(message) {
    alert(message);
}


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showAlert('Right-click is disabled on this page.');
}, false);


document.addEventListener('keydown', function(e) {
    
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        showAlert('Developer Tools access is disabled on this page.');
    }

   
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        showAlert('Viewing page source is disabled on this page');
    }

});

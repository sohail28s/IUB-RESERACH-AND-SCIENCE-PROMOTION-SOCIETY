// // function showAlert(message) {
// //     alert(message);
// // }


// // document.addEventListener('contextmenu', function(e) {
// //     e.preventDefault();
// //     showAlert('Right-click is disabled on this page.');
// // }, false);


// // document.addEventListener('keydown', function(e) {
    
// //     if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
// //         e.preventDefault();
// //         showAlert('Developer Tools access is disabled on this page.');
// //     }

   
// //     if (e.ctrlKey && e.key === 'u') {
// //         e.preventDefault();
// //         showAlert('Viewing page source is disabled on this page');
// //     }

// // });
// // Function to display an alert message
// function showAlert(message) {
//     alert(message);
// }

// // Disable right-click context menu and show a message
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
//     showAlert('Right-click is disabled on this page.');
// }, false);

// // Disable common keyboard shortcuts and show a message
// document.addEventListener('keydown', function(e) {
//     // Disable F12
//     if (e.key === 'F12') {
//         e.preventDefault();
//         showAlert('Developer Tools access is disabled on this page.');
//     }

//     // Disable Ctrl+Shift+I and Ctrl+Shift+J
//     if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.shiftKey && e.key === 'J')) {
//         e.preventDefault();
//         showAlert('Developer Tools access is disabled on this page.');
//     }

//     // Disable Ctrl+U
//     if (e.ctrlKey && e.key === 'u') {
//         e.preventDefault();
//         showAlert('Viewing page source is disabled on this page.');
//     }

//     // Disable Ctrl+P
//     if (e.ctrlKey && e.key === 'p') {
//         e.preventDefault();
//         showAlert('Printing page source is disabled on this page.');
//     }

//     // Disable Ctrl+Shift+C
//     if (e.ctrlKey && e.shiftKey && e.key === 'C') {
//         e.preventDefault();
//         showAlert('Inspect Element is disabled on this page.');
//     }

//     // Disable Cmd+Option+I and Cmd+Option+J
//     if ((e.metaKey && e.altKey && e.key === 'I') || (e.metaKey && e.altKey && e.key === 'J')) {
//         e.preventDefault();
//         showAlert('Developer Tools access is disabled on this page.');
//     }

//     // Disable Cmd+Option+U
//     if (e.metaKey && e.altKey && e.key === 'U') {
//         e.preventDefault();
//         showAlert('Viewing page source is disabled on this page.');
//     }
// });





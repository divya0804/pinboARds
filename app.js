// accepting button from html
const button = document.getElementById('share');

// adding an event listener to the button
button.addEventListener('click', e => {

    e.preventDefault();


    if(navigator.share){
         const data = {
             title: 'Knock Knock',
             text: ' A friend wants to split and pay',
             url: 'https://google.com'
         };
           //invoking the navigator.share() method of the webshare API
         navigator.share(data)
         .then(() => {
              alert('Split Shared')
              //success message
         })
         .catch(e => {
            alert(e)
        //error message
         })
    }
})

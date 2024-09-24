'use strict';


const switcher = document.querySelector('.btn');


switcher.addEventListener('click', function() {

    document.body.classList.toggle('light-theme');

    document.body.classList.toggle('dark-theme');


    const className = document.body.className; /* Document = index.html bzw. jede datei, in welcher dieser code instanziert ist */

    if(className == "light-theme") {

        this.textContent = "Dark";

    } else {

        this.textContent = "Light";

    }

    console.log('aktueller Klassenname: ' + className);

});
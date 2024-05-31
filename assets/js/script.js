$(document).ready(function () {

    $(function() {      
        let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

        if (isMobile) {
            console.log('Mobile HERE');
        }
        else {
            console.log('Desktop HERE');
        }
    });
    

});
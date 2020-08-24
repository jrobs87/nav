document.addEventListener("DOMContentLoaded", function(){
   
    var config = {
        basic: "basic",
        custom: "custom",
        modern: "modern"
    }

    function nav() {
        // Set our variables
        var navBar = document.getElementById('nav--bar');
        var navButton = document.getElementById('nav--button');
        var navLinks =  document.getElementById('nav--links');
        var navLogo =  document.getElementById('nav--logo');
        var content =  document.getElementById('content');


        function toggleNav() {
            navBar.classList.toggle('is-active');
            navLinks.classList.toggle('is-active');
            content.classList.toggle('is-active');
        }
        // Add the menu button event listener
        navButton.addEventListener('click', function() {
          toggleNav()
        });    

        navButton.addEventListener('keypress', function() {
            toggleNav()
        })
        // Initially hide the nav links
        // navLinks.classList.add('is-hidden');
    }

    nav();



    // Out transition
   var a = document.querySelectorAll('a');
   a.forEach(i => {
       i.addEventListener('click', (e) => {
           e.preventDefault();
           console.log(e.target);

            if(e.target != document.getElementById('nav--button')) {
                // console.log('not nav - redirect');
                document.querySelector('.content').style.opacity = 0;
                document.getElementById('nav--bar').classList.add('is-exiting');
                document.getElementById('nav--list').classList.add('is-exiting')
                   setTimeout(() => {
                    // alert(e.target.href);
                        window.location.href = e.target.href
                   },700)
            }

        
       })
   })
    
  });
  
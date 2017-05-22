function main() {
    (function () {
        'use strict';

        /* ScrollReveal */
        window.sr = ScrollReveal();
            // sr.reveal('.reveal-sectiontitle', {duration: 700,
            //                       distance: '0px',
            //                       opacity: 0,
            //                       scale: 0.50,
            //                       viewFactor: 0.90,
            //                       reset: true,
            //                       easing: 'linear' });

            // sr.reveal('.reveal-title', {duration: 600,
            //                       distance: '100px',
            //                       origin: 'right',
            //                       delay: 200,
            //                       opacity: 0,
            //                       viewFactor: 0.9,
            //                       reset: true,
            //                       easing: 'linear' });

             sr.reveal('.reveal-title', {duration: 1000,
                                  distance: '1px',
                                  origin: 'down',
                                  delay: 200,
                                  opacity: 0,
                                  reset: true,
                                  easing: 'linear' });

            sr.reveal('.reveal-content', {duration: 1500,
                                  distance: '10px',
                                  origin: 'bottom',
                                  opacity: 0,
                                  scale: 0.99,
                                  reset: true,
                                  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' });
      
      
            sr.reveal('.reveal-icons', {duration: 500,
                                  distance: '50px',
                                  origin: 'bottom',
                                  scale: 0,
                                  delay: 400,
                                  reset: true,
                                  easing: 'linear' });

            sr.reveal('.reveal-nav', {duration: 500,
                                  distance: '50px',
                                  origin: 'top',
                                  scale: 0,
                                  delay: 400,
                                  reset: false,
                                  easing: 'linear' });

            sr.reveal('.reveal-tagline', {duration: 900,
                                  distance: '60px',
                                  origin: 'top',
                                  scale: 0,
                                  delay: 2700,
                                  reset: true,
                                  easing: 'ease-out' });

            sr.reveal('.reveal-tagline2', {duration: 2000,
                                  distance: '0px',
                                  // origin: 'top',
                                  scale: 0,
                                  delay: 100,
                                  reset: true,
                                  easing: 'ease-out' });

            sr.reveal('.reveal-button-left', {duration: 1100,
                                  distance: '50px',
                                  origin: 'left',
                                  opacity: 0,
                                  scale: 0,
                                  delay: 3000,
                                  reset: true,
                                  easing: 'ease-out' });

            sr.reveal('.reveal-button-right', {duration: 1100,
                                  distance: '50px',
                                  origin: 'right',
                                  opacity: 0,
                                  scale: 0,
                                  reset: true,
                                  delay: 3000,
                                  easing: 'ease-out' });

            sr.reveal('.reveal-down', {duration: 700,
                                distance: '10px',
                                origin: 'top',
                                scale: 0,
                                delay: 100,
                                reset: true,
                                easing: 'ease-out' });

            sr.reveal('.reveal-up', {duration: 1200,
                                distance: '30px',
                                origin: 'bottom',
                                scale: 0,
                                delay: 1000,
                                reset: true,
                                easing: 'ease-out' });

            sr.reveal('.reveal-from', {duration: 1200,
                                distance: '0px',
                                origin: 'bottom',
                                scale: 0.99,
                                delay: 1200,
                                reset: true,
                                easing: 'ease-out' });

    }());
}

main();
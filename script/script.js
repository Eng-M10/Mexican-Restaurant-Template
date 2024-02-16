/**Hint
 * 1 - scrool smoth (X) [DONE]
 * 2 - Button entrance ()
 * 3 - Sounds ()
 * 4 - Navigation (x) [DONE]
 * 5 - Text Animation ()
 */

const removeEffect = (links , element) =>{

    links.forEach((link) => {
        link.parentElement.classList.remove('actived-link');
    });
    
    element.parentElement.classList.add('actived-link');

}



function smoothScrollNavigation(){
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            const identifier = e.currentTarget.getAttribute('href');
            
            e.preventDefault();
            const target = document.querySelector(identifier);

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            removeEffect(links , e.currentTarget);
        });
    });
}


function fixeMenuBar() {
    
    window.addEventListener('scroll', (e)=> {

        const header = document.querySelector('header');
        const currentScrool = window.scrollY;
    
        if(currentScrool >= 100) {
            header.classList.add("fixedbar");
        }
        else {
            header.classList.remove('fixedbar');
        }
    
    });

}

console.clear()
fixeMenuBar()
smoothScrollNavigation()


/**Hint
 * 1 - scrool smoth (X) [DONE]
 * 2 - Button entrance ()
 * 3 - Sounds ()
 * 4 - Navigation (x) [DONE]
 * 5 - Text Animation ()
 */

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
        });
    });
}


function fixeMenuBar() {
    
    window.addEventListener('scroll', (e)=> {

        const header = document.querySelector('header');
        const currentScrool = window.scrollY;
    
        if(currentScrool >= 107) {
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


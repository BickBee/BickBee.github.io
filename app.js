const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    //Button click active class
    for(let i = 0; i < sectBtn.length; ++i){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Active Class
    allSections.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        if(id){
            // remove selected from the other btn
            sectBtn.forEach((btn) => {
                btn.classList.remove('active')
            })
            event.target.classList.add('active')

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

    // Remove Form Input
    // const formbtn = document.getElementById('submit-btn');
    // formbtn.addEventListener('click', () =>{
    //     let name = document.getElementById('name');
    //     let email = document.getElementById('email');
    //     let subject = document.getElementById('subject');
    //     let message = document.getElementById('message');

    //     form = {
    //         name: name.value,
    //         email: email.value,
    //         subject: subject.value,
    //         message: message.value
    //     };
    //     form.submit();

    //     name.value = '';
    //     email.value = '';
    //     subject.value = '';
    //     message.value = '';
    // })
    // const form = document.querySelector('.contact-form');
    // form.addEventListener('submit', (event) => {
    //     this.submit();
    //     event.preventDefault();
    //     form.reset();
    // })
}

PageTransitions();
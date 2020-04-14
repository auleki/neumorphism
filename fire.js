const mode = document.querySelector('.mode');
const switchBtn = document.querySelector('#switch');
        const bodyEl = document.querySelector('body');
        let body = {
            "el": bodyEl,
            "dark": false
        }

        switchBtn.addEventListener('click', () => {
            if(body.dark === false) {
                body.dark = true;
                body.el.className = 'dark';
                mode.textContent = 'Dark Mode';
            } else {
                body.dark = false;
                body.el.className = 'light';
                mode.textContent = 'Light Mode';
            }
        });
        const btns = document.querySelectorAll('li > button');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
            })
        });
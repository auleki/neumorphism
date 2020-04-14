const mode = document.querySelector('.mode');
        const bodyEl = document.querySelector('body');
        let body = {
            "el": bodyEl,
            "dark": false
        }

        mode.addEventListener('click', () => {
            if(body.dark === false) {
                body.dark = true;
                body.el.className = 'dark';
                mode.textContent = 'light';
            } else {
                body.dark = false;
                body.el.className = 'light';
                mode.textContent = 'dark';
            }
        });
        const btns = document.querySelectorAll('li > button');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
            })
        });
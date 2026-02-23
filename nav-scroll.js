(function(){
    let lastScroll = 0;
    let ticking = false;
    const nav = document.querySelector('.nav-container');
    if (!nav) return;

    function onScroll() {
        const current = window.pageYOffset || document.documentElement.scrollTop;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // only hide when user scrolled at least a little and is moving down
                if (current > lastScroll && current > 50) {
                    nav.classList.add('nav-hidden');
                } else {
                    nav.classList.remove('nav-hidden');
                }
                lastScroll = Math.max(0, current);
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
})();

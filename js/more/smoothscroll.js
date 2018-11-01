$(document).ready(() => {
    $("a").click((event) => {
        if (this.hash) {
            event.preventDefault();
            let hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, () => {
                window.location.hash = hash;
            });
        }

    });
});
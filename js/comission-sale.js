var animate_timeline = new Animate({
    target: '[animate-timeline]',
    offset: [0.5, 0.5],
    animatedClass: [''],
    delay: 0,
    callbackOnInView: () => {
        for (let i = 1; i <= 3; i++) {
            setTimeout(function (e) {
                $('.timeline-' + i).addClass('js-animated');
            }, 1000 * (i - 1))
        }
    }
});
animate_timeline.init();

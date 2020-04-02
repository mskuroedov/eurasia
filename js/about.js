let partners_slider = $('.partners-slider');
partners_slider.owlCarousel({
    dots: false,
    margin: 2,
    responsive: {
        0: {
            items: 2.7,
            autoWidth: true,
        },
        800: {
            items: 4.9,
            autoWidth: true,
            loop: true
        },
        1200: {
            items: 5,
            slideBy: 5,
            loop: true,
            nav: true,
            navText: [
                '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="white"/></svg>',
                '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="white"/></svg>'],
        },
    }
})

let team_slider = $('.team-slider');
team_slider.owlCarousel({
    dots: false,
    responsive: {
        0: {
            margin: 35,
            autoWidth: true,
        },
        800: {
            margin: 30,
            autoWidth: true,
        },
        1200: {
            margin: 45,
            autoWidth: true,
            slideBy: 3,
            nav: true,
            navText: [
                '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="white"/></svg>',
                '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="white"/></svg>'],
        },
    }
})
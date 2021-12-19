$(document).ready(() => {
    /**
     * SLICK
     */
    $('.popular').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.hero__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: false,
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * FILE INPUT
     */
    $('input[type=file] ~ label').on('click', (e) => {
        $(e.target).siblings('input').trigger('click');
    });

    $('input[type="file"]').on('change', (e) => {
        let input = $(e.target);
        let container = input.parents('form');
        let name = e.currentTarget.files[0].name;

        if (!name) {
            return;
        }

        container.find(('.form__file-name')).text(name);
        container.find('.btn__delete-file').css('display', 'inline-block');
    });

    $('.btn__delete-file').on('click', (e) => {
        let parent = $(e.target).parents('form');

        parent.find('input[type="file"]').val(null);
        parent.find('.form__file-name').text('');
        parent.find('.btn__delete-file').css('display', 'none');
    });
});

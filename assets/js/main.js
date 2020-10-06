
$(document).ready(function () {
    if (typeof Cookies.get('visited') === 'undefined') {
        Cookies.set('visited', 0, { expires: 1 });
    }
    if (parseInt(Cookies.get('visited')) == 0) {
        setTimeout(function () {
            $('#modalRDLiveDaily').modal('show');
            $(':input', '#modalRDLiveDaily')
                .not(':button, :submit, :reset, :hidden')
                .val('')
                .removeAttr('checked')
                .removeAttr('selected');
            setTimeout(function () {
                $('#modalRDLiveDaily .close').show();
            }, 5500);
        }, 500);
    }
});






$('#modalVideosAnteriores').on('show.bs.modal', function (event) {
    $(this).find('.modal-title').text($(event.relatedTarget).data('title'));
    $(this).find('iframe').attr("src", $(event.relatedTarget).data('url'));
});

$('#modalVideosAnteriores').on('hidden.bs.modal', function (e) {
    $(this).find('iframe').attr("src", "");
    $(this).find('.modal-title').text('').data('title');
});





// SCROLL HEADER
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 77) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});
// end 





// SEND FORM
$(window).on('load', function (e) {




    $('#modalRDLiveDaily #rd-email_field-kfvz78f5').blur(function () {
        if (!$(this).val()) {

            $('#modalRDLiveDaily .rd-button').dblclick(function () {
                $('#modalRDLiveDaily').modal('hide');
            });

        }
    });






    $('.bricks-form form').submit(function (e) {
        e.preventDefault();
        // Coding
        $('#modalSolucoes').modal('hide');
        $('#modalRDLiveDaily').modal('hide');

        $(':input', '#modalRDLiveDaily')
            .not(':button, :submit, :reset, :hidden')
            .val('')
            .removeAttr('checked')
            .removeAttr('selected');

        //seta cookie como lido
        Cookies.set('visited', 1, { expires: 1 });

        return false;
    });
})







// // Javascript to enable link to tab
// var url = document.location.toString();
// if (url.match('#')) {
//     $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
// }

// // Change hash for page-reload
// $('.nav-tabs a').on('shown.bs.tab', function (e) {
//     window.location.hash = e.target.hash;
// })










// PARTICLES
tsParticles.load("tsparticles", {
    fps_limit: 60,
    background: {
        color: "#2B3134"
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onDiv: [
                {
                    enable: true,
                    selectors: ".bounce",
                    mode: "repulse",
                    type: "circle"
                }
            ],
            resize: true
        },

    },
    particles: {
        color: {
            value: "#2DAD71"
        },
        line_linked: {
            color: "#33584c",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
        },
        move: {
            gravity: {
                enable: true
            },
            bounce: false,
            enable: true,
            random: false,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 120
        },
        opacity: {
            anim: {
                enable: true,
                opacity_min: 0.1,
                speed: 1,
                sync: false
            },
            random: false,
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            anim: {
                enable: false,
                size_min: 0.1,
                speed: 40,
                sync: true
            },
            random: false,
            value: 2
        }
    },
    polygon: {
        draw: {
            enable: false,
            lineColor: "#27483D",
            lineWidth: 0.5
        },
        move: {
            radius: 10
        },
        scale: 1,
        type: "none",
        url: ""
    },
    retina_detect: true,

});
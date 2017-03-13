//slider
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 20000000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

var playing = false;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = false;
    slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
    if (playing) {
        pauseSlideshow();
    } else {
        playSlideshow();
    }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function () {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function () {
    pauseSlideshow();
    previousSlide();
};

//scroll
$(document).ready(function(){
    $("#hiBlock").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#side-panel").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#side-panel").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//hidden blocks
$('.toggle-block').click(function () {
    if ($('#hiddenStory').is(':visible')) {
        $('#hiddenStory').css({"display": "flex"}).hide('slow');
        $(this).html('Прочитать историю')
    }
    else {
        $('#hiddenStory').show('slow');
        $(this).html('Свернуть историю')
    }
});

$('#toggle-block-1').click(function () {
    if ($('#howToBegin').is(':visible')) {
        $('#howToBegin').css({"display": "flex"}).hide('slow');
    }
    else {
        $('#howToBegin').show('slow');
        $('#whatIsBinary').hide('slow');
        $('#comments').hide('slow');
    }
});

$(document).ready(function() {
    $("a.show-block").click(function() {
        $($(this).attr('href')).toggle('slow');
        return false;
    });
});

$('#toggle-block-2').click(function () {
    if ($('#whatIsBinary').is(':visible')) {
        $('#whatIsBinary').css({"display": "flex"}).hide('slow');
    }
    else {
        $('#whatIsBinary').show('slow');
        $('#howToBegin').hide('slow');
        $('#comments').hide('slow');
    }
});

$('#toggle-block-3').click(function () {
    if ($('#comments').is(':visible')) {
        $('#comments').css({"display": "flex"}).hide('slow');
    }
    else {
        $('#comments').show('slow');
        $('#howToBegin').hide('slow');
        $('#whatIsBinary').hide('slow');
    }
});
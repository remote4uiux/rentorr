//Modal On Modal
$(document).ready(function(){
  $(".LoginModal").click( function() {  // opening on same line K&R style
    $('#signup-popup').modal('hide');
    $('#signin-popup').modal('show');
  });
  $(".SignModal").click( function() {  // opening on same line K&R style
    $('#signup-popup').modal('show');
    $('#signin-popup').modal('hide');
  });
    $(".btn-forgetpassword").click( function() {  // opening on same line K&R style
    $('#pwdModal').modal('show');
    $('#signin-popup').modal('hide');
  });
   
});    

$(document).ready(function(){
  $(".LoginModal").click( function() {
    $('body').addClass('custom-modal');
  });
  $(".SignModal").click( function() {
    $('body').addClass('custom-modal');
  });
   $(".btn-forgetpassword").click( function() {
    $('body').addClass('custom-modal');
  });
 
});    

           
         
/***********google map API********/
function initMap() {
  var uluru = {lat: 30.7097272, lng: 76.7053227};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

var search =
[
    {

        "label": "Cape Town, Western Cape",

    },
    {

        "label": "Johannesburg, Gauteng",

    },
    {

        "label": "Durban, KwaZulu-Natal",

    },
    {

        "label": "Pretoria, Gauteng",

    },
    {

        "label": "Cape Town, Wesvmnvvvttern Cape",

    },
    {
    "label": "Cape Town, Wesvmnvvvttern Cape"
    }
];

$(function () {
  $('#field').autocompleter({
        // marker for autocomplete matches
        highlightMatches: true,

        // object to local or url to remote search
        source: search,

        // show hint
        hint: true,

        // abort source if empty field
        empty: false,

        // max results
        limit: 4,

        callback: function (value, index, selected) {
            if (selected) {
                $('.icon').css('background-color', selected.hex);
            }
        }
    });
});


$(document).on('click', '#closeIcon', function() {
    //do stuff
      $('.navbar-collapse').toggleClass('show');
});

$( document ).ready(function() {
   $(".hide-link").click(function(){
      $(".filter-alert").hide();
  });
  $(".filter-btn").click(function(){

     $(".filter-data").toggleClass('open');
     $(".custom-scroll").toggleClass('mob-none');
     if ($(this).text() == "Filters")
            $(this).text("Cancel")
         else
            $(this).text("Filters");
 });

 $("#mapView").click(function(){
    $(".map-switch").toggleClass('mob-block');
    $(".mobile-hide").toggleClass('mob-none');
 });


 $(".toggle-view").click(function(){
    $(".left-panel").toggleClass('auto-height');
    $(".custom-scroll").toggleClass('mob-none');
    if ($('.valueGet').text() == "Map View"){
           $(this).html("<i class='fa fa-list-ul'></i> <span class='valueGet'>List View</span>");
           }
        else if ($('.valueGet').text() == "List View"){
           $(this).html("<i class='fa fa-map-marker'></i> <span class='valueGet'>Map View</span>");
           }
 });

 $('#searchResult').bind('focus', function(){
     $('.filter-data').toggleClass('open');
 });

});



//On Scroll Fixed header
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 20) {
        $("#header").addClass("fixed-header");
    } else {
        $("#header").removeClass("fixed-header");
    }
});

//Range slider
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 10000,
    values: [ 950, 9600 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "R" + ui.values[ 0 ] + " - R" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "R" + $( "#slider-range" ).slider( "values", 0 ) +
    " - R" + $( "#slider-range" ).slider( "values", 1 ) );
} );

//OnToggle add class on body
$( document ).ready(function() {
$('#filter-hidden').click(function() {
    if($('body').hasClass('hidden-scroll')) {
        $('body').removeClass('hidden-scroll');
    } else {
        $('body').addClass('hidden-scroll');
    }
});
});


// On Scroll Sticky
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  // $('#InfoSticky').toggleClass('showSticky',
  //   scroll >= $('#ProductInfo').offset().top
  // );
});
$(window).scroll();

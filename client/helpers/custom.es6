Meteor.startup(function() {
    console.log('Loading GoogleMaps...');
    GoogleMaps.load();
    GoogleMaps.loadUtilityLibrary('js/richmarker.js');
    GoogleMaps.loadUtilityLibrary('js/infobox.js');
});

// Adapt background height to block element ----------------------------------------------------------------------------

adaptBackgroundHeight = function adaptBackgroundHeight(){
    $('.background').each(function(){
        if( $(this).children('img').height() < $(this).height() ){
            //$(this).children('img').css('right', ( $(this).children('img').width()/2 -  $(window).width())/2 );
            $(this).children('img').css('width', 'auto');
            $(this).children('img').css('height', '100%');
        }
    });
};

// Navigation on small screen ------------------------------------------------------------------------------------------

mobileNavigation = function mobileNavigation(){
    if( $(window).width() < 979 ){
        $(".main-navigation.navigation-top-header").remove();
        $(".toggle-navigation").css("display","inline-block");
        $(".main-navigation.navigation-off-canvas").load("assets/external/_navigation.html");
        $("body").removeClass("navigation-top-header");
        $("body").addClass("navigation-off-canvas");
    }
}

// Toggle off canvas navigation ----------------------------------------------------------------------------------------

toggleNav = function toggleNav() {

    if( $('body').hasClass('navigation-off-canvas') ){
        $('.header .toggle-navigation').click(function() {
            $('#outer-wrapper').toggleClass('show-nav');
        });
        $('#page-content').click(function() {
            $('#outer-wrapper').removeClass('show-nav');
        });
    }

}

// Helpers

prepare = function prepare() {

    var $body = $('body');

    if( $body.hasClass('navigation-top-header') ) {
        $( ".main-navigation.navigation-top-header" ).load( "assets/external/_navigation.html" );
    }
    else if( $body.hasClass('navigation-off-canvas') ) {
        $( ".main-navigation.navigation-off-canvas" ).load( "assets/external/_navigation.html" );
    }
    mobileNavigation();
    toggleNav();

}








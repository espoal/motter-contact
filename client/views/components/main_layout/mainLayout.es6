
Template.mainLayout.onCreated( function() {

    console.log('mainLayout ceated');

    adaptBackgroundHeight();



});

Template.mainLayout.onRendered(function() { mobileNavigation(); });
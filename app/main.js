// Initialize app
const myApp = new Framework7({
  //Tell Framework7 to compile templates on app init
  precompileTemplates: true
});

// If we need to use custom DOM library, let's save it to $$ variable:
let $$ = Dom7;

// Add view
let mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true
});

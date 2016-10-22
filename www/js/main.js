      


App.controller('home', function (page) {
 alert("Page 1");

});




App.controller('page2', function (page) {
 alert("Page 2");

//$("#paint").css("height",$(window).height());

});


try {
App.restore();
} catch (err) {
App.load('home');
}
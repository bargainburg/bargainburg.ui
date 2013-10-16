var SRC_LOAD_COUNT = 0;
var SRC_EMBER = false;
var SRC_HANDLEBARS = false;
var APP_STARTED = false;

function hideLoadingScreen() {
	// TRIGGER SLIDING ANIMATION COMPONENTS
	$(".loading .sky").toggleClass("animation-hide", true);
	$(".loading .ocean").toggleClass("animation-hide", true);
	setTimeout(function () { $(".loading").fadeOut(500); }, 1500);
}

function loadBasicDependencies() {
	//////////////////////////////////////////////////////////////////////
	// BOOTSTRAP PRELOAD 
	$("#preload-bootstrap-css").load("./lib/bootstrap/css/bootstrap.min.css", checkForLoadCompletion("./lib/bootstrap/css/bootstrap.min.css"));

	$.getScript("./lib/bootstrap/js/bootstrap.min.js", checkForLoadCompletion("./lib/bootstrap/js/bootstrap.min.js"));
	$.getScript("./lib/handlebars/handlebars-1.0.0.js", checkForLoadCompletion("./lib/handlebars/handlebars-1.0.0.js"));
	$.getScript("./lib/ember/ember.js", checkForLoadCompletion("./lib/ember/ember.js"));
	
	//$("#preload-bootstrap-js").load("./lib/bootstrap/js/bootstrap.min.js");
	//$("#preload-handlebars").load("./lib/handlebars/handlebars-1.0.0.js");
	//$("#preload-ember").load("./lib/ember/ember.js");

	// DO NOT PRELOAD FONT-AWESOME: Required for Load Screen
	//////////////////////////////////////////////////////////////////////
}

function loadAdvancedDependencies() {

	if(SRC_EMBER && SRC_HANDLEBARS) {
		$.getScript("./js/app.js", checkForLoadCompletion("./js/app.js"));
		$.getScript("./js/ui.js", checkForLoadCompletion("./js/ui.js"));
	}

}

function checkForLoadCompletion(async_url) {
	var s = async_url.split("/");
	var src = s[s.length-1];

	if(src == "bootstrap.min.css") {
		console.log("DEBUG: bootstrap.min.css READY");
		SRC_LOAD_COUNT++;
	}
	else if(src == "bootstrap.min.js") {
		console.log("DEBUG: bootstrap.min.js READY");
		SRC_LOAD_COUNT++;
	}
	else if(src == "handlebars-1.0.0.js") {
		console.log("DEBUG: handlebars-1.0.0.js READY");
		SRC_LOAD_COUNT++;
		SRC_HANDLEBARS = true;
		loadAdvancedDependencies();
	}
	else if(src == "ember.js") {
		console.log("DEBUG: ember.js READY");
		SRC_LOAD_COUNT++;
		SRC_EMBER = true;
		loadAdvancedDependencies();
	}
	else if(src == "app.js") {
		console.log("DEBUG: app.js READY");
		SRC_LOAD_COUNT++;
	}
	else if(src == "ui.js") {
		console.log("DEBUG: ui.js READY");
		SRC_LOAD_COUNT++;
	}
	//console.log("AJAX COMPLETE | LOADED: "+SRC_LOAD_COUNT);
}

$(document).ready(function() {
	loadBasicDependencies();
});

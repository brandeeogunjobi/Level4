Titanium.UI.setBackgroundColor('#F00');

var pWidth =Ti.Platform.displayCaps.platformWidth;
var pWeight = Ti.Platform.displayCaps.platformWeight;
var itemCount = 1;
var rowCount = 3;
var margin = 20;
//var trueCanvasWidth = 320;
//var trueCanvasWidth = 'Width x Height: 480 x 320 ';
var size = '10 x 10: ';
 //console.log(size);

function logDisplayCaps(){
  Ti.API.info('Width x Height: ' + Ti.Platform.displayCaps.platformWidth + ' x ' + Ti.Platform.displayCaps.platformHeight);
}
var window1 = Ti.UI.createWindow({
	background: "#000",
	layout: "horizontal"
});
var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});

/*var viewContainer = Ti.UI.createView({
	top: 20,
	backgroundColor: "#CCFFCC",
	layout: "horizontal",
	width: 0,
	contentWidth: pWidth
	//height: pHeight-border.height-border.top,
	//showVerticalScrollIndicator: true
	
});*/

//for(var i=0; i<itemCount; i++){
var view = Ti.UI.createView({
	backgroundColor: "#33CCFF",
	top: margin,
	left: margin,
	width: size,
	height: size
});
	
/*var text = Ti.UI.createLabel({text: i+1, color: "#ccfee5"});
	view.add(text);
	viewContainer.add(view);
}*/

//window1.add(border);
//window1.add(viewContainer);
window1.open();
logDisplayCaps();

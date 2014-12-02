//Set Background Color
Ti.UI.setBackgroundColor('#999');

var window1 = Ti.UI.createWindow ({
	backgroundColor: "#fff",
	backgroundImage:"vector-grey-abstract-background-for-design.png",
	backgroundRepeat: true,
	title: "Ketalog Inc."
});

var myFirstView = Ti.UI.createView({
	backgroundColor: "#333",
	height: 150,
	top: 120,
	left: 20,
	right: 20,
	borderRadius: 5	
});

var myText = Ti.UI.createLabel({
	text: "Hello World",
	color: "#fff",
	font: {fontSize: 24, fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"},
	textAlign: 'center',
	top: 60,
	left: 70
});

var buttonView = Ti.UI.createLabel({
	backgroundColor: '#8E2899',
	top: myFirstView.top + myFirstView.height + 80,
	left: 20,
	right: 20,
	borderRadius: 5,
	height: 50
});

var buttonText = Ti.UI.createLabel({
	color: '#fff',
	font: {fontSize: 16, fontFamily: 'Arial'},
	textAlign: "center",
	text: 'Previous'
	
});

var buttonView2 = Ti.UI.createLabel({
	backgroundColor: '#8E2899',
	top: myFirstView.top + myFirstView.height + 150,
	left: 20,
	right: 20,
	borderRadius: 5,
	height: 50
});

var buttonText2 = Ti.UI.createLabel({
	color: '#fff',
	font: {fontSize: 16, fontFamily: 'Arial'},
	textAlign: "center",
	text: 'Next'
	
});

window1.add(myFirstView, buttonView, buttonView2);
myFirstView.add(myText);
buttonView.add(buttonText);
buttonView2.add(buttonText2);
window1.open();


	







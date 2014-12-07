//Set Background Color
Ti.UI.setBackgroundColor('#999');

var marketingItems = ["1. Web Analytics", "2. Real Time Reporting", "3. Audience Engagement", "4. Web Design", "5. Mobile Apps"];



var window1 = Ti.UI.createWindow ({
	backgroundColor: "#fff",
	backgroundImage:"vector-grey-abstract-background-for-design.png",
	backgroundRepeat: true

});

var mainView = Ti.UI.createView({
	backgroundColor: "#333",
	height: 150,
	top: 120,
	left: 20,
	right: 20,
	borderRadius: 5
});

var myIntro = Ti.UI.createLabel({
	text: "Ketalog List Of Services",
	color: "#fff",
	font: {fontSize: 14, fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"},
	textAlign: 'center',
	top: 60,
	left: 70
});

var buttonNext = Ti.UI.createView({
	backgroundColor: '#8E2899',
	top: 69,
	left: 20,
	right: 20,
	borderRadius: 5,
	height: 50
});

var nextLabel = Ti.UI.createLabel({
	color: '#fff',
	font: {fontSize: 16, fontFamily: 'Arial'},
	textAlign: "center",
	text: 'Next'
	
});

var buttonPrevious = Ti.UI.createView({
	backgroundColor: '#8E2899',
	top: mainView.top + mainView.height + 1,
	left: 20,
	right: 20,
	borderRadius: 5,
	height: 50
});

var previousLabel = Ti.UI.createLabel({
	color: '#fff',
	font: {fontSize: 16, fontFamily: 'Arial'},
	textAlign: "center",
	text: 'Previous'
	
});



var length = marketingItems.length;
var i = -1;

var newbuttonNext = function(){
	if(i === length -1){
		i = -1;
}; i++; myIntro.text = marketingItems[i];

};

var newbuttonPrevious = function(){
	if(i === 0){
		i = length;
}; i--; myIntro.text = marketingItems[i];

};





buttonNext.addEventListener("click", newbuttonNext);
buttonPrevious.addEventListener("click", newbuttonPrevious);


buttonNext.add(nextLabel);
buttonPrevious.add(previousLabel);
window1.add(buttonNext, buttonPrevious);
window1.add(mainView);
mainView.add(myIntro);
buttonNext.add(nextLabel);
buttonPrevious.add(previousLabel);
window1.open(); 
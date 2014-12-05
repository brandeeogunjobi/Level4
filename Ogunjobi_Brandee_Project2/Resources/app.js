
Ti.UI.setBackgroundColor('#DEF5FF');

var advertisement = [
	{title: "Ad Campaign"},
	{title: "Certified Partners"},
	{title: "Manual vs Automated"},
	{title: "Data Mining"},
	{title: "Strategy"},
	{title: "Media Buying", },
	{title: "Analytics Dashboard"}];
	
var brand = [
	{title: "Web Development"},
	{title: "Graphic Design"},
	{title: "Social Media Design"},
	{title: "Blog & PR"},
	{title: "Brand Management"}
];

var window1 = Ti.UI.createWindow({
	backgroundColor: "#F4F7FF"
});

var titleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "#BFBFBF",
	top: 0
});

var border = Ti.UI.createView({
	height: 1,
	backgroundColor: "#FFFFFF",
	top: titleView.height + titleView.top
});

var mainLabel = Ti.UI.createLabel({
	text: "Online Advertising Terms & Services",
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	top: 30,
	width: '100%',
	textAlign: "center"
});

var terms = Ti.UI.createTableView({
	top: border.top + border.height,
});

if(Ti.Platform.name === "iPhone OS"){
	terms.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var advertismentSection = Ti.UI.createTableViewSection({
	headerTitle: "Online Advertising & Marketing",
	footerTitle: "Online Advertising Terms"
});

var brandSection = Ti.UI.createTableViewSection({
	headerTitle: "Online Branding Solutions",
	footerTitle: "Contact Us For More Info."
});

var adSections = [advertismentSection, brandSection];

terms.setData(adSections);

titleView.add(mainLabel);
window1.add(titleView, border, terms);
window1.open(); 

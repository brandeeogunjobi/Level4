
Ti.UI.setBackgroundColor('#DEF5FF');

var advertisement = [
	{title: "Ad Campaign", "description" : "Ad Campaigns vary throughout the online market. The Ad can be a specific size banner on display networks across the web. The can be a specific font style to attract audiences. They can also be in the forms of Blogs, Press Release, Video, Event Listing, plus much more. Choosing the right ad campaign might mean you have to choose mutliple platforms depending on your brand and goals."},
	{title: "Certified Partners", description: 'Working on your marketing can be overwhelming. If you choose to outsource this part of your business you might want to consider certified partners. A certifie partner will mean you are working with an organization that has met all criteria bestowed upon them by an entity i.e., Google requires several crtierias that must be met each month to be elgible for certification.'},
	{title: "Manual vs Automated", description: 'We live in automated world, but your campaigns still need a human touch. When companies use solely automation this can limit your target to a selection based on mass data and not specific to your brand goals. Having both automated and manual interest in the campaign will gain maximum results.'},
	{title: "Data Mining", description: 'Once you have started advertising on line you need to learn about your audience. Looking at the data over a period of time can help you evaluate your client base. It can help advertisers determine where to make intelligent and strategic moves. Your audience includes not only Demographics, Ages, Genres and so on it also includes places you don\'t wamt tp show up. i.e., you sell flowers in Phoenix, you don\'t want to show up for flower seeds in New Jersey.'},
	{title: "Strategy", description: 'Upon completion of your business intelligence review. You can strategize your moves. There are multiple platforms of online media. Finding the best to suit your business is key in a successful campaign. Utilizing different resources with the proper bidding and blend of manual account management will place you brand in reach of your targeted audience. This only comes into effect after the right pieces have been set into proper motion.'},
	{title: "Media Buying", description: 'You have all your strategy aligned at this stage of the game. You have discovered many aspect of how to become successful with your advertisements. With your reportin and all your detail you now want to play with the big boys! Placing your ad\'s selectively to engage with your audience. You can do this with media buys i.e. selling a design book on HGTV, or recipe book on Food Network. They may be advantageous if the data gathered intelligently reflects the move.'},
	{title: "Analytics Dashboard", description: 'Everything is chiming like clock work. Keep your eyes on the prize. With real time dashboards you can access all of your data in one central dashboard. You can choose to customize your dashboard with widgets from Google, Gmail, YouTune, Twitter, Excel, Quickbooks, Project Management, Sales Departments, plus many live reporting tools to save you time and money.'}
];
	
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
	top: border.top + border.height 
});

if(Ti.Platform.name === "iPhone OS"){
	terms.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var advertismentSection = Ti.UI.createTableViewSection({
	headerTitle: "Online Advertising Terms"
	
});

var brandSection = Ti.UI.createTableViewSection({
	headerTitle: "Online Branding Solutions"
	
});

for(var i=0, j=advertisement.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: advertisement[i].title,
		hasChild: true
	});
	
if(Ti.Platform.name === "iPhone OS"){
	theRow.hasChild = false;
	theRow.hasDetail = true;
}
	
	advertismentSection.add(theRow);
}

var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#F4F7FF"
	});

var detailTitleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "#BFBFBF",
	top: 0
});

var detailBorder = Ti.UI.createView({
	height: 1,
	backgroundColor: "#FFFFFF",
	top: detailTitleView.height + detailTitleView.top 
});

var detailMainLabel = Ti.UI.createLabel({
	text: this.title,
	font: {fontSize: 20, fontFamily: "Arial", fontWeight: "bold"},
	top: 30,
	width: '100%',
	textAlign: "center"
});

detailTitleView.add(detailMainLabel);
detailWindow.add(detailTitleView, detailBorder);

detailWindow.open();

for(var i=0, j=brand.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: brand[i].title
	});
	

	brandSection.add(theRow);
	theRow.addEventListener('click', getDetail);
}

var adSections = [advertismentSection, brandSection];

terms.setData(adSections);

titleView.add(mainLabel);
window1.add(titleView, border, terms);
window1.open(); 

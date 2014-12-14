//Ti.UI.setBackgroundColor('#81B465');
var imageFile = ['abstract-background.jpg','arabian-wallboard.jpg', 'bamboo.jpg', 'black-leaves.jpg', 'blue-abstract.jpg',
				'blue-plank.jpg', 'circle_abstract.jpg', 'colorful.jpg', 'communication-background.jpg', 'fence.jpg',
				'flagbrick.jpg', 'flowers-birds.jpg','four-patterns.jpg', 'gold-texture.jpg', 'goodFriday.jpg', 'gray-art.jpg',
				'grayretro.jpg', 'green-brick.jpg','grunge-bricks.jpg', 'grunge-color.jpg', 'grunge-rainbow.png', 'grungy-frames.jpg',
				'grungy-retro.jpg', 'merry-christmas.jpg', 'metal-brownstriped.jpg', 'metal-pattern.jpg', 'metal-pinksheet.jpg','metal-texture.jpg',
				'seamless-pattern.jpg', 'sunbeams.jpg', 'wallpaper.jpg', 'water-droplets.jpg'
];
	
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 15; // total amount of images on screen
var rowCount = 4; //images per row
var margin = 10; //space between images
var canvasWidth = (pWidth / rowCount - margin*2);
var size = (pHeight / 5) - margin;

var init_window = Ti.UI.createWindow({
	backgroundColor: "white",
	title: "Gallery Portfolio"
});
	

var main_button_init = Ti.UI.createButton({
	title: 'Enter Gallery',
	color: "#000",
	font: {fontSize: 18, fontFamily: "Arial", fontWeight: "bold"},
	backgroundColor:'#f1f1f1',
	  //backgroundImage:'metal-pattern.jpg',
	  //backgroundSelectedImage: "metal-texture.jpg",
	top: (pHeight / 2) - 40, //'50%',
	width: '80%',
	height: 80,
	//'margin-top': 100
});


init_window.add(main_button_init);
init_window.open();


  
main_button_init.addEventListener('click', function(e){
	console.log('main btn clicked');
	create_gallery_content();
	
	main_nav.open(); 
 	main_nav.openWindow(gallery_window);
});

var gallery_window = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title:'Gallery'
});

var main_nav = Ti.UI.iOS.createNavigationWindow({
	window:gallery_window // any window would do
});


function create_gallery_content(){
	
	var viewContainer = Ti.UI.createScrollView({ //this our the boxes for the images
		backgroundColor: "#f00",
		layout: "horizontal",
		width: pWidth,
		height: pHeight-border.height-border.top,
		contentWidth: pWidth,
		showVerticalScrollIndicator: true
	});
	
	for(var i = 0; i < imageFile.length; i++){
		var view = Ti.UI.createImageView({
			backGround: "#33ccff",
			image: "Vimages/" + imageFile[i],
			borderRadius: 4,
			top: 10,
			left: 10,
			right: 10,
			width: canvasWidth,
			height: size,
			name: imageFile[i]
		});
	
		var text = Ti.UI.createLabel({color: "#00FF99"}); //Number Label
		
		view.index = i;
		view.add(text);
		viewContainer.add(view);
		
		gallery_window.add(viewContainer);
		
		view.addEventListener('click', openImage );
	}
}

function openImage(event){
	
	this_image = event.source;
	
	//console.log('img clicked');
	//console.log( event );
	//console.log( this_image );
	//console.log( this_image.image );
	//console.log( this_image.index );

	var imageWindow = Ti.UI.createWindow ({
		title: this_image.name,
		backgroundColor: '#f5f5f5'
	});
	
	var fullImage = Ti.UI.createImageView({
		image: event.source.image,
		borderRadius: 4
	});

	imageWindow.add(fullImage);
	//window1.openWindow(imageWindow);
	main_nav.openWindow( imageWindow );
	
};

//var gallery_window_nav = Ti.UI.iOS.createNavigationWindow({
	//window:gallery_window
//});


var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});

//var loadGalleryFile = require ("GalleryFile");




/*
this_app.addEventListener('deviceorientationcange', function(e){
	
	if( e.orientation == 'landscape' ){
		
	}
	
	pWidth = Ti.Platform.displayCaps.platformWidth;
	pHeight = Ti.Platform.displayCaps.platformHeight;
	
	main_button.setStyle({
		top: pHeight / 2 - 40
	})
	
})
*/
 


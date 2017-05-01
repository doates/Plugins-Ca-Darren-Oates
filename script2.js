// JavaScript Document
$( function() { //pretty simple plugin which all i could do was make small changes
    $( '#gallery' ).jGallery({
		  backgroundColor: 'grey',
		 tooltips: true,
        textColor: 'green',
		canZoom: true,
		slideshow: true,
		slideshowAutostart: true,
		transition: 'random',
		 transitionBackward: 'random',
        items: [
            {
                url: 'images/large/1.jpg',
                thumbUrl: 'images/thumbs/1.jpg',
                title: 'Photo1',
                bgColor: '#3E3E3E',
                textColor: '#FFFFFF'
            },
            {
                url: 'images/large/2.jpg',
                thumbUrl: 'images/thumbs/2.jpg',
                title: 'Photo2',
                bgColor: '#010301',
                textColor: '#CDE897'
            },
            {
                url: 'images/large/3.jpg',
                thumbUrl: 'images/thumbs/3.jpg',
                title: 'Photo3',
                bgColor: '#EAF037',
                textColor: '#21408A'
            },
			 {
                url: 'images/large/4.jpg',
                thumbUrl: 'images/thumbs/4.jpg',
                title: 'Photo3',
                bgColor: 'lightblue',
                textColor: '#21408A'
            },
			 {
                url: 'images/large/5.jpg',
                thumbUrl: 'images/thumbs/5.jpg',
                title: 'Photo3',
                bgColor: '#lightorange',
                textColor: '#21408A'
            },
			 {
                url: 'images/large/6.jpg',
                thumbUrl: 'images/thumbs/6.jpg',
                title: 'Photo3',
                bgColor: '#lightgreen',
                textColor: '#21408A'
            },
			 {
                url: 'images/large/7.jpg',
                thumbUrl: 'images/thumbs/7.jpg',
                title: 'Photo3',
                bgColor: 'lightblue',
                textColor: '#21408A'
            },
			 {
                url: 'images/large/8.jpg',
                thumbUrl: 'images/thumbs/8.jpg',
                title: 'Photo3',
                bgColor: 'purple',
                textColor: '#21408A'
            }
        ]
    });
} );

		 
		
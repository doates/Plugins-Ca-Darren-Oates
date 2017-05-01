"use strict"
$(document).ready(function() { // bubble text functions cant be ran at the same time
	
	
	
	
	 $("#games").mouseout(function(){// pretty simple function that just writes the phrases
		 
		var phrases = [
        
		"NEW WEBSITE USING JQUERY",
		"USING JQUERY",

    ];
	
    var len = phrases.length;
    var index = 0;

    var ctrl = bubbleText({
        element: $('#hi'),
        newText: phrases[index++],
        letterSpeed: 0,
        repeat: 1,
        timeBetweenRepeat: 1,
        callback: function() {
            this.newText = phrases[index++ % len];
        },
        
    });
	
	
        
    });// creates text 
	
	
	
	
	 $("#banner").click(function(){// this function replaces what i had before
		 var phrases = [
        'This is using 2 plugins',
        'Buble text and videobg',
        'I hope this is working :)',
        
        'Finished',
        'bye ^^',
    ];
	
    var len = phrases.length;
    var index = 0;

    var ctrl = bubbleText({
        element: $('#p'),
        newText: phrases[index++],
        letterSpeed: 0,
        repeat: 5,
        timeBetweenRepeat: 1000,
        callback: function() {
            this.newText = phrases[index++ % len];
        },
    });
        
    });//wrights text in banner

	
	$("#games").mouseenter(function(){ //writes to div
	  var $element = $('#games');
    var newText = 'bubble text stops functioning if more than one fuction is being ran at the same time!,If you take your mouse out of div another bubble query will execute!';

    bubbleText({
        element: $element,
        newText: newText,
        speed: 3000,
        repeat: 1,
    });
		
		

	
        
    });
	$("#games1").click(function(){//writes to div
		
	  var $elements = $('#games1');
    var newTexts = 'This page is in a constant loop so everything will keep changing';

    bubbleText({
        element: $elements,
        newText: newTexts,
        speed: 3000,
        repeat: 1,
    });
		

        
    });
	
	
	$("#games2").click(function(){//writes to div
	  var $element = $('#games2');
    var newText = 'Refresh the page and see if 2 querys can be run together?';

    bubbleText({
        element: $element,
        newText: newText,
        speed: 3000,
        repeat: 1,
    });

        
    });


	$('#footer').videoBG({ //sets a div to a video
		position:"relative",
		zIndex:101,
		webm:'assets/stars.webm',
		scale:false,
		loop:true,
		
	});//puts footer to stars
	$('.videoBG_wrapper').css('z-index', 100);// fixes z-index
		
		$('#header').videoBG({
		position:"relative",
		zIndex:99,
		
		webm:'assets/stars.webm',
		
		scale:false,
		loop:true,

	});//puts header to stars
	$('#banner').videoBG({
		position:"relative",
		zIndex:101,
	
		webm:'assets/colours.webm',
		
		scale:true,
		loop:true,
		opacity:0.5,
		
	});//sets to banner to color video

	
	$('#main').videoBG({
		position:"relative",
		zIndex:0,

		webm:'assets/colours.webm',
		
		scale:false,
		loop:true,
		
	});

		
});
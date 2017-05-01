// JavaScript Document
"use strict"
$(function(){
    var small = true;
    //Make the <div> with class 'draggable' draggable here 
    $(".draggable").draggable({
      containment: "parent"
    });
  
    
	 $( function() { //im setting all the bozes to dropable
  
    $( "#droppable3" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
			$('#droppable3').css({"background-color":"green"});
			
      }
	  
    });
  } );
  $( function() {
  
    $( "#droppable2" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
			$('#droppable2').css({"background-color":"green"});
      }
    });
  } );
  
    $( function() {
   
    $( "#droppable" ).droppable({ //runs the progress bar fuction
      drop: function( event, ui ) {
		   $("#border").css("visibility", "visible");
		   $(".progress-label").css("top", "-30px");
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
			$('#droppable').css({"background-color":"green"});
			 $( function() { //-----------------start of progress bar function
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" ); //uses progress bar fuction to count to 100
      },
      complete: function() {
        progressLabel.text( "Times Up!" );
      }
    });
 
    function progress() { // counts to 100 while setting val to it
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val +  1);
 
      if ( val < 99 ) {
        setTimeout( progress, 99);
      }
    }
 
    setTimeout( progress, 1000 );
  } );
      }
	  
    });
	
  } );
  $( function() {
   
    $( "#droppable4" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
			$('#droppable4').css({"background-color":"green"});
      }
    });
	
	
  } );
  $( "#droppable5" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
			$('#droppable5').css({"background-color":"green"});
      }
    });
	$( "#droppable6" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
			$('#droppable6').css({"background-color":"green"});
      }
    });
  $( "#droppable7" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
			$('#droppable7').css({"background-color":"green"});
      }
    });
	$( "#droppable8" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
			$('#droppable8').css({"background-color":"green"});
      }
    });
	$( "#droppable9" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
			$('#droppable9').css({"background-color":"green"});
      }
    });
	$( "#droppable10" ).droppable({
      drop: function( event, ui ) {
		  $( "#complete" ).append( "<p>Finished</p>" ); //writes to a div
		  
		
		var folded = new OriDomi('.sonic', { // makes any div foldable
  vPanels:         8,     // number of panels when folding left or right (vertically oriented)
  hPanels:         3,     // number of panels when folding top or bottom
  speed:           100,  // folding duration in ms
  ripple:          3,     // backwards ripple effect when animating
 
  perspective:     800,   // smaller values exaggerate 3D distortion
  maxAngle:        88,    // keep the user's folds within a range of -40 to 40 degrees
  shading:         'hard' // change the shading type
});


        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
			$('#droppable10').css({"background-color":"green"});
      }
    });
	
	
	$("input").keyup(function(){ // as u type counts keys pressted
  
  // Setting variable so we only access the DOM once
  var input = $("input");
  
  // Main code for valadation change
  if($(input).val().length <= 0  && $(input).val().length <= 3){
    
    $(input).animate({backgroundColor: "green"}, 300);
  }
  
  
  
  else if($(input).val().length >= 3 && $(input).val().length <= 5){
   
    $(input).animate({backgroundColor: "yellow"}, 300);
  }
  else if($(input).val().length >= 6 && $(input).val().length <= 8){
   
    $(input).animate({backgroundColor: "purple"}, 300);
  }
  else if($(input).val().length >= 9 && $(input).val().length <= 14){
    
    $(input).animate({backgroundColor: "blue"}, 300);
  }
  
  else if($(input).val().length >= 15){
    
    alert("correct");
	$("#pass1").val("");
	//simple oridomi function for both curtain images
	var folded = new OriDomi('#curtain1');
	var $folded = $('#curtain1').oriDomi({
		
		});

$folded.oriDomi('accordion', -20);

var folded2 = new OriDomi('#curtain2');
	var $folded2 = $('#curtain2').oriDomi({
		
		});

$folded2.oriDomi('accordion', -20,'right');







	
	
  }
});
$(window).scroll(function () { 
        if ($(this).scrollTop() > 600) {// while position less than 600 
            $('#easy-top').fadeIn(100);
        } else {
            $('#easy-top').fadeOut(0);
        }
    });
    $('#easy-top').click(function () {
        $("html, body").animate({ // goes back to top
            scrollTop: 0
        }, {
            duration: 2000,
            easing: "easeOutQuint"
        });
    });
	//-------------------------------------------------
	$('.tiles').sortable(); //makes sortable

	var shuffle = function(){
		var tiles = $('.tiles li'); 

		for(var i = 0, length = tiles.length; i < length; i++){// each tile gets a number
			var randIndex = Math.floor(Math.random() * (length - i) + i); //random numbes between 0 and lenght
			$(tiles[i]).after($(tiles[randIndex]));
			$(tiles[randIndex - 1]).after($(tiles[i]));
		}
	};

	

	$('#shuffle').on('click', shuffle);// call
	
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output = d.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;

$('#datepicker').val(output);

$( function() { //jquery ui function
    $( "#datepicker" ).datepicker();
  } );
  
  function showpanel() {  // removes curtain divs after 15 seconds   
   $( "#curtain1" ).remove();
   $( "#curtain2" ).remove();
 }

 // use setTimeout() to execute
 setTimeout(showpanel, 15000);


	
  
  
});


   
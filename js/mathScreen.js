app.mathScreen = function () {

	'use strict';

	var pub = {},
		initUI;
		

	pub.onDOMReady = function () {
		console.log('in app.mathScreen.onDOMReady');
		var context = document.getElementById('contextMenu');
		context.menu.show();
		pub.addEventListeners();
		initUI();
		hammerTime();	
	};

	pub.addEventListeners = function () {
		console.log('in app.mathScreen.addEventListeners');
		var context = document.getElementById('contextMenu');

		document.getElementById('btnCalculate').addEventListener('click', pub.calculate);
		document.getElementById('btnEquationList').addEventListener('click', pub.eqList);
		document.getElementById('btnCubic').addEventListener('click', pub.switchCubEq);
		document.getElementById('btnQuad').addEventListener('click', pub.switchQuadEq);
	};

	initUI = function () {
		console.log('you have entered the initUI function');
		//$('#txtResult').attr('value', 'ax^2+bx+c');
		
	};
	pub.calculate = function (){
		var a1 = document.getElementById('txtVar1').value;
		var a = Number(a1);
		var b1 = document.getElementById('txtVar2').value;
		var b = Number(b1);
		var c1 = document.getElementById('txtVar3').value;
		var c = Number(c1);		
		var x1 = document.getElementById('txtVar').value;
		var x = Number(x1);
		
		var eq = document.getElementById('txtEquation').title;
		
		if( eq == 'quad') {
		var answer1 = (-b + Math.sqrt(b*b-(4*a*c))) / (2*a);
		var answer2 = (-b - Math.sqrt(b*b-(4*a*c))) / (2*a);		
			if ( isNaN(answer1)){
				$('#txtResult').attr('value', 'sorry the result is non-real');
			} else {
			$('#txtResult').attr('value', answer1 +'  &  ' + answer2);
			}
		} else if (eq =='cubic') {
			var answer = a*(x*x*x)+b*(x*x)+c*x;
			$('#txtResult').attr('value', answer);
		}
	}	
	pub.switchCubEq = function () {
		console.log('You have choosen a Cubic Equation');
		$('#txtEquation').attr('value', 'ax^3+bx^2+cx+d');
		$('#txtEquation').attr('title', 'cubic');
		
		$('#lblResult').html('Resulting Product = ');
		$('#txtResult').attr('value', 'Resultant Product = ');
		
		$('#lblVar').show();
		$('#lblVar').html('X');
		$('#txtVar').show();
		$('#txtVar').attr('placeholder', 'X');
		
		$('#lblVar1').html('A');
		$('#txtVar1').attr('placeholder', 'A');
		
		$('#lblVar2').html('B');
		$('#txtVar2').attr('placeholder', 'B');
		
		$('#lblVar3').html('C');
		$('#txtVar3').attr('placeholder', 'B');
		
		
	}
	
	pub.switchQuadEq = function () {
		console.log('You have choosen a Quadratic Equation');
		$('#txtEquation').attr('value', 'ax^2+bx+c');
		$('#txtEquation').attr('title', 'quad');
		
		$('#lblResult').html('X = ')
		$('#txtResult').attr('value' , 'X = ');
		
		$('#txtVar').hide();
		$('#lblVar').hide();
		
		$('#txtVar1').attr('placeholder', 'A');
		
		$('#txtVar2').attr('placeholder', 'B');
		
		$('#txtVar3').attr('placeholder', 'C');		
		
		
	}
	
	pub.eqList = function () {
		console.log('You have choosen the list of equations');
		var context = document.getElementById('contextMenu');
		context.menu.show();
		
	}
	

	return pub;
}();
function hammerTime() {
  var contentSwipe = new Hammer(document.getElementById("mathScreen"), {
  });

  contentSwipe.onswipe = function(ev) { 
    var dir = ev.direction;
    
    // swipe from right-to-left
    if (dir === 'left') {
      

      // swipe from left-to-right
    }  else if (dir === 'right') {
        bb.pushScreen('splash.html', 'splashScreen');
      }

  };
}

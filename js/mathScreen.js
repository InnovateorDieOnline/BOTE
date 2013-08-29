app.mathScreen = function () {

	'use strict';

	var pub = {};				

	pub.onDOMReady = function () {
		console.log('in app.mathScreen.onDOMReady');
		
		var context = document.getElementById('contextMenu');
		context.menu.show();
		
		pub.addEventListeners();
		
		hammerTime();	
	};

	pub.addEventListeners = function () {
		console.log('in app.mathScreen.addEventListeners');
		
		var context = document.getElementById('contextMenu');

		$('#btnCalculate').bind('click', pub.calculate);
		$('#btnEquationList').bind('click', pub.eqList);
		$('#btnCubic').bind('click', pub.SwitchCubEq);
		$('#btnQuad').bind('click', pub.switchQuadEq);
	};	
	
	pub.setAndForget = function(var0, varString) {		
	    var lblString = $('#lbl'+varString);
		var txtString = $('#txt'+varString);
		
		lblString.html(var0);
		txtString.attr('placeholder', var0);
		
		if(typeof var0 === "undefined")
		{			
			lblString.hide();
			txtString.hide();
		}
		else
		{			
			lblString.show();
			txtString.show();
		}
	}
	
	pub.switchEq = function (eqString, var0, var1, var2, var3, var4) {
	   	$('#txtEquation').attr('value', eqString);
	    $('#txtResult').attr('title', eqString);
		$('#txtResult').attr('value', eqString);				
		
		pub.setAndForget(var0, 'Var');	
		pub.setAndForget(var1, 'Var1');
		pub.setAndForget(var2, 'Var2');	
		pub.setAndForget(var3, 'Var3');		
		pub.setAndForget(var4, 'Var4');		
	}
	
	pub.switchQuadEq = function () {
		console.log('You have choosen a Quadratic Equation');	

		pub.switchEq(
		  'ax^2+bx+c = 0',
		  undefined,
		  'a',
		  'b',
		  'c'
		  );		
	}
	
	pub.switchCubEq = function () {
		console.log('You have choosen a Cubic Equation');
		
		pub.switchEq(
		  'ax^3+bx^2+cx = d',
		  'x',
		  'a',
		  'b',
		  'c'
		);
	}
	
	pub.calcQuad = function (){
		var a1 = $('#txtVar1').attr('value');
		var a = Number(a1);
		var b1 = $('#txtVar2').attr('value');
		var b = Number(b1);
		var c1 = $('#txtVar3').attr('value');
		var c = Number(c1);				
		
		var answer1 = ((-1*b) + Math.sqrt((b*b)-(4*a*c))) / (2*a);
		var answer2 = ((-1*b) - Math.sqrt((b*b)-(4*a*c))) / (2*a);
		
		var txtResult = $('#txtResult'); 
		if (isNaN(answer1)){
			txtResult.attr('value', 'sorry the result is non-real');
		} else {
			txtResult.attr('value', 'x= ' + answer1 +'  &  ' + answer2);
		}
	}
	
	pub.calcCubic = function () {
		var x1 = $('#txtVar').attr('value');
		var x = Number(x1);
		var a1 = $('#txtVar1').attr('value');
		var a = Number(a1);
		var b1 = $('#txtVar2').attr('value');
		var b = Number(b1);
		var c1 = $('#txtVar3').attr('value');
		var c = Number(c1);		
		
		console.log('x = ' + x + ' a = ' + a);
		
		var answer = a*(x*x*x)+b*(x*x)+c*x;
		$('#txtResult').attr('value', 'd = ' + answer);		
	}	
	
	pub.eqList = function () {
		console.log('You have choosen the list of equations');
		
		var context = document.getElementById('contextMenu');		
		context.menu.show();		
	}
	
	pub.calculate = function () {
		var eq = $('#txtResult').attr('title');
		
		console.log('eq is ' +eq);
		
		if( eq == 'ax^2+bx+c = 0') {
			console.log (' you will got to pub.calcQuad shortly');
			pub.calcQuad();
		} else if( eq == 'ax^3+bx^2+cx = d') {		
			console.log('you will go to pub.calcCubic shortly');	
			pub.calcCubic();
		}	
	}
	
	return pub;
}();

function hammerTime() {
	var contentSwipe = new Hammer(document.getElementById("mathScreen"), {});
	
	contentSwipe.onswipe = function(ev) { 
		var dir = ev.direction;
		if (dir === 'left') {
			// swipe from right-to-left	
		} else if (dir === 'right') {
			// swipe from left-to-right
			bb.pushScreen('splash.html', 'splashScreen');
		}
	};
}

app.unitsScreen = function () {

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
		document.getElementById('btnMass').addEventListener('click', pub.switchMass);
		document.getElementById('btnLength').addEventListener('click', pub.switchLength);
		document.getElementById('btnVolume').addEventListener('click', pub.switchVolume);
		document.getElementById('btnVel').addEventListener('click', pub.switchVelocity);
		
	};

	initUI = function () {
		console.log('you have entered the initUI function');
		
	};
	pub.calculate = function (){
		var m1 = document.getElementById('txtVar').value;
		var m = Number(m1);
		var b1 = document.getElementById('txtVar1').value;
		var b = Number(b1);		
		
		var eq = document.getElementById('txtEquation').title;
		
		if( eq == 'mass') {		
		console.log (' you will got to pub.calcMass shortly');
		pub.calcMass();
		} else if( eq == 'length') {		
		console.log('you will go to pub.calcLength shortly');
		pub.calcLength();
		} else if( eq == 'volume') {		
		console.log('you will go to pub.calcVolume shortly');
		pub.calcVolume();
		} else if( eq == 'velocity') {		
		console.log('you will go to pub.calcVelocity shortly');
		pub.calcVelocity();
		} else {
		 //error message
		}
		
	}	
	
	pub.switchEq = function (eqString, dimension, var1, var2, var3, var4) {
	    $('#txtResult').attr('title', eqString);
		$('#txtResult').attr('placeholder', eqString);
		
		$('#txtEquation').attr('value', eqString);
		$('#txtEquation').attr('title', dimension);
		$('#txtResult').attr('placeholder', 'Leave Blank the field you want to solve for');
		
		$('lblMetric').attr('value' , var1);
		$('lblBritish').attr('value' , var2);
		
		
		$('#txtSI').attr('placeholder', var1);
		$('#txtBritish').attr('placeholder', var2);		
	}
	
	pub.switchMass = function () {
		console.log('You have choosen a Mass conversion');
		
		/*$('#txtEquation').attr('value', 'Kg <--> Lb');
		$('#txtEquation').attr('title', 'mass');
		$('#txtResult').attr('placeholder', 'Put "A" in the field you want to solve for');	
		$('#txtVar').attr('placeholder', 'Kilogram [kg]');
		$('#txtVar1').attr('placeholder', 'Pound [lb]'); */
		
		pub.switchEq(
					'Kg <--> Lb',	
					'mass',
					'Kilogram [kg]',
					'Pound [lb]'
					);
	}
	
	pub.switchLength = function () {
		console.log('You have choosen a Length conversion');
		
		/*$('#txtEquation').attr('value', 'KM <--> MI');
		$('#txtEquation').attr('title', 'length');	
		$('#txtResult').attr('placeholder', 'Put "A" in the field you want to solve for');	
		$('#txtVar').attr('placeholder', 'Kilometer [KM]');
		$('#txtVar1').attr('placeholder', 'Mile [Mi]'); */
		
		pub.switchEq(
					'KM <--> MI',	
					'length',
					'Kilometer [KM]',
					'Mile [Mi]'
					);
		
	}
	
	pub.switchVolume = function () {
		console.log('You have choosen a volume conversion');
		
		/*$('#txtEquation').attr('value', 'L <--> G');
		$('#txtEquation').attr('title', 'volume');	
		$('#txtResult').attr('placeholder', 'Put "A" in the field you want to solve for');	
		$('#txtVar').attr('placeholder', 'Liter [L]');
		$('#txtVar1').attr('placeholder', 'Gallon [G]'); */
		
		pub.switchEq(
					'L <--> G',	
					'volume',
					'Liter [L]',
					'Gallon [G]'
					);
		
	}
	
	pub.switchVelocity = function () {
		console.log('You have choosen a velocity conversion');
		
		/*$('#txtEquation').attr('value', 'KM/hr <--> MPH');
		$('#txtEquation').attr('title', 'velocity');
		$('#txtResult').attr('placeholder', 'Put "A" in the field you want to solve for');		
		$('#txtVar').attr('placeholder', 'Kilometers per hour [KM/hr]');
		$('#txtVar1').attr('placeholder', 'Miles per hour [Mi/hr]');*/
		
		pub.switchEq(
					'KM/hr <--> MPH',	
					'velocity',
					'Kilometers per hour [KM/hr]',
					'Miles per hour [Mi/hr]'
					);
		
	}
	
	pub.eqList = function () {
		console.log('You have choosen the list of equations');
		var context = document.getElementById('contextMenu');
		context.menu.show();
		
	}
	
	pub.calcMass = function () {
		console.log('You are calculting mass');
		var metric = document.getElementById('txtVar').value;
		var m = Number(metric);
		var british = document.getElementById('txtVar1').value;
		var b = Number(british);
				
		var answer;
		
		if (metric == 'A'){		
		answer = b*0.45359;
		$('#txtResult').attr('value', answer +' [kg]');
		console.log(answer);
		} else if( british == 'A') {		 
		 answer = m*2.2046;
		 $('#txtResult').attr('value', answer + ' [lb]');
		} else {
		console.log ('There has been an input error');
		}
	}
	
	pub.calcLength = function () {
		console.log('You are calculting length');
		var metric = document.getElementById('txtVar').value;
		var m = Number(metric);
		var british = document.getElementById('txtVar1').value;
		var b = Number(british);
				
		var answer;
		
		if (metric == 'A'){		
		answer = b*1.60934;
		$('#txtResult').attr('value', answer +' [KM]');
		console.log(answer);
		} else if( british == 'A') {		 
		 answer = m*0.621371
		 $('#txtResult').attr('value', answer + ' [Mi]');
		} else {
		console.log ('There has been an input error');
		}
	}
	
	pub.calcVolume = function () {
		console.log('You are calculting volume');
		var metric = document.getElementById('txtVar').value;
		var m = Number(metric);
		var british = document.getElementById('txtVar1').value;
		var b = Number(british);
				
		var answer;
		
		if (metric == 'A'){		
		answer = b*3.78541;
		$('#txtResult').attr('value', answer +' [L]');
		console.log(answer);
		} else if( british == 'A') {		 
		 answer = m*0.264172
		 $('#txtResult').attr('value', answer + ' [G]');
		} else {
		console.log ('There has been an input error');
		}
	}
	
	pub.calcVelocity = function () {
		console.log('You are calculting volume');
		var metric = document.getElementById('txtVar').value;
		var m = Number(metric);
		var british = document.getElementById('txtVar1').value;
		var b = Number(british);
				
		var answer;
		
		if (metric == 'A'){		
		answer = b*1.60934;
		$('#txtResult').attr('value', answer +' [KM/hr]');
		console.log(answer);
		} else if( british == 'A') {		 
		 answer = m*0.621371
		 $('#txtResult').attr('value', answer + ' [Mi/hr]');
		} else {
		console.log ('There has been an input error');
		}
	}

	return pub;
}();
function hammerTime() {
  var contentSwipe = new Hammer(document.getElementById("unitsScreen"), {
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

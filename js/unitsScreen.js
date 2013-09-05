app.unitsScreen = function () {

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
		
		$('#btnMass').bind('click', pub.switchMass);
		$('#btnLength').bind('click', pub.switchLength);
		$('#btnVolume').bind('click', pub.switchVolume);
		$('#btnVel').bind('click', pub.switchVelocity);		
	};
	
	pub.calculate = function (){
		
		var m1 = $('#txtVar').attr('value');
		var m = Number(m1);
		var b1 = $('#txtVar1').attr('value');
		var b = Number(b1);		
		
		var eq = $('#txtEquation').attr('title');
		console.log(eq);
		
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
		
		$('#lblMetric').html(var1);
		$('#txtSI').attr('placeholder', var1);
		
		$('#lblBritish').html(var2);
		$('#txtBritish').attr('placeholder', var2);		
	}
	
	pub.switchMass = function () {
		console.log('You have choosen a Mass conversion');		
		
		pub.switchEq(
					'Kg <--> Lb',	
					'mass',
					'Kilogram [kg]',
					'Pound [lb]'
					);
	}
	
	pub.switchLength = function () {
		console.log('You have choosen a Length conversion');		
		
		pub.switchEq(
					'KM <--> MI',	
					'length',
					'Kilometer [KM]',
					'Mile [Mi]'
					);		
	}
	
	pub.switchVolume = function () {
		console.log('You have choosen a volume conversion');		
		
		pub.switchEq(
					'L <--> G',	
					'volume',
					'Liter [L]',
					'Gallon [G]'
					);		
	}
	
	pub.switchVelocity = function () {
		console.log('You have choosen a velocity conversion');
		
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
		
		var metric = $('#txtSI').attr('value');
		var m = Number(metric);
		var british = $('#txtBritish').attr('value');
		var b = Number(british);
				
		var answer;		
		
		if (metric == ''){		
			answer = b*0.45359;
			$('#txtResult').attr('value', answer +' [kg]');
			console.log(answer);
		} else if( british == '') {		 
			 answer = m*2.2046;
			 $('#txtResult').attr('value', answer + ' [lb]');
		} else {
			console.log ('There has been an input error');
		}
	}
	
	pub.calcLength = function () {
		console.log('You are calculting length');
		
		var metric = $('#txtSI').attr('value');
		var m = Number(metric);
		var british = $('#txtBritish').attr('value');
		var b = Number(british);
				
		var answer;
		var units;
		
		if (metric == ''){		
			answer = b*1.60934;
			$('#txtResult').attr('value', answer +' [KM]');
			console.log(answer);
		} else if( british == '') {		 
			 answer = m*0.621371
			 $('#txtResult').attr('value', answer + ' [Mi]');
		} else {
			console.log ('There has been an input error');
		}
	}
	
	pub.calcVolume = function () {
		console.log('You are calculting volume');
		
		var metric = $('#txtSI').attr('value');
		var m = metric;
		var british = $('#txtBritish').attr('value');
		var b = british;
				
		var answer;
		console.log(metric);
		console.log(british);
		console.log('m is ' + m);
		console.log('b is ' +b);
		
		if (metric == ''){		
			answer = b*3.78541;
			$('#txtResult').attr('value', answer +' [L]');
			console.log(answer);
		} else if( british == '') {		 
			answer = m*0.264172
			$('#txtResult').attr('value', answer + ' [G]');
		} else {
			console.log ('There has been an input error');
		}
	}
	
	pub.calcVelocity = function () {
		console.log('You are calculting velocity');
		
		var metric = $('#txtSI').attr('value');
		var m = Number(metric);
		var british = $('#txtBritish').attr('value');
		var b = Number(british);
				
		var answer;
		
		if (metric == ''){		
			answer = b*1.60934;
			$('#txtResult').attr('value', answer +' [KM/hr]');
			console.log(answer);
		} else if( british == '') {		 
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

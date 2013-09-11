app.engrScreen = function () {

	'use strict';

	var pub = {};
		
	pub.onDOMReady = function () {
		console.log('in app.engrScreen.onDOMReady');
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
		$('#btnEM').bind('click', pub.switchEMEq);
		$('#btnMech').bind('click', pub.switchMechEq);
	};
	
	pub.setAndForget = function(var0, varString) {		
	    var lblString = $('#lbl'+varString);
		var txtString = $('#txt'+varString);
		
		lblString.html(var0);
		txtString.attr('placeholder', var0);
		txtString.removeAttr('value');
		
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
	
	pub.switchEq = function (eqString, var1, var2, var3, var4) {
	    $('#txtResult').attr('title', eqString);
		$('#txtResult').attr('placeholder', eqString);
		
		$('#lblVar').html('F');
		$('#txtVar').attr('placeholder', 'F');		
			
		pub.setAndForget(var1, 'Var1');
		pub.setAndForget(var2, 'Var2');	
		pub.setAndForget(var3, 'Var3');		
		pub.setAndForget(var4, 'Var4');		
	}
	
	pub.switchMechEq = function () {
		console.log('You have choosen a Quadratic Equation');
		pub.switchEq(
		  'F=ma',
		  'm',
		  'a'
		  );		
	}
	
	pub.switchEMEq = function () {
		console.log('You have choosen an EM Equation');
		pub.switchEq(
		  'F=q x (E + v x B)',
		  'q',
		  'E',
		  'v',
		  'B'
		  );		
	}
		
	pub.eqList = function () {
		console.log('You have choosen the list of equations');
		document.getElementById('contextMenu').menu.show();		
	}
	
	pub.calculate = function () {
		var eq = $('#txtResult').attr('title');
		console.log('eq is ' +eq);
		 if( eq == 'F=ma') {
			console.log (' you will got to pub.calcMechForce shortly');
			pub.calcMechForce();
		} else if( eq == 'F=q x (E + v x B)') {		
			console.log('you will go to pub.calcEMForce shortly');
			pub.calcEMForce();
		}	
	}
	
	pub.countEmptyFields  = function () {
	    //count the number of blank arguments
		var count  = 0;
		for (var i = 0; i < arguments.length; i++) {
			if (arguments[i] == '') {
				count++;
			}
		}
		return count;
	}
	
	pub.calcMechForce = function () {
		var force = $('#txtVar').attr('value');
		var f = Number(force);
		var mass = $('#txtVar1').attr('value');
		var m = Number(mass);
		var accel = $('#txtVar2').attr('value');
		var a = Number(accel);
		var numberOfBlanks = pub.countEmptyFields(
			force,
			mass,
			accel
			);
		var answer;
		
		if (numberOfBlanks != 1) {
			answer = 'Please leave only ONE input field blank';
		} else if (force == ''){		
			console.log('You are calculating Force');
			answer = m*a;			
		} else if( mass == '') {
			console.log('You are calculting mass');
			answer = f / a;		 
		} else if ( accel == '') {
			console.log('You are calculting acceleration');
			answer = f / m;		
		} else {
			console.log ('Something went wrong, you should not see this');
		}
		
		$('#txtResult').attr('value', answer);
	}
	
	pub.calcEMForce = function () {		
		var force = $('#txtVar').attr('value');
        var F = Number(force);		
		var charge = $('#txtVar1').attr('value');
		var q = Number(charge);	
		var eField = $('#txtVar2').attr('value');
		var E = Number(eField);	
		var velocity = $('#txtVar3').attr('value');
		var v = Number(velocity);
		var bField = $('#txtVar4').attr('value');
		var B = Number(bField);
		var numberOfBlanks = pub.countEmptyFields(
			force,
			charge,
			eField,
			velocity,
			bField
			);		
		var answer;
		
		if (numberOfBlanks != 1) {
			answer = 'Please leave only ONE input field blank';
		} else if (force == '') {		
			console.log('You are calculting force');
			answer = q*(E+(q*B));			
		} else if( charge == '') {
			console.log('You are calculting charge');
			answer = F / (E + (v*B));
		} else if ( eField == '') {
			console.log('You are calculting the Electric Field');
			answer = (F/q) - (v*B);
		} else if (velocity == '') {
			console.log('You are calculting the velcotiy of the particle');
			answer = ((F/q) - E)/ B;
		} else if (bField == '') {
			console.log('You are calculting the magnetic field');
			answer = ((F/q) - E)/ v;
		} else {
			answer = 'Something went wrong, you should not see this';			
		}
		
		$('#txtResult').attr('value', answer);
		console.log(answer);
	}
	
	return pub;
}();

function hammerTime() {
  var contentSwipe = new Hammer(document.getElementById("engrScreen"), {});

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

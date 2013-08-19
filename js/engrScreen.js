app.engrScreen = function () {

	'use strict';

	var pub = {},
		initUI;
		

	pub.onDOMReady = function () {
		console.log('in app.engrScreen.onDOMReady');
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
		document.getElementById('btnEM').addEventListener('click', pub.switchEMEq);
		document.getElementById('btnMech').addEventListener('click', pub.switchMechEq);
	};

	initUI = function () {
		console.log('you have entered the initUI function');
		
	};
	pub.calculate = function (){
		var f1 = document.getElementById('txtVar').value;
		var f = Number(f1);
		var m1 = document.getElementById('txtVar1').value;
		var m = Number(m1);
		var a1 = document.getElementById('txtVar2').value;
		var a = Number(a1);		
		
		var eq = document.getElementById('txtEquation').title;
		
		if( eq == 'mech') {		
		console.log (' you will got to pub.calcMechForce shortly');
		pub.calcMechForce();
		} else if( eq == 'em') {		
		console.log('you will go to pub.calcEMForce shortly');
		pub.calcEMForce();
		}
		
	}	
	pub.switchEMEq = function () {
		console.log('You have choosen an EM Equation');
		$('#txtEquation').attr('value', 'F=q(E+v*B)');
		$('#txtEquation').attr('title', 'em');
		$('#txtResult').attr('placeholder', 'Put "x" in the field you want to solve for');	
		$('#txtVar').attr('placeholder', 'F');
		
		$('#lblVar1').html('q');
		$('#txtVar1').attr('placeholder', 'q');
		
		$('#lblVar2').html('E');
		$('#txtVar2').attr('placeholder', 'E');
		
		$('#lblVar3').html('v');
		$('#txtVar3').attr('placeholder', 'v');
		$('#lblVar3').show();
		$('#txtVar3').show();
		
		$('#lblVar4').html('B');
		$('#txtVar4').attr('placeholder', 'B');
		$('#lblVar4').show();
		$('#txtVar4').show();
	}
	
	pub.switchMechEq = function () {
		console.log('You have choosen a Quadratic Equation');
		$('#txtEquation').attr('value', 'F=ma');
		$('#txtEquation').attr('title', 'mech');
		$('#txtResult').attr('placeholder', 'Put "x" in the field you want to solve for');
		$('#txtVar').attr('placeholder', 'F');
		
		$('#lblVar1').html('m');
		$('#txtVar1').attr('placeholder', 'm');
		
		$('#lblVar2').html('a');
		$('#txtVar2').attr('placeholder', 'a');
		
		$('#lblVar3').html('');
		$('#txtVar3').attr('placeholder', 'Not used');
		$('#lblVar3').hide();
		$('#txtVar3').hide();
		
		$('#lblVar4').html('');
		$('#txtVar4').attr('placeholder' , 'Not used');
		$('#lblVar4').hide();
		$('#txtVar4').hide();
	}
	
	pub.eqList = function () {
		console.log('You have choosen the list of equations');
		var context = document.getElementById('contextMenu');
		context.menu.show();
		
	}
	
	pub.calcMechForce = function () {
		console.log('You are calculting force');
		var force = document.getElementById('txtVar').value;
		var f = Number(force);
		var mass = document.getElementById('txtVar1').value;
		var m = Number(mass);
		var accel = document.getElementById('txtVar2').value;
		var a = Number(accel);		
		var answer;
		if (force == 'x'){		
		answer = m*a
		$('#txtResult').attr('value', answer);
		console.log(answer);
		} else if( mass == 'x') {
		 console.log('You are calculting mass');
		 answer = f / a;
		 $('#txtResult').attr('value', answer);
		} else if ( accel == 'x') {
		console.log('You are calculting acceleration');
		answer = f / m;
		$('#txtResult').attr('value', answer);
		} else {
		console.log ('There has been an input error');
		}
	}
	
	pub.calcEMForce = function () {
		
		var force = document.getElementById('txtVar').value;
		var F = Number(force);
		var charge = document.getElementById('txtVar1').value;
		var q = Number(charge);
		var eField = document.getElementById('txtVar2').value;
		var E = Number(eField);
		var velocity = document.getElementById('txtVar3').value;
		var v = Number(velocity);
		var bField = document.getElementById('txtVar4').value;
		var B = Number(bField);
		var answer;
		if (force == 'x'){		
		console.log('You are calculting force');
		answer = q*(E+(q*B));
		$('#txtResult').attr('value', answer);
		console.log(answer);
		} else if( charge == 'x') {
		 console.log('You are calculting charge');
		 answer = F / (E + (v*B));
		 $('#txtResult').attr('value', answer);
		} else if ( eField == 'x') {
		console.log('You are calculting the Electric Field');
		answer = (F/q) - (v*B);
		$('#txtResult').attr('value', answer);
		} else if (velocity == 'x') {
			console.log('You are calculting the velcotiy of the particle');
			answer = ((F/q) - E)/ B;
			$('#txtResult').attr('value', answer);
		} else if (bField == 'x') {
			console.log('You are calculting the magnetic field');
			answer = ((F/q) - E)/ v;
			$('#txtResult').attr('value', answer);
		} else {
		console.log ('There has been an input error');
		}
	}
	return pub;
}();
function hammerTime() {
  var contentSwipe = new Hammer(document.getElementById("engrScreen"), {
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

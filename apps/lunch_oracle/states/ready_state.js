LunchOracle.ReadyState = SC.State.design({
	
	enterState: function(){
		LunchOracle.statechart.sendEvent('randomize');
	},
	
	randomize: function(){
		LunchOracle.lunchController.randomize();
	},
	
	keyUp: function(evt) {
		if (evt.keyCode === 82) {
			// 'r' pressed
			LunchOracle.statechart.sendEvent('randomize');
		}
	}
	
});
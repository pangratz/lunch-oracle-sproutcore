sc_require('lunch_oracle');

LunchOracle.mixin({
	
	statechart: SC.Statechart.create({
		
		trace: YES,
		
		initialState: 'setup',
		
		setup: SC.State.design({
			enterState: function(){
				LunchOracle.restaurants = LunchOracle.Restaurant.FIXTURES;
				LunchOracle.restaurantsCount = LunchOracle.restaurants.get('length');
				
				LunchOracle.statechart.gotoState('ready');
			}
		}),
			
		ready: SC.State.design({
			
			enterState: function(){
				LunchOracle.statechart.sendEvent('randomize');
			},
			
			randomize: function(){
				LunchOracle.lunchController.randomize();
			}
			
		})		
		
	})
	
});
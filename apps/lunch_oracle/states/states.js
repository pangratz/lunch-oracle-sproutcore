sc_require('lunch_oracle');

LunchOracle.mixin({
	
	statechart: SC.Statechart.create({
		
		trace: YES,
		
		rootState: SC.State.design({
			
			initialSubstate: 'setup',
			
			setup: SC.State.design({
				enterState: function(){
					LunchOracle.restaurants = LunchOracle.Restaurant.FIXTURES;
					LunchOracle.restaurantsCount = LunchOracle.restaurants.get('length');
				},
				
				randomize: function(){
					LunchOracle.lunchController.randomize();
				}
			})
			
		})
		
	})
	
});
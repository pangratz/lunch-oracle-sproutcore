LunchOracle.SetupState = SC.State.design({
	enterState: function(){
		LunchOracle.restaurants = LunchOracle.store.find(LunchOracle.Restaurant);
		LunchOracle.restaurantsCount = LunchOracle.restaurants.get('length');
		
		LunchOracle.statechart.gotoState('ready');
	}
});
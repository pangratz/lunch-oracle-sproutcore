// ==========================================================================
// Project:   LunchOracle
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals LunchOracle */

LunchOracle = SC.Application.create({
	store: SC.Store.create().from(SC.Record.fixtures)	
});

LunchOracle.lunchController = SC.ObjectController.create({
	
	randomize: function() {		
		var current = this.get('content');
		
		var index = Math.floor(Math.random() * LunchOracle.restaurantsCount);
		var selectedRestaurant = LunchOracle.restaurants.objectAt(index);
		
		while (current && (current.get('name') === selectedRestaurant.get('name'))) {
			index = Math.floor(Math.random() * LunchOracle.restaurantsCount);
			selectedRestaurant = LunchOracle.restaurants.objectAt(index);
		}
		
		this.set('content', selectedRestaurant);
	}
	
});

SC.ready(function() {
	LunchOracle.statechart.initStatechart();
	
  	LunchOracle.mainPane = SC.TemplatePane.append({
    	layerId: 'lunch_oracle',
    	templateName: 'lunch_oracle'
  	});

	LunchOracle.mainPane.defaultResponder = "LunchOracle.statechart";
});

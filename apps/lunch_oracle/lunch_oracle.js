// ==========================================================================
// Project:   LunchOracle
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals LunchOracle */

LunchOracle = SC.Application.create({
	store: SC.Store.create().from('LunchOracle.LunchOracleFixturesDataSource')
});

LunchOracle.lunchController = SC.ObjectController.create({
	randomize: function(){
		var restaurants = LunchOracle.store.find(LunchOracle.Restaurant);
		if (restaurants) {
			var size = restaurants.get('length');
			var index = Math.floor(Math.random() * size);
			var selectedRestautant = restaurants.objectAt(index);
			this.set('content', selectedRestautant);
		} else {
			this.set('content', {name: 'no restaurants available'});
		}
	}
});

SC.ready(function() {
	
	LunchOracle.lunchController.randomize();
	
  LunchOracle.mainPane = SC.TemplatePane.append({
    layerId: 'lunch_oracle',
    templateName: 'lunch_oracle'
  });
});

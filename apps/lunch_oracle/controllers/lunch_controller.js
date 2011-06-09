// ==========================================================================
// Project:   LunchOracle.lunchController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals LunchOracle */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
LunchOracle.lunchController = SC.ObjectController.create(
/** @scope LunchOracle.lunchController.prototype */ {

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

}) ;

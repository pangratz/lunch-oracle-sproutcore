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
		
		var selectedRestaurant = this.selectRandomRestaurant();
		while (current && (current.get('name') === selectedRestaurant.get('name'))) {
			selectedRestaurant = this.selectRandomRestaurant();
		}
		
		this.set('content', selectedRestaurant);
	},
	
	selectRandomRestaurant: function(){
		var index = Math.floor(Math.random() * LunchOracle.restaurantsCount);
		var selectedRestaurant = LunchOracle.restaurants.objectAt(index);
		return selectedRestaurant;
	}

}) ;

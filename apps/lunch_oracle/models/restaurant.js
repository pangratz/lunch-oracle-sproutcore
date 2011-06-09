// ==========================================================================
// Project:   LunchOracle.Restaurant
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals LunchOracle */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/

sc_require('lunch_oracle');

LunchOracle.Restaurant = SC.Record.extend(
/** @scope LunchOracle.Restaurant.prototype */ {
	
	name: SC.Record.attr(String)
	
}) ;

// ==========================================================================
// Project:   LunchOracle.LunchOracleFixturesDataSource
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals LunchOracle */

/** @class

  (Document Your Data Source Here)

  @extends SC.FixturesDataSource
*/

sc_require('lunch_oracle')

LunchOracle.LunchOracleFixturesDataSource = SC.FixturesDataSource.extend(
/** @scope LunchOracle.LunchOracleFixturesDataSource.prototype */ {
	
	simulateRemoteResponse: YES,
	
	latency: 0
  
}) ;

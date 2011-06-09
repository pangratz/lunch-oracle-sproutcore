// ==========================================================================
// Project:   LunchOracle
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals LunchOracle */

LunchOracle = SC.Application.create({
	store: SC.Store.create().from(SC.Record.fixtures)	
});

SC.ready(function() {
	SC.RootResponder.responder.set('defaultResponder', LunchOracle.statechart); 		
	LunchOracle.statechart.initStatechart();	
  	LunchOracle.mainPane = SC.TemplatePane.append({
    	layerId: 'lunch_oracle',
    	templateName: 'lunch_oracle'
  	});
	LunchOracle.mainPane.defaultResponder = 'LunchOracle.statechart';
});

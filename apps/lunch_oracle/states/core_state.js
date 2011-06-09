sc_require('core');
sc_require('states/setup_state');
sc_require('states/ready_state');

LunchOracle.mixin({
	
	statechart: SC.Statechart.create({
		
		trace: YES,
		
		initialState: 'setup',
		
		setup: SC.State.plugin('LunchOracle.SetupState'),			
		ready: SC.State.plugin('LunchOracle.ReadyState')		
		
	})
	
});
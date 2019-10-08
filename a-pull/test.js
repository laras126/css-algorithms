
describe( '.a-pull', () => {
	const pullSize = getCustomPropertyValue( '.a-pull', '--a-pull-size' );
	const pullItem = $( '.a-pull-up-item' ).getBoundingClientRect();
	const pullItemDirectParent = $( '.a-pull-up-item' ).parentElement.getBoundingClientRect();
	const itemAbovePullItem = $( '.a-pull-up-above-item' ).getBoundingClientRect();
	
	it( 'pulls a box up, above its direct parent', () => {
		return assertGreaterThan( pullItem.top.toFixed(), pullItemDirectParent.top.toFixed() );
	});
	
	// Incomplete
	// it( 'the above-item increases in height by the pull-size value', () => {
		// return assertEquals( pullItem.top.toFixed(), itemAbovePullItem.bottom.toFixed() );
	// });

});

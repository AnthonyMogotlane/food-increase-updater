describe('The price checker app', function() {

	it ('should allow a user to select a product', function() {

		const priceChecker = PriceChecker();

		priceChecker.addProduct();
		

		assert.equal(5, priceChecker.addProduct());

	});

});
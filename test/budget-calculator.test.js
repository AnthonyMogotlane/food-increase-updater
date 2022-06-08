describe('The PriceChecker Function', function() {

	it ('should allow a user to select a product', function() {

		const priceChecker = PriceChecker();

		priceChecker.selectProduct();
		

		assert.equal("Cooking Oil", priceChecker.addProduct());

	});
    it ('should be able add the product', function() {

		const priceChecker = PriceChecker();

		priceChecker.addProduct();
		priceChecker.addProduct();

		assert.equal(78.22, priceChecker.totalProducts());

	});
});
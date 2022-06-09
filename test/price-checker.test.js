describe('The PriceChecker Function', function() {

	it ('should be able to set the product', function() {

		const priceChecker = PriceChecker();

		priceChecker.setProductDetails("Cooking Oil");

		assert.equal("Cooking Oil", priceChecker.getProductDetails());

	});

    it ('should validate the data that is entered', function() {

		const priceChecker = PriceChecker();


		assert.equal("Please enter the correct name", priceChecker.checkProductName("Milk2"));

	});

    it ('should bring back an error message "No data entered" when data is not enetered', function() {

		const priceChecker = PriceChecker();
		

		assert.equal("No data entered", priceChecker.checkNoDataEntered(""));

	});

	it ('should bring back all the details of the bread', function() {

		const priceChecker = PriceChecker();
		
		priceChecker.setProductDetails("bread");

		assert.deepEqual({2017: "9.67", 2018: "9.99", 2019: "10.37", 2020: "11.24", 2021: "12.37", 2022: "17.00", itemName: "bread", desc: "1 loaf"}, priceChecker.getProductObj());

	});
	it ('should bring back all the details of the apple', function() {

		const priceChecker2 = PriceChecker();
		
		priceChecker2.setProductDetails("apple");

		assert.deepEqual({
			itemName: "apple",
			desc: "1.5kg",
			2017: "21.49",
			2018: "24.74",
			2019: "28.74",
			2020: "27.74",
			2021: "28.49",
			2022: "29.74"
		}, priceChecker2.getProductObj());

	});


});
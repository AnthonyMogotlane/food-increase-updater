function PriceChecker(){

    
    let theProduct = ""
    const regex = /^[a-z]+$/gi
    let errorMessage = ""

    //set the product name
    function setProductDetails(productName){
        theProduct = productName
    }
    //gets the product name
    function getProductDetails(){
        return theProduct
    }
    //check the data if it is a string
    function checkProductName(productName) {
        if (!regex.test(productName)) {
            errorMessage = "Please enter the correct name";
        }
        return errorMessage;
    }
    //checks if the user is entering data
    function checkNoDataEntered(productName){
        if (productName.length === 0){
            errorMessage = "No data entered"
        }
        return errorMessage;
    }
    //get the obj of the product
    function getProductObj(){
        for(let obj of changedPriceProducts) {
            if(obj.itemName === getProductDetails()){
                return obj;
            }
        }
    }

    return{
        getProductDetails,
        setProductDetails,
        checkProductName,
        checkNoDataEntered,
        getProductObj
    } 
}
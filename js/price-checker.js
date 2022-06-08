function PriceChecker(){

    //let productName = ""
    let theProduct = ""
    const regex = /^[a-z]+$/gi
    let errorMessage = ""

    function setProductDetails(productName){
        theProduct = productName
    }

    function getProductDetails(){
        return theProduct
    }
    function checkProductName(productName) {
        if (!regex.test(productName)) {
            errorMessage = "Please enter the correct name";
        }
        return errorMessage;
    }
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

let test = PriceChecker();
test.setProductDetails("bread")


console.log(test.getProductObj())
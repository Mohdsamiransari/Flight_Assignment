
var amadeus = require('amadeus');

var amadeus = new amadeus({
    clientId: 'dSHIi5sWLEkUkoHATaJQLsN7i3xwuC5r',
    clientSecret: 'F55r0sV2cVAVIQ7R'

});


exports.getFlight = async(req,res)=>{
    try{
        const {originLocationCode,destinationLocationCode, departureDate} = req.body;
        await amadeus.shopping.flightOffersSearch.get({
            originLocationCode: originLocationCode,
            destinationLocationCode: destinationLocationCode,
            departureDate: departureDate,
            adults: '1',
            max:10
        })
        .then(function (response) {
            return res.status(200).json({
                success:true,
                message: "flight details",
                data: response.data
            })
        }).catch(function (response) {
            console.error(response);
        });
    }
    catch(error){
        console.log(error)
        return res.status(400).json({
            success: false,
            message: "Something went wrong"
        })
    }
    
}
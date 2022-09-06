// nested Objects
var products = {
    Wallets: {
        Bifold: {
            title: "Bifold Wallet",
            leatherType: "Veg-Tanned leather",
            price: "3000Rs"
        },
        Long: {
            title: "Long Wallet",
            leatherType: "Oil Pull-up leather",
            price: "3500Rs"
        }
    },

    Bags: {
        File: {
            title: "File Bag",
            leatherType: "Grain-Real leather",
            price: "15000Rs"
        },
        Satchel: {
            title: "Satchel Bag",
            leathherType: "Grain-Real leather",
            price: "21000Rs"
        }
    },

    Belts: {
        Casual: {
            title: "Machine-Waxed Belt",
            size: "35mm",
            price: "4000Rs"
        },
        Formal: {
            title: "Buffalo Leather Belt",
            size: "40mm",
            price: "5000Rs"
        },
        ExtraFormal: {
            title: "Italian Imported Belt",
            size: "40mm",
            price: "6000Rs"

        }

    }

}


function extractObj() {
    let objL1 = { ...products.Bags.File }
   console.log("SPREAD OBJECT  ")
    console.log(objL1)
    // objL1.price=200;
    // console.log(objL1)
    // console.log(" changing the value of spread object doesnt change the orginal one")
    // console.log(products.Bags.File)


}
extractObj();




let Asia = [
    [Pakistan = 
        [sindh = ['karachi', 'hyderabad']],
        [punjab = ['lahore', 'multan']]],
    [India = 
        [bihar = ['ara', 'buxar']],
        [ Goa = ['Madgon', 'panaji']]],
    [China = 
        [Anhui = ['Anqing', 'Bengbu']],
       [Fuijan = ['Fuzhou', 'Longyan']]]
]
// console.log(Asia)

let spreadArray = [...Asia[1]]
console.log("SPREAD ARRAY  ")

console.log(spreadArray)

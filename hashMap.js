// Implementing a hash map from scratch with tests

class Hashmap{
    constructor(){
        //Initialise an empty object to store key-value pairs
        this.hashObject = {};
    }

    set(key, value){
        // set the value for the given key in the hashObject
        this.hashObject[key] = value;
    }

    get(key){
        // Retrieve the value fro the given key from the hashObject
        return this.hashObject[key]
    }

    hashStr(str){
        let finalHash = 0;
        for (let i = 0; i < str.length; i++){
            finalHash +=charCode;
        }
        return finalHash;
    }
}

module.exports = Hashmap;
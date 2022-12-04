'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @return { Array or Object}
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function takes in any input value and returns that value unchanged.
 * @param { Any Value }: Function takes in any input value.
 * @return { Any Value}: Function returns input value unchanged.
 * 
 */
 function identity(value){ //function decleration
    return value;
    }

    module.exports.identity = identity;

    /**
     * typeOf: Function takes in any input value and returns that values type (string, array, object, null, date, etc...)
     * @param { Any Value }: Function takes in any input value.
     * @return { Type }: Function returns a string of that values type.
     */
     function typeOf(value) {
        
       
        if (typeof value == 'string'){
            return 'string'
           
        }else if(Array.isArray(value) == true){
            return 'array'
            
        }else if (typeof value === 'object' && value !== null && !Array.isArray(value) && value instanceof Date !== true){
            return 'object'
            
        }else if(typeof value == 'undefined'){
            return 'undefined'
           
        }else if(typeof value == 'number'){
            return 'number'
           
        }else if(typeof value == 'boolean'){
            return 'boolean'
            
        }else if(value == null){
            return 'null'
            
        }else if(typeof value == 'function'){
            return 'function'
            
        }else if(value instanceof Date == true){
            return 'date'
        }
    };
    module.exports.typeOf = typeOf;

    /**
     * First: A function that takes in an array, and a number. It returns the first (number) ammount of values depending on how big the number is. 
     * If there is no number it will only return the first value in the array. If the number is bigger than the ammount of values in tha array, it will return the entire array.
     * @param { Array, Number } : The function input is an array and a number.
     * @return { One or more Values} The function returns how ever many of the first values from the array were entered for the number input. If no number input is given, the function
     * returns the first array value. If the number given is more than the length of the array, the full array is returned.
     * 
     * 
     * 
     */
     function first(array, number){
        //if array is not array return []
        var empty = []
        if(Array.isArray(array) === false){
            return []
        }  
        //if number is not given or not a number return the first index of array
        if(number === undefined || typeof number !== 'number'){
            return array[0]
        
        }// if number is greater than the length of the array return the array as is
        if(number > array.length){
            return array;
        }
        
        //other wise return the first number items of array
        for(var i = 0; i < number; i++){
        empty.push(array[i])
        }
        return empty
        };
        module.exports.first = first;

        /**
         * Last: A function that takes in an array and a number as an input and returns the last values in that array. The ammount of values that is returned correlates
         * to the number given as input.
         * @param { array, number}: The function input is an array and a number
         * @return {One Value or Array of values or empty array}: The function returns the last values of an array that correlate to the number entered as input
         * if no number is given return the last value of the array, if no array is given, return an empty array.
         * 
         */
         function last(array, number){
            //if array is not an array, return []
            if(!Array.isArray(array)){
                return []
            }
            //if number is not given or not a number return the last value in the array
            if(number === undefined || typeof number !== 'number'){
                return array[array.length-1];
            }
            //if number is greater than array.length return array
            if(number > array.length){
                return array
            }
            //else return the last numbers of the array
            else{var empty = []
                for(var i = array.length-1; empty.length < number; i--){
                    empty.unshift(array[i])
                }
            }return empty;
            }
            module.exports.last = last;

            /**
             * indexOf: Is a function that takes in an array, and a value as input. It returns a number that correlates to where the value exists at in the array.
             * @param { array, value }: The functions input is an array and a value;
             * @return { number }: The function returns a number that is the index value of where the value input exists in the array input.
             * 
             */

            function indexOf(array, value){
                //loop through the array
                for(var i = 0; i < array.length; i++){
                    //if array[i] === value
                    if(array[i] === value){
                        //return  i
                        return i;
                        //else return -1
                    }  
                }  return -1
            }
            module.exports.indexOf = indexOf;

            /**
             * Contains: A functions that takes in an array and a value as an input. It returns a true or false statement 
             * based on whether or not the value exists inside the array.
             * @param { array, value }: The functions input is an array and a value
             * @return { true or false }: The function returns a boolean value of either true or false if the value exists inside the array.
             */
             function contains(array, value){
                //use a ternary operator to say if the value exists in the array
              let result = (array.indexOf(value) >= 0) ? true: false
             return result
             }
             module.exports.contains = contains;

             /**
              * Unique: A function that takes in an array as an input. It returns a new array with any duplicates removed.
              * @param { array }: The functions input is an array.
              * @return { array }: Returns a new array without any dupliactes from the input array
              * 
              */
             function unique(array){
                var newArray = []
            for(var i = 0; i < array.length; i++){
               if(_.indexOf(newArray, array[i]) < 0){
                
                newArray.push(array[i])
               }
               
            }
            
            return newArray;
            }
            module.exports.unique = unique;

            /**
             * Filter: A function that takes in an array, and a function. That function takes in array[i], i, array. 
             * It will call that function at each element of the array. If the argument is true it will return that element into a new array.
             * 
             * @param { array, function() }: The function takes an array and a function as input
             * @return {A new Array}: The function returns a new array with the elements that resolved true from the passed function.
             */
             function filter(array, func) {
                //create an empty array to store my values
                var newArray = []
                //loop through the array
                for(var i = 0; i < array.length; i++){
               // if the function which now has the values of the array looped index are true
                    if(func(array[i], i, array) == true){
                        //then push it to the empty array
                    newArray.push(array[i])
                    }
                }
                return newArray;
            }

            module.exports.filter = filter;

            /**
             * Rject: A function that takes in an array, and a function. That function takes in array[i], i, array. 
             * It will call that function at each element of the array. If the argument is false it will return that element into a new array.
             * 
             * @param { array, function() }: The function takes in an array.
             * @param { function() }: The function takes in a function.
             * @return {A new Array}: The function returns a new array with the elements that resolved false from the passed function.
             */

             let reject = (array, func) => {
                //empty array to store fale values
                var newArray = []
                //loop through my array
                for(var i = 0; i < array.length; i++){
             //if the function with the index values !== true
             if(func(array[i], i, array) !== true){
            //push them to the array
            newArray.push(array[i])
            //return the array
             }
                }return newArray
            }
            module.exports.reject = reject;

            /**
             * Partition: A function that takes in an array and a function. The fuction will be called at every iteration of the array. When it is true it will be placed in a new subarray
             * when it is false it will be placed in a different subarray. This function will return an array with both arrays seperated by true or false.
             * @param { array }: This function takes an array as a parameter.
             * @param { function }: This function takes a function as a parameter.
             * @return { Array of Arrays}: This function will return an array with two sub-arrays.
             */

             let partition = (array,func) => {
                //create empty subarrays
                var subArray = [[],[]]
                //loop through array
                for(var i = 0; i < array.length; i++){
                //if the func results to true
                if(func(array[i], i, array) === true){
                //push it to the zero index array
                subArray[0].push(array[i])
                }else{
                    //else push it to the 1 index array
                    subArray[1].push(array[i])
                }
                }
                //return the new subarray
                return subArray
                }
                module.exports.partition = partition;

                /**
                 * Map: This function takes in a collection of either and object or and array, and also a function. It returns a newArray with all the original values
                 * modified by the function from the input.
                 * @param { Object or Array}: This function takes an Object or an Array as input.
                 * @param { Function }: This function takes a function as input.
                 * @return { Array }: This function returns a new array, of elements that have been altered by the function input.
                 * 
                 */

                 let map = (collection, func) => {
                    //emptyArr
                    var emptyArr =[];
                    //if collection is array
                    if(Array.isArray(collection)){
                    //loop through array
                    for(var i =0; i < collection.length; i++){
                    //result = func(collection[i], i, collection) 
                    result = func(collection[i], i, collection) 
                        //push the result to the empty Array
                    emptyArr.push(result);
                    }
                    //else if collection is object
                    }else{
                    //loop thorough object with for in loop
                    for(var key in collection){
                    //result = func(collection[key], key, collection)
                    var result = func(collection[key], key, collection)
                    //push result to the empty array
                    emptyArr.push(result);
                    }
                    }
                    //return emptyArr
                    return emptyArr;
                    }
                    module.exports.map = map;

                    /**
                     * Pluck: This function takes in an Array of Objects, and an Object Key. It returns an array of the values of that key in every instance that key exists.
                     * @param { Array of Objects}: This funtion takes in an Array of Objects as the input.
                     * @param { Key }: This function takes in an Objects key.
                     * @return { Array }: This function returns an array of the value of they Key from every instance it exists in an object.
                     */
                     let pluck = (array, key) => {
                        return _.map(array, function(x) {
                          return x[key];
                        });
                      }
                      module.exports.pluck = pluck;

                      /**
                       * Every: This function takes in a collection (Object or Array), as well as a function. It will return a true or false statement based on if very value
                       * in the collection is true or false. If only one value is false its false, if every value is true its true.
                       * @param { Object or Array}: This function takes in either an Object or an Array
                       * @param { function }: This function takes in a Function. 
                       * @return { True or False }: This function returns a boolean statement true or false. Returns true if every value in the collection returns true
                       * to the iterating function call. Returns false if atleat one value returns false.
                       * 
                       */
                       function every(collection, func){
                        // determine if collectioin is array
                        if(Array.isArray(collection)){
                        // determine if func wasnt passed in
                        if (func === undefined){
                            for(let i = 0; i < collection.length; i++){
                        if(!collection[i]){
                            return false;
                        } // if the value is not truthy
                            }
                        }else {
                        for (var key in collection){
                            if (func(collection[key], key, collection) === false ){
                        return false;
                            }
                        }
                        }
                        //else it was
                        } else {   if (func === undefined)  {
                        
                        }   
                        
                        }
                        return true
                        }
                        module.exports.every = every;

                        /**
                         * Some: This function takes in a collection (Object or Array), and a function. It returns a true or false statment based on how the input function iterates
                         * through the collection. If atleast one value gives a true value when the function is applied to it. THe whole function returns true. If all are false
                         * it returns false.
                         * @param { Array or Object}: This function takes in an array or object as input.
                         * @param { Function }: This function takes in a function as input.
                         * @return {True or False} This function retunrs a true statement if atleast one of the values = true after the function has been called to it.
                         * This function will return false if all values = false after the function has iterated through it.
                         */

                         let some = (collection, func) => {
                            if(typeof func == 'function'){
                        //if collection is an array
                        if(Array.isArray(collection)){
                            //loop through array
                            for(var i = 0; i < collection.length; i++){
                                //function
                        //if atleast one of the index is true
                        var result = func(collection[i], i, collection);
                        if(result === true){
                            //return true
                            return true;
                        }
                            //else return false    
                        }
                            }
                            //else collection is object
                            //loop through object
                         else{for(var key in collection){
                        //function
                        //if at least one of the index is true
                        var result = func(collection[key], key, collection);
                        if(result === true){
                            return true;
                        }   
                        
                        }
                        }
                            }else if(typeof func !== 'function'){
                                if(Array.isArray(collection)){
                                    for(var i = 0; i < collection.length; i++){
                                        if(collection[i]){
                                            return true;
                                        }
                                    }
                                }else{
                                    for(var key in collection){
                                        if(collection[key]){
                                            return true;
                                        }
                                    }
                                }
                            }return false;
                        }
                        module.exports.some = some;

                        /**
                         * Reduce: A function that takes in an array. a function, and a seed value. It returns a single result based on what you tell the function to do.
                         * This function has an accumulator and a currentIndex value. The accumulator is set to = the value of the seed, and current is always the next value up in the index.
                         * @param { Array }: This function takes in an array.
                         * @param { Function }: This function takes in a function.
                         * @param { Seed Value }: THis function takes in a seed value
                         * @return { value }: This function returns a single value.
                         * 
                         */

                         let reduce = function(array, func, seed){
                            // create result variable
                            let result;
                        // determine if seed did did not recieve a value
                        if(seed === undefined){
                        result = array [0];
                        for (let i = 1; i < array.length; i++){
                            result = func(result, array[i], i, array);
                        }
                        }else {
                        result = seed;
                        for(let i = 0; i < array.length; i++){
                            result = func(result, array[i], i, array)
                        }
                        }
                        return result;
                        }
                        module.exports.reduce = reduce;

                        /**
                         * Extend: This function takes in any number of Objects. It then takes all the Objects after the first Object input, and assigns them into the first one.
                         * The function returns the original ObjectOne but with all the new properties added from the others.
                         * @param { Objects, ...objects }: The input is an infinite number of Objects.
                         * @return { Object }: The function returns the original first object with all the other object properties and values added into it.
                         * 
                         */
                         let extend = (objectOne, objectTwo, ...objects) => {
                            return Object.assign(objectOne, objectTwo, ...objects)
                            };

                            module.exports.extend = extend;
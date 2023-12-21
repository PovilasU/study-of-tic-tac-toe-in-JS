if (!Array.prototype.pmap) {
    Array.prototype.pmap = function(callback, thisArg) {
        if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function');
        }

        var array = Object(this);
        var length = array.length >>> 0;
        var result = new Array(length);

        for (var i = 0; i < length; i++) {
            if (i in array) {
                result[i] = callback.call(thisArg, array[i], i, array);
            }
        }

        return result;
    };
}


[1, 2, 3].pmap(function(x) {
    var stringArray = [];
    for (var i = 0; i < x; i++) {
        stringArray.push(x*x);
    }
  
   //return console.log(stringArray);
    return alert(stringArray);
} )
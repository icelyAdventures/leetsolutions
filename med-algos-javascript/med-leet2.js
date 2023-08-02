/**
 * 2622. Cache with Time Limit 
 * 
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

    The class has three public methods:
    set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. 
    Once the duration has elapsed, the key should be inaccessible. 
    The method should return true if the same un-expired key already exists and false otherwise. 
    Both the value and duration should be overwritten if the key already exists.

    get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

    count(): returns the count of un-expired keys.

    Example 1:
    Input: 
    ["TimeLimitedCache", "set", "get", "count", "get"]
    [[], [1, 42, 100], [1], [], [1]]
    [0, 0, 50, 50, 150]
    Output: [null, false, 42, 1, -1]
    Explanation:
    At t=0, the cache is constructed.
    At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
    At t=50, key=1 is requested and the value of 42 is returned.
    At t=50, count() is called and there is one active key in the cache.
    At t=100, key=1 expires.
    At t=150, get(1) is called but -1 is returned because the cache is empty.

    Example 2:
    Input: 
    ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
    [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
    [0, 0, 40, 50, 120, 200, 250]
    Output: [null, false, true, 50, 50, -1]
    Explanation:
    At t=0, the cache is constructed.
    At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
    At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
    At t=50, get(1) is called which returned 50.
    At t=120, get(1) is called which returned 50.
    At t=140, key=1 expires.
    At t=200, get(1) is called but the cache is empty so -1 is returned.
    At t=250, count() returns 0 because the cache is empty.
 * 
 */

    //solution 1: setTimeout
   var TimeLimitedCache = function(){
    this.hash = {};
   }

   TimeLimitedCache.prototype.set = function(key, value, duration){
    let isInHash = false;

    // if key/val is in hash, we need to clear the timeout 
    // to prevent the key being deleted at a random/unwanted time 
    if(this.hash[key] !== undefined){
        isInHash = true;
        let prevTimer = this.hash[key][1];
        clearTimeout(prevTimer)
    }

    //  add to hash / update hash
    let timerId = setTimeout(() => {
        delete this.hash[key];
    }, duration);

    // we can do this after the setTimeout, as setTimeout is async. 
    this.hash[key] = value [value, timerId];

    return isInHash;
   }

   TimeLimitedCache.prototype.get = function(key){
    return this.hash[key] !== undefined ? this.hash[key][0] : -1;
   }

   TimeLimitedCache.prototype.count = function(){
    return Object.keys(this.hash).length;
   }


//solution 2: using Date.now()

// class TimeLimitedCache {
//     constructor() {
//         this.data = {};
//     }

//     set(key, value, duration){
//         const currentTime = Date.now();
//         if(this.data[key] && this.data[key].expiration > currentTime){
//             this.data[key].value = value;
//             this.data[key].expiration = currentTime + duration;
//             return true;
//         } else {
//             this.data[key] = {
//                 value: value,
//                 expiration: currentTime + duration
//             };
//             return false;
//         }
//     }

//     get(key) {
//         const entry = this.data[key];
//         if(entry && entry.expiration > Date.now()){
//             return entry.value;
//         }
//         return -1;
//     }

//     count() {
//         const currentTime = Date.now();
//         let count = 0;
//         for(const key in this.data){
//             if(this.data[key].expiration > currentTime){
//                 count++;
//             }
//         }

//         return count;
//     }
// }
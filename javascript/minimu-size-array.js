// Minimum Size Subarray Sum

function MinimumSized(target, arr) {
    let minimalArray = [];
    let total = 0;
    for(let i=0; i < arr.length; i++) {
        if (total < target) {
            total += arr[i]
            minimalArray.push(arr[i])
        }
        else {
            break
        }
    }

    console.log(`the sub array is ${minimalArray} and the total is ${total}`)
}

MinimumSized(7, [2,3,1,2,4,3])
function union (arr1, arr2) {
    const result = []
    const seenPrimitives = new Set()
    const seenObjects = []

    function deepEqual (a, b) {
        return JSON.stringify(a) === JSON.stringify(b); // Simple deep comparison
    }

    const isPrimitive = (val) => {
        return val !== Object(val)
    }

    function processArray (arr) {
        for (item of arr) {
            if (!isPrimitive(item)) {
                const isSeenObject = seenObjects.some((val) => deepEqual(val, item))
                if (!isSeenObject) {
                    seenObjects.push(item)
                    result.push(item)
                }

            }
            else {
                if (!seenPrimitives.has(item)) {
                    seenPrimitives.add(item)
                    result.push(item)
                }
            }
        }

    }

    processArray(arr1)
    processArray(arr2)

    return result

}

const output = union([1, 2, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8])
console.log(output)
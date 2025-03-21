function union (arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError("Both arguments must be arrays.");
    }
    const result = []
    const seenPrimitives = new Set()
    const seenObjects = []

    function deepEqual (a, b) {
        // Handle NaN cases
        if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
            return true;
        }

        // Type check
        if (typeof a !== typeof b) return false;

        // Primitive values (including null/undefined)
        if (a === b) return true;

        // Handle non-object types after null check
        if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') return false;

        // Handle arrays
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length) return false;
            for (let i = 0; i < a.length; i++) {
                if (!deepEqual(a[i], b[i])) return false;
            }
            return true;
        }

        // Handle mixed array/object cases
        if (Array.isArray(a) || Array.isArray(b)) return false;

        // Handle objects
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;

        for (const key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
        }

        return true;
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
module.exports = union; 
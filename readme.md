# Problem Statement: Union of Two Arrays

## Function Requirements

Write a function `union` that takes in two arrays (`arr1` and `arr2`) and returns a new array that is the **union** of the two input arrays.

### 1. Remove Duplicates
- Ensure that the resulting array contains **no duplicate values**.
- Duplicates should be determined using **deep equality** for objects and arrays (i.e., two objects or arrays with the same structure and values should be considered equal).

### 2. Preserve Order
- The order of elements in the resulting array should match the order in which they **first appear** in the input arrays (`arr1` first, followed by `arr2`).

### 3. Handle All Data Types
The function should work for:
- **Primitive values** (e.g., `numbers`, `strings`, `booleans`, `null`, `undefined`, `NaN`).
- **Objects** (including **nested objects**).
- **Arrays** (including **nested arrays**).

### 4. Avoid Using `JSON.stringify`
- Do **not** rely on `JSON.stringify` for deep equality checks, as it has limitations (e.g., property order, handling of functions, circular references).

### 5. Efficiency
- The function should be **efficient**, especially for large arrays or deeply nested structures.

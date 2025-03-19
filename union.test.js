const union = require('./index'); // Import the function from index.js

describe('union function', () => {
    test('merges arrays with unique primitive values', () => {
        expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('handles duplicate primitive values correctly', () => {
        expect(union([1, 1, 2], [2, 3, 3])).toEqual([1, 2, 3]);
    });

    test('handles NaN values correctly', () => {
        expect(union([NaN, 1, 2], [NaN, 2, 3])).toEqual([NaN, 1, 2, 3]);
    });

    test('handles empty arrays', () => {
        expect(union([], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('handles objects and arrays correctly', () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const arr1 = [1, 2];

        expect(union([obj1, arr1], [obj1, obj2])).toEqual([obj1, arr1, obj2]);
    });

    test('treats deeply equal objects as the same', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 1 };

        expect(union([obj1], [obj2])).toEqual([obj1]); // obj2 should be ignored as it's deeply equal to obj1
    });

    test('handles mixed types (numbers, strings, objects)', () => {
        const obj1 = { x: 10 };
        expect(union([1, "hello", obj1], ["hello", { x: 10 }, 2])).toEqual([1, "hello", obj1, 2]);
    });
});

const { newArray, filteredArray, findStuff, reduceArray } = require('./02');



describe('newArray function', () => {
	it('returns results of callback in new array', () => {
		const array = [
            1,
            2,
            3,
       ];
       const callback = x => x + 1;

       expect(newArray(array, callback)).toEqual([2, 3, 4])

	});
});

describe('filteredArray function', () => {
	it('returns on elements that are true', () => {
		const array = [
            1,
            2,
            3,
       ];
       const callback = n => n === 2;

       expect(filteredArray(array, callback)).toEqual([2])

	});
});

describe('findStuff', () => {
	it('returns first item that returns true', () => {
		const array = [
            1,
            2,
            3,
       ];
       const callback = n => n === 2;

       expect(findStuff(array, callback)).toEqual(2)

	});

    it('returns -1 if no items return true', () => {
		const array = [
            1,
            3,
       ];
       const callback = n => n === 2;

       expect(findStuff(array, callback)).toEqual(-1)

	});

    describe('reduceArray', () => {
        it('returns the sum of initial value and items in array', () => {
            const array = [
                1,
                2,
                3,
           ];
           const callback = (a, b) => a + b;
           const initialValue = 10;
    
           expect(reduceArray(array, callback, initialValue)).toEqual(16)
    
        });
        it('returns the sum of the array with the first item as the acumm', () => {
            const array = [
                1,
                2,
                3,
           ];
           const callback = (a, b) => a + b;
           const initialValue = 10;
    
           expect(reduceArray(array, callback, initialValue)).toEqual(16)
    
        });

    });
    
});

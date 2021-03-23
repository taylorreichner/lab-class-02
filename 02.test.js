const { newArray, filteredArray } = require('./02');



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

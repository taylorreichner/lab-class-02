const { newArray } = require('./02');



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
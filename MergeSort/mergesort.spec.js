describe ('Split Array Function', function(){
    it ('is able to split an array into two halves', function(){
        expect(splitArray([10, 20, 5, 3, 4])).toEqual([10,20],[5,3,4]);
        expect(splitArray([10,20])).toEqual([[10],[20]]);
        expect(splitArray([10])).toEqual([10]);
    });
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect(splitArray( [ [3,4,5], [10,20] ] )).toEqual( [3,4,5,10,20] );
    });
});

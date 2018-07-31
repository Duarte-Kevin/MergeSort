describe('Merge Sort',function(){

        describe ('Split Array Function', function(){

            it ('takes empty array and returns two arrays', function(){
                expect(splitArray([])).toEqual([[],[]]);
            });
            it ('takes single array and splits into two', function(){
                expect(splitArray([5,10])).toEqual([[5],[10]]);
            });
            it ('takes odd number array and splits into two halves', function(){
                expect(splitArray([5,10,30,15,20])).toEqual([[5,10],[30,15,20]]);
            });

        });


    describe('Merge function', function(){
        it('is able to merge two sorted arrays into one sorted array', function(){

            it ('merges two empty arrays to one', function(){
            expect(splitArray( [ [], [] ] )).toEqual( [] );
            });
            it ('merges ', function(){
            expect(splitArray( [ [3,4,5], [10,20] ] )).toEqual( [3,4,5,10,20] );
            });
            it ('takes empty array and returns two arrays', function(){{
            expect(splitArray( [ [3,4,5], [10,20,30] ] )).toEqual( [3,4,5,10,20,30] );
            });
        });
    });

    describe('Merge Sort function', function(){
        it('is able to merge two sorted arrays into one sorted array', function(){
            expect(splitArray( [ [] ] )).toEqual( [] );
            expect(splitArray( [ [30,55,5,10,22,60] ] )).toEqual( [5,10,22,30,55,60] );
        });
    })



});

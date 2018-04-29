const expect = require('expect');

const utils = require('./utils');


describe('Utils Area', () => {

    describe('#add', () => {
        it('Should add two numbers', () => {
            var res = utils.add(24, 20);

            //if(res !== 44) {
            //throw new Error(`Expected 44 but found ${res}.`);
            //}
            //expect(typeof res).toBe(44).toBeAn('number');

            expect(res).toBe(44);
            expect(typeof res).toBe('number');
        });
    });

    it('Should square a number', () => {
        var sq = utils.square(3);

        // if(sq === 25 ) {
        //     throw new Error('Can\'t be 25');
        // }

        expect(sq).toBe(9);
        expect(typeof sq).toBe('number');

    });

    it('Should expect some values', () => {
        expect(12).not.toBe(122);
    });

    it('Should expect some values', () => {
        //expect({name: 'shawon'}).toEqual({name: 'shawon'});
        // not possible bcz this is object
        //expect({name: 'shawon'}).toEqual({name: 'shawon'});
        expect({
            name: 'Shawon'
        }).not.toEqual({
            name: 'shawon'
        });
    });

    it('Should expect some values', () => {
        expect([2, 3, 5]).not.toContain(51);
        // /expect([2,3,5]).not.toContain(51);
    });

    it('should expect som values', () => {
        expect({
            name: 'shawon',
            age: 23,
            location: 'Noakhali'
        }).not.toMatchObject({
            age: 25
        })
    });

    it('Should set firstName and lastName', () => {
        var user = {
            location: 'Noakhali',
            age: 25
        };
        var res = utils.setName(user, 'Shakhawat Shawon');
        expect(res).toMatchObject({
            firstname: 'Shakhawat',
            lastname: 'Shawon'
        });
    });

    // Asynchronous

    it('Should async and two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7);
            expect(typeof sum).toBe('number');
            done();
        });
    });

    it('Should async Square a number', (done) => {
        utils.asyncSquare(4, (sq) => {
            expect(sq).toBe(16);
            expect(typeof sq).toBe('number');
            done();
        });
    });
});









//

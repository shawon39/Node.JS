const expect = require('expect');

describe('App', () => {

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });
});

//    v21+ is manage by jest ( ALL Done without spies missing )
// should decrease expect version under v21

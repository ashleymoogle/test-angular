describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

describe('promiseTest', () => {
    it('should resolve a promise', function() {
        return Promise.resolve(2 + 2).should.eventually.equal(4);
    })
});

describe('Angular App', () => {
    console.log('TESTING ANGULAR')

    let mainCtrl
    let scope

    beforeEach(angular.mock.module('app'))

    beforeEach(inject(($rootScope, $controller) => {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {$scope: scope});
    }));


    it('should have a ctrl', function(){
        expect(mainCtrl).to.not.equal(undefined)
    })

    describe('mainCtrl',function() {
        it('should init items with the correct length', () => {
            assert.equal(3,mainCtrl.items.length)
        })

        it('should init items with "Cat" as first prop name', () => {
            assert.equal("Cat", mainCtrl.items[0].name)
        })

        it('should add a new item with a name and a desc', () => {
            let model = {
                "name": "Test",
                "desc": "Les test c'est chiant mais cool"
            }
            mainCtrl.model = model
            mainCtrl.addItem()
            expect(mainCtrl.items[mainCtrl.items.length-1]).to.equal(model)
            expect(mainCtrl.model).to.have.property("name").to.equal("")
        })
    })
});

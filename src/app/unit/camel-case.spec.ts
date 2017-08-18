import  'camel-case/camel-case.js'
describe('camel-case', ()=>{
    it('should just test', ()=>{
        spyOn(module, 'exports').and.returnValue('Hello World')
        module.exports();
        expect(module.exports).toHaveBeenCalled()
    })
})
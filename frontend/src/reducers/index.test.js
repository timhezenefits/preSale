const index = require("./index")
// @ponicode
describe("index.default", () => {
    test("0", () => {
        let callFunction = () => {
            index.default({}, "remove")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.default("Alabama", "SHUTDOWN")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.default("Alabama", { type: "RECEIVE_MESSAGE" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.default({}, "SHUTDOWN")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.default({}, "install")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.default(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

import {capitalize} from "./StringUtils";

describe('StringUtils', () => {
    it('should capitalize a string', () => {
        const before = "hello world", after = "Hello World";
        expect(capitalize(before)).toEqual(after);
    })
});
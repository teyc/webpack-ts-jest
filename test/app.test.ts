import { add } from 'app'

describe('calculator test', () => {
    it('adds 2+2', () => {
        expect(add(2, 2)).toBe(4);
    })
})
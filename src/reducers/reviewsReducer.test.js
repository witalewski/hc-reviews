import { reviewsReducer } from './reviewsReducer';

describe("reviewsReducer", () => {
    it("returns default state", () => {
        const result = reviewsReducer(undefined, {type: ''});
        expect(result).toBeDefined();
    })
})
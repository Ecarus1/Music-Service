import { DateUtils } from './date';

describe('DateUtils', () => {
    describe('fromISO', () => {
        it('should be valid for correct date', () => {
            const initial: string = '2019-11-30T10:16:47.789Z';
            const result = DateUtils.fromISO(initial);
            expect(result.getUTCFullYear()).toBe(2019);
        })
    });
});

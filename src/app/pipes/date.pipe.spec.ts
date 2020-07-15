import { DatePipe } from './date.pipe';
describe('DateCasePipe', () => {
    let pipe = new DatePipe()
    it('transform "2020-07-11T14:58:48.000Z" to "5 days ago"', () => {
        expect(pipe.transform('2020-07-11T14:58:48.000Z', [])).toBe('4 days ago');
    });
});
import { DatePipe } from './date.pipe';
import * as moment from 'moment';

describe('DateCasePipe', () => {
    let pipe = new DatePipe()
    it('transform "2020-07-11T14:58:48.000Z" to "5 days ago"', () => {
        expect(pipe.transform('2020-07-11T14:58:48.000Z', [])).toBe(moment('2020-07-11T14:58:48.000Z').fromNow());
    });
});
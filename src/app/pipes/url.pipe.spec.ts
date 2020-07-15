import { UrlPipe } from './url.pipe';
describe('UrlCasePipe', () => {
    let pipe = new UrlPipe();
    it('trasnsform "http://www.google.com" to "www.google.com"', () => {
        expect(pipe.transform('http://www.google.com', [])).toBe('www.google.com')
    });

    it('transform "https://www.youtube.com/watch?v=WYPNjSoDrqw" to "www.youtube.com"', () => {
        expect(pipe.transform('https://www.youtube.com/watch?v=WYPNjSoDrqw', [])).toBe('www.youtube.com')
    });
});
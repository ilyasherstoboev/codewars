import { describe, it, expect } from 'vitest';
import { generateBC } from './index';

const compareResults = (actual, expected) => {
  expect(actual).toBe(expected);
};

describe('Basic Tests', () => {
  it('1', () => {
    compareResults(
      generateBC(
        'mysite.com/pictures/holidays.html', 
        ' : '
      ), 
      '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
    );
  });
  it('2', () => {
    compareResults(
      generateBC(
        'www.codewars.com/users/GiacomoSorbi', 
        ' / '
      ), 
      '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
    );
  });
  it('3', () => {
    compareResults(
      generateBC(
        'www.microsoft.com/important/confidential/docs/index.htm#top', 
        ' * '
      ), 
      '<a href="/">HOME</a> * <a href="/important/">IMPORTANT</a> * <a href="/important/confidential/">CONFIDENTIAL</a> * <span class="active">DOCS</span>'
    );
  });
  it('4', () => {
    compareResults(
      generateBC(
        'mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.asp', 
        ' > '
      ), 
      '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
    );
  });
  it('5', () => {
    compareResults(
      generateBC(
        'www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi', 
        ' + '
      ), 
      '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
    );
  });
  it('6', () => {
    compareResults(
      generateBC(
        'pippi.pi/paper-surfer-to-biotechnology-pippi-insider/most-downloaded/and-and-research-with-cauterization-diplomatic-surfer-cauterization/at-a-uber-with-bed-at-with-to-of-diplomatic-surfer-to/secret-page.htm', 
        ' * '
      ), 
      '<a href="/">HOME</a> * <a href="/paper-surfer-to-biotechnology-pippi-insider/">PSBPI</a> * <a href="/paper-surfer-to-biotechnology-pippi-insider/most-downloaded/">MOST DOWNLOADED</a> * <a href="/paper-surfer-to-biotechnology-pippi-insider/most-downloaded/and-and-research-with-cauterization-diplomatic-surfer-cauterization/">RCDSC</a> * <a href="/paper-surfer-to-biotechnology-pippi-insider/most-downloaded/and-and-research-with-cauterization-diplomatic-surfer-cauterization/at-a-uber-with-bed-at-with-to-of-diplomatic-surfer-to/">UBDS</a> * <span class="active">SECRET PAGE</span>'
    );
  });
  it('7', () => {
    compareResults(
      generateBC(
        'https://www.github.com/most-viewed/giacomo-sorbi.htm?referral=CodeWars', 
        ' >>> '
      ), 
      '<a href="/">HOME</a> >>> <a href="/most-viewed/">MOST VIEWED</a> >>> <span class="active">GIACOMO SORBI</span>'
    );
  });

  it('8', () => {
    compareResults(
      generateBC(
        'twitter.de', 
        ' : '
      ), 
      '<span class="active">HOME</span>'
    );
  });

  it('9', () => {
    compareResults(
      generateBC(
        'codewars.com/games/app/transmutation-for-bed-a-from-meningitis/immunity-for-insider-of-insider-insider-uber-a-for?order=desc&filter=adult', 
        ' + '
      ), 
      '<a href="/">HOME</a> + <a href="/games/">GAMES</a> + <a href="/games/app/">APP</a> + <a href="/games/app/transmutation-for-bed-a-from-meningitis/">TBM</a> + <span class="active">IIIIU</span>'
    );
  });
});

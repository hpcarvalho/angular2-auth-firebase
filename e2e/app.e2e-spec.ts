import { WebappFirebsePage } from './app.po';

describe('webapp-firebse App', function() {
  let page: WebappFirebsePage;

  beforeEach(() => {
    page = new WebappFirebsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

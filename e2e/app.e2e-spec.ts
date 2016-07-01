import { IdentityDetectivePage } from './app.po';

describe('identity-detective App', function() {
  let page: IdentityDetectivePage;

  beforeEach(() => {
    page = new IdentityDetectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

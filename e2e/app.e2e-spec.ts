import { MyAuthFrontPage } from './app.po';

describe('my-auth-front App', () => {
  let page: MyAuthFrontPage;

  beforeEach(() => {
    page = new MyAuthFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

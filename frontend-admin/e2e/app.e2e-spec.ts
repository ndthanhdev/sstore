import {FrontendAdminPage} from './app.po';

describe('frontend-admin App', () => {
  let page: FrontendAdminPage;

  beforeEach(() => {
    page = new FrontendAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('frontend-admin works!');
  });
});

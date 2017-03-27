import { A2HttpCliJsonServer2Page } from './app.po';

describe('a2-http-cli-json-server2 App', () => {
  let page: A2HttpCliJsonServer2Page;

  beforeEach(() => {
    page = new A2HttpCliJsonServer2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

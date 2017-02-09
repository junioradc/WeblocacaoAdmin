import { WeblocacaoAdminPage } from './app.po';

describe('weblocacao-admin App', function() {
  let page: WeblocacaoAdminPage;

  beforeEach(() => {
    page = new WeblocacaoAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { RecipeMasterPage } from './app.po';

describe('recipe-master App', function() {
  let page: RecipeMasterPage;

  beforeEach(() => {
    page = new RecipeMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});

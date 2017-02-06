import { NgCliWebpackSample30Page } from './app.po';

describe('ng-cli-webpack-sample30 App', function() {
  let page: NgCliWebpackSample30Page;

  beforeEach(() => {
    page = new NgCliWebpackSample30Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

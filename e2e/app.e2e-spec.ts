import { NgCliWebpackSample1Page } from './app.po';

describe('ng-cli-webpack-sample1 App', () => {
  let page: NgCliWebpackSample1Page;

  beforeEach(() => {
    page = new NgCliWebpackSample1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

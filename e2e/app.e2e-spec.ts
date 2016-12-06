import { NgCliWebpackSample22Page } from './app.po';

describe('ng-cli-webpack-sample22 App', function() {
  let page: NgCliWebpackSample22Page;

  beforeEach(() => {
    page = new NgCliWebpackSample22Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

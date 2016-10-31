import { NgCliWebpackSample18Page } from './app.po';

describe('ng-cli-webpack-sample18 App', function() {
  let page: NgCliWebpackSample18Page;

  beforeEach(() => {
    page = new NgCliWebpackSample18Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

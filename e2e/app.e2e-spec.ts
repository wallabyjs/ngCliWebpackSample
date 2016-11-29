import { NgCliWebpackSample21Page } from './app.po';

describe('ng-cli-webpack-sample21 App', function() {
  let page: NgCliWebpackSample21Page;

  beforeEach(() => {
    page = new NgCliWebpackSample21Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { NgCliWebpackSamplePage } from './app.po';

describe('ng-cli-webpack-sample App', function() {
  let page: NgCliWebpackSamplePage;

  beforeEach(() => {
    page = new NgCliWebpackSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

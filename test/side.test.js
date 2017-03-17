import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import App from '../src/js/components/App';

describe('首页侧边栏测试', function() {
  it('数量测试，item数应为4', function() {
    let app = render(<App />);
    let sideItems = app.find('.side').find('div.item');
    expect(sideItems.length).to.equal(4);
  });
});

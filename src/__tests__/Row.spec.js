import React from 'react';
import { shallow } from 'enzyme';
import Row from '../Row';

describe('Row', () => {
  it('should render .row markup', () => {
    const wrapper = shallow(<Row />);

    expect(wrapper.html()).toBe('<div class="row"></div>');
  });

  it('should render children', () => {
    const wrapper = shallow(<Row>Children</Row>);

    expect(wrapper.html()).toBe('<div class="row">Children</div>');
  });

  it('should pass additional classNames', () => {
    const wrapper = shallow(<Row className="extra" />);

    expect(wrapper.hasClass('extra')).toBe(true);
    expect(wrapper.hasClass('row')).toBe(true);
  });

  it('show render noGutters classes', () => {
    const wrapper = shallow(<Row noGutters />);

    expect(wrapper.hasClass('no-gutters')).toBe(true);
    expect(wrapper.hasClass('row')).toBe(true);
  });
});

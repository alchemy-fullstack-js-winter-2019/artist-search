import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';


describe('<Paging />', () => {
  it('can paginate', () => {
    const decrement = jest.fn();
    const increment = jest.fn();
    const wrapper = shallow(<Paging
      currentPage={2}
      totalPages={4}
      decrement={decrement}
      increment={increment}
    />);
    wrapper.find('.back').simulate('click');
    wrapper.find('.forward').simulate('click');

    expect(decrement).toBeCalled();  
    expect(increment).toBeCalled();  
  });
});

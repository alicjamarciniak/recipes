import Header from './Header'
import { shallow } from 'enzyme';

describe('Header.js ', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  test('has title "All recipes"', () => {
    const title = wrapper.find('.title')
    expect(title).toHaveLength(1)
    expect(title.text()).toContain('My recipes')
  })
})

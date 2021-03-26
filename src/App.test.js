import App from './App';
import { shallow } from 'enzyme';

describe('App.js ', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('render Header Component with title "All recipes"', () => {
    const header = wrapper.find('Header')
    expect(header).toHaveLength(1)
  })
})



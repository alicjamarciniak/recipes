import Recipe from './Recipe';
import { shallow } from 'enzyme';

describe('Recipe.js ', () => {
  let wrapper
  const mockProps = {
    match: { params: { recipeId: 123 } }
  }


  beforeEach(() => {
    wrapper = shallow(<Recipe {...mockProps} />)
  })

  test('...', () => {
  })
})



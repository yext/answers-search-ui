import { configure } from 'enzyme';
import AnswersAdapter from './enzymeadapter';

configure({ adapter: new AnswersAdapter() });

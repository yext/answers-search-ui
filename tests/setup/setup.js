import { configure } from 'enzyme';
import AnswersAdapter from './enzymeadapter';
import 'regenerator-runtime/runtime';

configure({ adapter: new AnswersAdapter() });

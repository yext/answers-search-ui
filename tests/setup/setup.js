import { configure } from 'enzyme';
import AnswersAdapter from './enzymeadapter';
import regeneratorRuntime from 'regenerator-runtime/runtime';
global.regeneratorRuntime = regeneratorRuntime;
configure({ adapter: new AnswersAdapter() });

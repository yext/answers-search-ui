import { configure } from 'enzyme';
import AnswersAdapter from './enzymeadapter';
import flatMap from 'array.prototype.flatmap';

configure({ adapter: new AnswersAdapter() });
flatMap.shim();

import { configure } from 'enzyme';
import AnswersAdapter from './enzymeadapter';
import flatMap from 'array.prototype.flatmap';
import padStart from 'string.prototype.padstart';

configure({ adapter: new AnswersAdapter() });
flatMap.shim();
padStart.shim();

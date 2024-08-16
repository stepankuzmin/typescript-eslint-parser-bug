import earcut from 'earcut';
import {test} from './test.js';

const result = earcut([], []);

test(result);

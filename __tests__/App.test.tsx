/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Mock do react-native-linear-gradient para evitar erro de importação no Jest
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

// Note: import explicitly to use the types shipped with jest.
import {it, jest} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

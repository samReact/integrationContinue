import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import App, { API_ROOT_PATH } from './App';

describe('App', () => {
  const serverRessource = { text: 'API response' };

  beforeEach(() => {
    fetchMock.mock(API_ROOT_PATH, serverRessource);
  });

  afterEach(() => {
    fetchMock.reset();
  });

  describe('before ressource fetched', () => {
    it('renders text "React App"', () => {
      const AppWrapper = shallow(<App />);

      expect(AppWrapper.text()).toEqual('React App');
    });
  });

  describe('after ressource fetched', () => {
    it('renders ressource text', async () => {
      const AppWrapper = shallow(<App />);

      await AppWrapper.instance().componentDidMount();
      expect(AppWrapper.text()).toEqual(serverRessource.text);
    });
  });
});

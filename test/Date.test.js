import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Date from '../js/components/Message/Types/JSObject/Date';
import data from "./data/Date.js";

describe('Date', () => {

  data.forEach((testObj, testName) => {
    it(`should render a ${testName}`, () => {
      const message = testObj.responsePacket.result;

      const rendered = shallow(<Date message={message} />);
      expect(rendered.text()).toContain(testObj.consoleOutput);
    });
  })
});

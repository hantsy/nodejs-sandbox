import React from 'react';
import ReactDOM from 'react-dom';
import PositiveCounter from './PositiveCounter';
import renderer from 'react-test-renderer';

it('should render 0', () => {
  const tree = renderer.create(<PositiveCounter />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('should render 2', () => {
  const component = renderer.create(<PositiveCounter />);
  component.getInstance().increment();
  component.getInstance().increment();
  expect(component.toJSON()).toMatchSnapshot();
});
it('should not go negative', () => {
  const component = renderer.create(<PositiveCounter />);
  component.getInstance().increment();
  component.getInstance().decrement();
  component.getInstance().decrement();
  expect(component.toJSON()).toMatchSnapshot();
});

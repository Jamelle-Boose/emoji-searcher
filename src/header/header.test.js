import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';

describe('header', () => {
  const tree = renderer.create(<Header />).toJSON();

  test('should match snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  test('should be non-empty', () => {
    expect(tree.children).toBeNonEmptyArray();
  });

  test('should have three children', () => {
    expect(tree.children.length).toBe(3);
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import Helloworld from './';

test('Link changes the class when hovered', () => {
    const component = renderer.create(
        <Helloworld page="http://www.facebook.com">Facebook</Helloworld>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
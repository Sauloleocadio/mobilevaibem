import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Proptypes from 'prop-types';

import {Container, TInput, ButtonInput} from './styles';

function Input({style, icon, ...rest}) {
  return (
    <Container style={style}>
      <ButtonInput>
        {icon && <Icon name={icon} size={20} color="#ccc" />}
      </ButtonInput>
      <TInput {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: Proptypes.string,
  style: Proptypes.oneOfType([Proptypes.object, Proptypes.array]),
  name: Proptypes.string,
};

Input.defaultProps = {
  icon: null,
  style: {},
  name: null,
};

Input.displayName = 'Input';

export default Input;

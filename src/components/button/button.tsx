import PropTypes, { InferProps } from 'prop-types';
import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';

const props = {
  basic: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  ghost: PropTypes.bool,
  onDark: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
};

type ButtonProps = InferProps<typeof props>;

const StyledButton = styled.button<ButtonProps>`
  outline: none;
  user-select: none;
  cursor: pointer;
  box-shadow: none;
  text-align: center;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  color: var(--font-on-primary);
  background-color: var(--primary);
  border-radius: 0.25rem;
  font-weight: bold;
  transition: background-color 240ms ease-in-out;
  border: 2px solid var(--primary);

  &:hover {
    background-color: var(--primary-darken);
  }

  ${({ basic }) =>
    basic &&
    css`
      background-color: rgba(0, 0, 0, 0);
      color: var(--primary);

      &:hover {
        background-color: var(--primary-transparent);
      }
    `}

  ${({ onDark, ghost }) =>
    ghost &&
    css`
      background-color: transparent;
      border-color: transparent;
      color: ${onDark ? 'var(--font-on-primary)' : 'var(--primary)'};

      &:hover {
        background-color: var(--primary-transparent);
      }
    `}
`;

export default function Button({ children, ...props }: ButtonProps): ReactElement {
  return <StyledButton {...props}>{children}</StyledButton>;
}

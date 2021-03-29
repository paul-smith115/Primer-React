import React from 'react'
import styled, {css} from 'styled-components'
import {get} from '../constants'

export interface HeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  variant: 'subtle' | 'filled'
  title: string
  auxiliaryText?: string
}

const StyledHeader = styled.div<{variant: HeaderProps['variant']}>`
  padding: calc((${get('space.3')} - ${get('space.1')}) / 2) ${get('space.2')};
  font-size: ${get('fontSizes.0')};
  font-weight: ${get('fontWeights.bold')};
  color: ${get('colors.text.secondary')};

  ${({variant}) =>
    variant === 'filled' &&
    css`
      background: ${get('colors.bg.gray')};
      margin: ${get('space.2')} -${get('space.2')};
      border-top: 1px solid ${get('colors.border.gray')};
      border-bottom: 1px solid ${get('colors.border.gray')};

      &:first-child {
        margin-top: 0;
      }
    `}
`

export function Header({variant, title, auxiliaryText, children: _children, ...props}: HeaderProps): JSX.Element {
  return (
    <StyledHeader role="heading" variant={variant} {...props}>
      {title}
      {auxiliaryText && <span>auxiliaryText</span>}
    </StyledHeader>
  )
}

import React, { forwardRef } from 'react'
import { node, oneOf, string } from 'prop-types'

import * as S from './styles'

export const Link = forwardRef(({ children, target, variant = 'primary', ...rest }, ref) => (
  <S.Link
    data-testid="link"
    ref={ref}
    // for security
    rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    target={target}
    variant={variant}
    {...rest}
  >
    {children}
  </S.Link>
))

Link.displayName = 'Link'
Link.propTypes = {
  children: node,
  target: string,
  variant: oneOf(['primary', 'secondary'])
}
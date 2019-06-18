import React, { forwardRef } from 'react'
import { node, oneOf } from 'prop-types'

import * as S from './styles'

export const Hint = forwardRef(({ children, variant }, ref) => (
  <S.Hint data-testid="hint" ref={ref} variant={variant}>
    {children}
  </S.Hint>
))

Hint.displayName = 'Hint'

Hint.propTypes = {
  /** Node component from parent */
  children: node,
  /** Variant of component */
  variant: oneOf(['warning', 'error'])
}

/* eslint-disable react/prop-types */
import React from 'react'

import { BulbIcon } from '../../../../icons/Bulb'
import { Select } from '../../../../packages/Select'

export const ThemeSelect = ({ setTheme, value }) => (
  <Select
    icon={<BulbIcon color="dark.900" />}
    name="theme"
    onChange={setTheme}
    options={[
      { value: 'core', label: 'Core Theme (default)' },
      { value: 'dark', label: 'Dark Core Theme' },
      { value: 'welcome', label: 'Welcome Theme' }
    ]}
    placeholder="Choose a theme"
    size="sm"
    value={value}
  />
)

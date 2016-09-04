import React from 'react'

import power from './assets/ic_power_settings_new_black_24px.svg'

const iconFor = (name) => {
  return { __html: power };
}

export default function({ name, className='' }) {
  return <div style="line-height: 0" className={ `icon ${className}` } dangerouslySetInnerHTML={iconFor(name)}></div>;
}

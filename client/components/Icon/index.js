import React from 'react'

import power from './assets/ic_power_settings_new_black_24px.svg'
import dropdown_up from './assets/ic_arrow_drop_up_black_24px.svg'
import dropdown_down from './assets/ic_arrow_drop_down_black_24px.svg'

const iconFor = (name) => {
  let icon;

  switch (name) {
    case 'power':
      icon = power;
      break;
    case 'dropdown_down':
      icon = dropdown_down;
      break;
    case 'dropdown_up':
      icon = dropdown_up;
      break;
  }

  return { __html: icon };
}

export default function({ name, className='' }) {
  return <div style="line-height: 0" className={ `icon ${className}` } dangerouslySetInnerHTML={iconFor(name)}></div>;
}

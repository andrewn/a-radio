import React from 'react';

import SteppedRange from '../SteppedRange';

const InputRange = (props) => <input type="range" { ...props } />

export default class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value
      });
    }
  }
  render({value, onChange}) {
    const handleChange = evt => {
      const value = parseInt(evt.target.value, 10);
      this.setState({
        value
      });
      onChange(value);
    }
    return <div className="volume">
      <SteppedRange min="0" max="100" step="5" value={ this.state.value } onChange={ handleChange } />
    </div>;
  }
}

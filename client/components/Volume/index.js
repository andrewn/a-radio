import React from 'react';

export default class Volume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
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
      <input type="range" min="0" max="100" step="5" value={ this.state.value } onChange={ handleChange } />
    </div>;
  }
}

import React from 'react';

import Icon from '../Icon';

import styles from './styles.css';

const Service = ({title, logos, active=false, onClick}) => {
  return <div className={`service-list-service ${active ? 'is-active' : 'is-inactive'}`} onClick={onClick}>
    <img className="service-list-image service-list-image-active" src={logos.active} title={title}/>
    <img className="service-list-image service-list-image-inactive" src={logos.inactive} title={title}/>
  </div>;
}

export default class ServiceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      listHeight: 0
    };

    this.updateComponentHeight = this.updateComponentHeight.bind(this);
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }
  updateComponentHeight(isOpening) {
    console.log('updateComponentHeight');
    if (isOpening === true) {
      const currentHeight = this.listEl.style.height;
      this.listEl.style.height = 'auto';
      const listHeight = this.listEl.getBoundingClientRect().height;
      this.listEl.style.height = currentHeight;
      this.setState({ listHeight });
    } else {
      this.setState({ listHeight: 0 });
    }
  }
  render() {
    const { services, currentService='', onServiceSelect } = this.props;
    const { isOpen, listHeight } = this.state;
    const handleToggle = () => {
      this.updateComponentHeight(!isOpen);
      this.setState({ isOpen: !isOpen });
    };
    const iconName = isOpen ? "dropdown_up" : "dropdown_down";

    return (
      <div className="service-list-wrapper">
        <h2 className="service-list-hd" onClick={ handleToggle }>
          Stations <Icon name={iconName} className="service-list-icon" />
        </h2>
        <ul className={ `service-list ${ isOpen === true ? 'is-open' : 'is-closed' }` }
          ref={ el => this.listEl = el }
          style={{ height: listHeight }}>
          {
            services.map( s => {
              return (
                <li key={s.id}>
                  <Service
                    {...s}
                    active={currentService === s.id}
                    onClick={ onServiceSelect.bind(null, s.id) } />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

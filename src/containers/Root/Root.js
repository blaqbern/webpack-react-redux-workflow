import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import DevTools from '../../containers/DevTools';
import styles from './root.css';

class Root extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Header title={'The Title!'}/>
        <MainContent />
        {__NO_DEV_TOOLS__ ? null : <DevTools />}
      </div>
    );
  }
}

export default Root;

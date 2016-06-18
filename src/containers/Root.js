import React, { Component } from 'react'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import DevTools from './DevTools'
import styles from './css/root.css'

class Root extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Header title={'The Full Title!'}/>
        <MainContent />
        {__NO_DEV_TOOLS__ ? null : <DevTools />}
      </div>
    )
  }
}

export default Root

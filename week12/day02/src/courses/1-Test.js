import ThemeContext from './ThemeContext'
import React, {Component } from 'react'
import ReactDOM from 'react-dom'

export default function Theme (props) {
  return (<ThemeContext.Consumer>
      {
        value => {
          return <button className={`btn btn-${value.theme}`}>{value.theme}</button>
        }
      }
    </ThemeContext.Consumer>)
}
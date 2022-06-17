import React, { Component } from 'react'

export default function New ( props){
  return(
    <div className="new">
        <div className="new_data">
          <p className="data">props.data</p>
          <h3>props.title</h3>
          <p className="desk">props.desk</p>
          <a className="read_more" href={props.htef}>read more</a>
        </div>
        <img src={props.img}></img>
      </div>
  )
}


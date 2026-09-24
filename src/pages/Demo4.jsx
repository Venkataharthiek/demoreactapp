import React from 'react'

export default function Demo4(props) {
  return (
    <div>
        <h3>Props Demo</h3>
        <p>a={props.a}</p>
        <p>txt={props.txt}</p>
        <p>emp.id={props.emp.id}</p>
        <p>emp.name={props.emp.name}</p>
        <p>emp.salary={props.emp.salary}</p>
        <p>emp.gender={props.emp.gender}</p>
    </div>
  )
}


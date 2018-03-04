import React from 'react'

export default class Hello extends React.Component {
   constructor () {
     super()
     this.greeting = 'Hello World'
   }

   render () {
     return (
      <div>
        <h1>{this.greeting}</h1>
        <h2>Minimalist ReacTamvan</h2>
      </div>
     )
   }
 }

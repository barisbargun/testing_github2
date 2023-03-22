import React from 'react'

const Footer = ({length}) => {
  return (
    <footer>
        <h5>{
        length > 1 ? length + " Items" :
        length == 1 ? length + " Item" :
        "No Items."
      }</h5>
    </footer>
  )
}

export default Footer
import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'lightblue',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '60%',
  width: '80%',
  borderRadius: '15px' // added this line
 
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: '0%',
  left: '0%',
  zIndex: 1000
}
export default function Modal({ children, onClose }) {

    return ReactDom.createPortal(
      <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          <button className='btn bg-danger text-white fs-6' style={{ marginLeft: "90%", marginTop: "-20px" }} onClick={onClose}> x </button>
          {children}
        </div>
      </>,
      document.getElementById('cart-root')
    )
  }




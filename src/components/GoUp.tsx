import React from "react"

import Button from '@mui/material/Button';

import { MdKeyboardArrowUp } from "react-icons/md"

const GoUp = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button onClick={scrollTop} sx={styles.GoUp}>
      <MdKeyboardArrowUp />
    </Button>
  )
}

const styles = {
  GoUp: {
    display: 'block',
    marginBottom: '1.5rem',
    background: '#1111118f',
    width: '45px',
    height: '45px',
    minWidth: '55px',
    zIndex: '5',
    borderRadius: '50%',
    border: 'none',
    position: 'fixed',
    bottom: '0',
    right: '2%',
    ':hover': {
      backgroundColor: 'gray'
    },
    'svg': {
      fontSize: '55px',
      color: '#515151',
      width: '100%',
      height: '100%',
      bottom: '0',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
    }
  }
}

export default GoUp

import React from 'react';
import Logo from '../UI/Logo'

function Footer(props) {
  return (
    <footer className='bck_blue'>
      <div className='footer_logo'>
        <Logo
          link={true}
          linkto='/'
          width='70px'
          height='70px'
        />
      </div>
      <div className='footer_discl'>
        Manchester 2019. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

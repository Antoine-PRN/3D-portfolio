import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Mon profil vous intéresse ?<br className='sm:block hidden' />
        Contactez moi pour en discuter.</p>
        <Link to="/contact" className='btn'>
          Contacter
        </Link>
    </section>
  )
}

export default CTA
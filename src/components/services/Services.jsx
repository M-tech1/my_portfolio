import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What i offer</h5>
      <h2>Services</h2>

      <div className='container services__container '>
        <article className='service'>
          <div className='service__head'>
            <h3> Graphics & Ui/Ux </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>
          </ul>
        </article>



        <article className='service'>
          <div className='service__head'>
            <h3>Web / Mobile Development </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>
          </ul>
        </article>




        <article className='service'>
          <div className='service__head'>
            <h3> Others </h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>

            <li>
              <BiCheck className='services__list-icon'/>
              <p>Service discription goes here and as simple...</p>
            </li>
          </ul>
        </article>





      </div>

    </section>
  )
}

export default Services

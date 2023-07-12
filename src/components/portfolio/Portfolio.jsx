import React from 'react'
import './portfolio.css'
import img1 from '../../assets/me.png'

// import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


const data = [
  {
    id:1,
    image:img1,
    title: 'crypto currency dashboard ',
    github: 'https//github.com',
    demo: 'https//demo url'
  },

  {
    id:2,
    image:img1,
    title: 'crypto currency dashboard ',
    github: 'https//github.com',
    demo: 'https//demo url'
  },

  {
    id:3,
    image:img1,
    title: 'crypto currency dashboard ',
    github: 'https//github.com',
    demo: 'https//demo url'
  },

  {
    id:4,
    image:img1,
    title: 'crypto currency dashboard ',
    github: 'https//github.com',
    demo: 'https//demo url'
  },
  {
    id:5,
    image:img1,
    title: 'crypto currency dashboard ',
    github: 'https//github.com',
    demo: 'https//demo url'
  },

  {
    id:6,
    image:img1,
    title: 'crypto currency dashboard ',
    github: 'https//github.com',
    demo: 'https//demo url'
  },

]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent works</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={20}
      // slidesPerView={1}
      // navigation
      // pagination={{ clickable: true }}
    >
      
      {
        data.map(( {id,image, title, github, demo})  => {
        return(
          
        <div key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>  <img src={image} alt={title}/> </div>
        
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
        <a href={github} className='btn' target='_blank'>GitHub</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>

        </div>
        )
        })
       }
       
      </div>
      
    </section>
  )
}

export default Portfolio
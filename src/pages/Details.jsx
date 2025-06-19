import React from 'react'
import DetailHeader from '../components/Detail-header/Detail-header'
import DetailHero from '../components/Detail-hero/Detail-hero'
import DetailInfo from '../components/Detail-info/DetailInfo'
import DetailHotels from '../components/DetailHotels/DetailHotels'
import Testimonial from '../components/Testimonial/Testimonial'
import Article from '../components/Article/Article'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams();

  return (
    <div className='bg-[#FAFAFA]'>
      <DetailHeader />
      <main>
        <DetailHero hotelId={id} />
        <DetailInfo />
        <DetailHotels />
        <Article />
        <Testimonial />
        <Footer />
      </main>

    </div>
  )
}

export default Details

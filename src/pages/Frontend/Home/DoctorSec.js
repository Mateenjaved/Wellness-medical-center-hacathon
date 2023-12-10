import React from 'react'
import DoctorCard from '../../../components/Card/DoctorCard'
import { DocImg } from '../../../assets/images/doctorCard'
import { useParams } from 'react-router-dom'
export default function DoctorSec() {
  const {doctorid} = useParams()
  
  
  return (
    <div className="doctorSection">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 text-center mt-5">
            <h4 className='text-white'>Meet Our Excellent Doctor</h4>
            <p className='w-75 '>We're proud to present not just medical professionals, but partners in your well-being. Our doctors are a dynamic team, each contributing their unique skills and passion to ensure you receive the highest standard of care</p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <DoctorCard Image={DocImg.docter1} name="Camilla Wasif" category="Oncologist" bookUrl={`/${doctorid}`}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <DoctorCard Image={DocImg.docter2} name="Kristin Watson" category="Cardiologist" bookUrl={`/${doctorid}`}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <DoctorCard Image={DocImg.docter3} name="Kristin Watson" category="Cardiologist" bookUrl={`/${doctorid}`}/>
          </div>
        </div>
        <div className="row">
          <div className="col my-5 text-center">
            <button type="button" className="btn btn-secondary rounded-pill px-5 button1">SEE ALL</button>
          </div>
        </div>
      </div>
    </div>

  )
}

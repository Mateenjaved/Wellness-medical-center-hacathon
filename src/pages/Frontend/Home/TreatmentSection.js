import React from 'react'
import { treatmentImg } from '../../../assets/images/treatmentCard'
import { Link } from 'react-router-dom'
export default function TreatmentSection() {
    return (
        <>
            <div className="treatment">
                <div className="container mt-5 my-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 text-center">
                            <h4 style={{color :"black"}} >Explore Treatment Across Specialities</h4>
                            <p className='w-75 ' style={{color :"black"}}>Wellness Medical Center is committed to providing the best healthcare solutions to all its patients. In Faisalabad, not many hospitals have the same level of quality service as the Wellness Center does.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="  col-6 ">
                            <div className="card p-4 mb-4" style={{backgroundColor : "#ff4553"  , color : 'white'}}>
                                <div className="imgDiv ">
                                    <img src={treatmentImg.box1} alt="...." />
                                </div>
                                <h4 className='fs-5'>Cardiologist</h4>
                                
                                <p className='d-none d-sm-block'>The field of cardiology deals with diseases, abnormalities, and disorders of the human cardiovascular system (heart and blood vessels).</p>
                                <Link to={"/BookDr"} className=" fs-5 text-white" style={{textDecoration : "none"}}>Book Now <i className="fa-solid fa-arrow-right text-white ms-2"></i></Link>
                                
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card p-4 mb-4 "  style={{backgroundColor : "#ff4553"  , color : 'white'}}>
                                <div className="imgDiv ">
                                    <img src={treatmentImg.box2} alt="...." />
                                </div>
                                <h4 className='fs-5'>Urology</h4>
                                <p className='d-none d-sm-block'>Urology is a surgical sub-specialty that diagnoses and treats problems involving the male and female urinary tract and the male reproductive organs.</p>
                                <Link to={"/BookDr"} className=" fs-5 text-white" style={{textDecoration : "none"}}>Book Now <i className="fa-solid fa-arrow-right text-white ms-2"></i></Link>
                                {/* <a href="" className='text-primary nav-link'>Book now<i className="fa-solid fa-arrow-right text-primary ms-2"></i></a> */}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card p-4 mb-4 "  style={{backgroundColor : "#ff4553" , color : 'white'}}>
                                <div className="imgDiv ">
                                    <img src={treatmentImg.box3} alt="...." />
                                </div>
                                <h4 className='fs-5'>Orthopedic</h4>
                                <p className='d-none d-sm-block'>Orthopedic surgery is a specialty dealing with acute injuries, congenital and acquired disorders, and chronic arthritic or overuse conditions of the bones.</p>
                                <Link to={"/BookDr"} className=" fs-5 text-white" style={{textDecoration : "none"}}>Book Now <i className="fa-solid fa-arrow-right text-white ms-2"></i></Link>
                                {/* <a href="" className='text-primary nav-link'>Book now <i className="fa-solid fa-arrow-right text-primary ms-2"></i></a> */}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card p-4 mb-4"  style={{backgroundColor : "#ff4553"  , color : 'white'}}>
                                <div className="imgDiv ">
                                    <img src={treatmentImg.box4} alt="...." />
                                </div>
                                <h4 className='fs-5'>Gynecologist</h4>
                                <p className='d-none d-sm-block' style={{color:"black"}}>Gynaecology and Obstetrics is the branch of medicine that comprises two subspecialties i.e. obstetrics and gynaecology. </p>
                                <Link to={"/BookDr"} className=" fs-5 text-white" style={{textDecoration : "none"}}>Book Now <i className="fa-solid fa-arrow-right text-white ms-2"></i></Link>
                                {/* <a href="" className='text-primary nav-link'>Book now <i className="fa-solid fa-arrow-right text-primary ms-2"></i></a> */}
                            </div>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col my-5 text-center">
                            <button type="button" className="btn btn-outline-danger  rounded-pill px-5 button1">SEE ALL</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

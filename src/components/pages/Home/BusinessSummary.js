import React from 'react';
import { FaUsers, FaLuggageCart, FaFlagCheckered, FaRegClipboard, FaRegSmileBeam, FaCheckCircle } from "react-icons/fa";

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-primary text-center my-16'>Business Summary</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto'>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body text-justify">
                            <p className=' text-5xl text-primary'><FaUsers></FaUsers></p>
                            <h2 className="card-title text-primary">WHY WE</h2>
                            <p className='text-secondary'>PH-Tools is a quality concerned company with years of experience in paint industry. We believe our core values of integrity, innovation, client satisfaction, and intellect differentiate</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body text-justify">
                            <p className=' text-5xl text-primary'><FaLuggageCart></FaLuggageCart></p>
                            <h2 className="card-title text-primary">OUR PRODUCTS</h2>
                            <p className='text-secondary'>PH-Tools offers a comprehensive range of world class painting equipments. Our product range comprises fabric rollers, foam rollers, mini rollers, industrial application rollers,</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body text-justify">
                            <p className=' text-5xl text-primary'><FaRegClipboard></FaRegClipboard></p>
                            <h2 className="card-title text-primary">OUR SERVICES</h2>
                            <p className='text-secondary'>PH-Tools is a professionally managed company engaged in offering world class fabric rollers, foam rollers, mini rollers, industrial application rollers, caulking gun, paint tool</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cart w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body text-center">
                            <p className=' text-5xl text-primary mx-auto'>< FaFlagCheckered ></FaFlagCheckered></p>
                            <h2 className="text-4xl text-primary font-bold">92</h2>
                            <p className='text-secondary'>COUNTRIES</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cart w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body text-center">
                            <p className=' text-5xl text-primary mx-auto'><FaCheckCircle></FaCheckCircle></p>
                            <h2 className="text-4xl text-primary font-bold">929+</h2>
                            <p className='text-secondary'>COMPLEAT PROJECTS</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cart w-96 bg-base-100 shadow-xl mx-auto">
                        <div className="card-body text-center">
                            <p className=' text-5xl text-primary mx-auto'><FaRegSmileBeam></FaRegSmileBeam></p>
                            <h2 className="text-4xl text-primary font-bold">292+</h2>
                            <p className='text-secondary'>HAPPY CLIENTS</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;
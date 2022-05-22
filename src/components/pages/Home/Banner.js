import React from 'react';

const Banner = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-9 mt-8">
            <figure><img className='h-96 w-96' src='https://images.thdstatic.com/productImages/999c939c-c111-4d1c-bc7e-6b4b1e44c088/svn/paint-roller-frames-hd-mt-200-11-6-64_1000.jpg' alt="Album" /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-secondary text-left">PH-Tools is the leading name in the field of manufacturing and trading of painting equipment.</h2>
                <p className='text-primary text-left'>Established in the year 2002, at Shahdara, New Delhi, India, we “PH-Tools” are one of the leading names in the field of manufacturing and trading of Paint rollers as well as other allied painting equipment.
                    Our business operations are led by Mr. Sachin Saxena , who has with him rich experience in this industry sector. Under his expert guidance our team of industry professionals assists us in flawlessly handling the in-process demands of manufacturing quality product range. Further, our well equipped state-of-the-art manufacturing unit also features technically advanced production machinery & equipment that enables us in delivering premium quality product range at a high speed..</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-secondary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
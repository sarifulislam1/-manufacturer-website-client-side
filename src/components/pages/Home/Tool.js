import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tools }) => {
    const navigate = useNavigate()
    const goPurchase = (id) => {

        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
                    <figure><img className='h-64' src={tools.img} alt="Shoes" /></figure>
                    <div className="card-body text-left text-white bg-primary h-80">
                        <div className='font-bold'>
                            <h2 className="card-title">{tools.name}</h2>
                            <p>Available Quantity: {tools.availableQuantity}</p>
                            <p>Minimum Quantity For Order: {tools.minimumQuantity}</p>
                            <p>Price ${tools.price}</p>
                        </div>
                        <p>{tools.description.slice(0, 170)}</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => goPurchase(tools._id)} className="btn btn-secondary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;
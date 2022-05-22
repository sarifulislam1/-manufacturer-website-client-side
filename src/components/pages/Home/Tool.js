import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tools }) => {
    const navigate = useNavigate()
    const goPurchase = () => {
        navigate('/purchase')
    }
    return (
        <div>
            <div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={tools.img} alt="Shoes" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">{tools.name}</h2>
                        <p>{tools.description.slice(0, 180)}</p>
                        <p>Minimum Quantity: {tools.minimumQuantity}</p>
                        <p>Available: {tools.availableQuantity}</p>
                        <p>Price: {tools.price}</p>
                        <div className="card-actions justify-end">
                            <button onClick={goPurchase} className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;
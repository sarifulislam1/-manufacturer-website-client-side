import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch(`https://serene-gorge-55852.herokuapp.com/add-review`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-primary m-8'>Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-auto '>
                {
                    reviews.map(review => <div key={review._id} className="card w-96 bg-primary text-white shadow-xl mx-auto mb-6">
                        <div className="card-body ">
                            <h2 className="card-title">{review.name} </h2>
                            <p className='h-40'>{review.description.slice(0, 290)}</p>
                            <p>Rating 5 Out Of: <span className='font-bold'> {review.rating}</span></p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;
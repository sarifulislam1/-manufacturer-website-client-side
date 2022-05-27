import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const MyReviews = () => {
    const [user, loading, error] = useAuthState(auth);

    const addReview = (e) => {
        e.preventDefault();
        const description = e.target.description.value
        const rating = e.target.rating.value
        const name = user.displayName
        fetch('http://localhost:5000/add-review', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                description,
                rating,
                name
            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast.success("Your Review Added")
        e.target.reset()

    }
    return (
        <div>
            <h2 className='text-2xl text-primary m-3'>Add Review</h2>
            <div className='w-50 mx-auto'>
                <form onSubmit={addReview}>
                    <textarea class="textarea w-96 textarea-bordered mx-auto m-2" name='description' placeholder="Tool Description"></textarea>
                    <br />
                    <input type="number" placeholder="Out Of 5 " name='rating' required className="input input-bordered w-full max-w-xs m-2 mx-auto" />
                    <br />
                    <input className='btn btn-primary text-white w-50 mx-auto m-5' type="submit" value="Insert" />
                </form>
            </div>
        </div>
    );
};

export default MyReviews;
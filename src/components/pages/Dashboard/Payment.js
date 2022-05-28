import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4KEVFIqEgoZfkOtcjVuoMbGPcrO20iCzpLcDE46EIktUs4YiUjbc5H9mBGiwe8twLBAV0j4tO1aWjPvjDl06I4002j7dOT8a');

const Payment = () => {
    const { id } = useParams();
    const url = `https://serene-gorge-55852.herokuapp.com/order/${id}`
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-primary font-bold">Hello, {order.userName}</p>
                    <h2 className="card-title text-primary">Please Pay for: {order.orderName}</h2>
                    <p>Please pay: ${order.totalPrice}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
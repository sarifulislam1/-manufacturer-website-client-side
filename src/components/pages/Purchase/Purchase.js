import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const Purchase = () => {
    let { id } = useParams();
    const [user, loading, error] = useAuthState(auth);
    const [purchaseTool, setPurchaseTool] = useState({})
    const [isReload, setIsReload] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => {
                setPurchaseTool(data)
                // console.log(data);
            })
    }, [isReload, purchaseTool])

    const purchaseHandle = (e) => {
        e.preventDefault();
        const quantity = e.target.quantity.value
        // console.log(quantity);
        let availableQuantity = Number(purchaseTool.availableQuantity) - quantity
        const userName = user.displayName
        const userEmail = user.email
        const totalPrice = Number(quantity) * purchaseTool.price
        const orderName = purchaseTool.name
        if (purchaseTool.availableQuantity >= quantity && purchaseTool.minimumQuantity <= quantity) {

            const url = `http://localhost:5000/tools/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    availableQuantity,
                    userName,
                    userEmail
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setPurchaseTool(data)
                    setIsReload(!isReload)
                    e.target.reset('')
                    toast.success('Your order done')
                });
        }
        else {
            toast.error("You can't order ")
        }
        // console.log(user);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                orderName,
                totalPrice,
                quantity,
                userEmail,
                userName,
                user
            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto'>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
                    <figure><img className='h-64' src={purchaseTool.img} alt="Shoes" /></figure>
                    <div className="card-body text-left text-white bg-primary">
                        <div className='font-bold'>
                            <h2 className="card-title">{purchaseTool.name}</h2>
                            <p>Available Quantity: {purchaseTool.availableQuantity}</p>
                            <p>Minimum Quantity For Order: {purchaseTool.minimumQuantity}</p>
                            <p>Price ${purchaseTool.price}</p>
                        </div>
                        <p>{purchaseTool.description}</p>
                    </div>
                </div>
            </div>
            <div className='mx-auto my-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={purchaseHandle}>
                            <p className='text-left p-4'>Minimum Quantity: {purchaseTool.minimumQuantity}</p>
                            <input type="number" placeholder="Your Quantity" name='quantity' required className="input input-bordered w-full max-w-xs" />
                            <br />
                            <p className='text-left p-4'>Price Per Unit ${purchaseTool.price}</p>
                            {/* <input type="text" value={purchaseTool.price} disabled className="input input-bordered w-full max-w-xs" /> */}
                            {/* <br /> */}
                            <input className='btn btn-primary text-white m-5' type="submit" value="Purchase" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
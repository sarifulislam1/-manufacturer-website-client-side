import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);



    const [myOrder, setMyOrder] = useState([])
    // const email = user.email

    useEffect(() => {
        //  'authorization': `${user?.email}  ${localStorage.getItem("accessToken")}`,
        // const url = `http://localhost:5000/orders?myOrder=${}`;      
        if (user) {
            // fetch(`http://localhost:5000/orders/?userEmail=${user.email}`{
            // })
            fetch(`http://localhost:5000/orders?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyOrder(data)
                })
        }
    }, [user])
    console.log(user.email);

    return (
        <div>
            {/* <p>my order{myOrder.length}</p> */}
            <p>total order{myOrder.length}</p>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Order Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder.map((order, index) => <tr key={order._id} >
                                <th>{index + 1}</th>
                                <td>{order.user.displayName}</td>
                                <td>{order.user.email}</td>
                                <td>{order.orderName}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
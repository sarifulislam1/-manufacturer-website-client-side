import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useOrders from '../../../hooks/useOrders';
import auth from '../../Firebase/Firebase.init';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);

    // const [orders] = useOrders()
    // console.log(orders);

    // const [myOrder, setMyOrder] = useState([])

    // useEffect(() => {
    //     //  'authorization': `${user?.email}  ${localStorage.getItem("accessToken")}`,
    //     // const url = `http://localhost:5000/orders?myOrder=${}`;
    //     if (user) {
    //         // fetch(`http://localhost:5000/orders/?userEmail=${user.email}`{
    //         // })
    //         fetch(`http://localhost:5000/orders?userEmail=${user.email}`, {
    //             method: 'GET',
    //             headers: {
    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 setMyOrder(data)
    //             })
    //     }
    // }, [user])
    // console.log(user.email);

    return (
        <div>
            {/* <p>my order{myOrder.length}</p> */}
            <p>total order</p>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
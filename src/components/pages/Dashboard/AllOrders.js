import React from 'react';
import useOrders from '../../../hooks/useOrders';

const AllOrders = () => {
    const [orders] = useOrders()
    return (
        <div>
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
                            orders.map((order, index) => <tr key={order._id} >
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

export default AllOrders;
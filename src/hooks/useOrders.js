import { useEffect, useState } from "react"

const useOrders = user => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data)
            })
    }, [])

    return [orders];
}

export default useOrders;
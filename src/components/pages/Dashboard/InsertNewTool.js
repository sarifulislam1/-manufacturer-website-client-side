import React, { useEffect } from 'react';

const InsertNewTool = () => {

    const insertNewTool = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const img = e.target.img.value
        const description = e.target.description.value
        const minimumQuantity = e.target.minimumQuantity.value
        const availableQuantity = e.target.availableQuantity.value
        const price = e.target.price.value
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name,
                img,
                description,
                minimumQuantity,
                availableQuantity,
                price
            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div>
            <div className='mx-auto my-auto'>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
                    <div className="card-body">
                        <h1 className='text-2xl font-bold text-primary'>Insert New Tool</h1>
                        <form onSubmit={insertNewTool}>
                            <input type="text" placeholder="Tool name" name='name' required className="input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input type="text" placeholder="Image Link" name='img' required className="input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <textarea class="textarea w-full textarea-bordered m-2" name='description' placeholder="Tool Description"></textarea>
                            <br />
                            <input type="text" placeholder="Minimum Quantity" name='minimumQuantity' required className="input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input type="text" placeholder="Available Quantity" name='availableQuantity' required className="input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input type="text" placeholder="Price" name='price' required className="input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input className='btn btn-primary text-white m-5' type="submit" value="Purchase" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InsertNewTool;
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
        fetch('https://serene-gorge-55852.herokuapp.com/tools', {
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
                        <form onSubmit={insertNewTool} mx-auto>
                            <input type="text" placeholder="Tool name" name='name' required className="mx-auto input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input type="text" placeholder="Image Link" name='img' required className="mx-auto input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <textarea className="textarea w-full textarea-bordered mx-auto m-2" name='description' placeholder="Tool Description"></textarea>
                            <br />
                            <input type="text" placeholder="Minimum Quantity" name='minimumQuantity' required className="mx-auto input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input type="text" placeholder="Available Quantity" name='availableQuantity' required className="mx-auto input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input type="text" placeholder="Price" name='price' required className="input input-bordered w-full max-w-xs m-2 mx-auto" />
                            <br />
                            <input className='btn btn-primary text-white w-full mx-auto m-5' type="submit" value="Insert" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InsertNewTool;
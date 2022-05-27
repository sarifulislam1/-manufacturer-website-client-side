import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    // const linkedIn = e.terget.linkedIn.value
    return (
        <div>
            <div className='mx-auto my-auto'>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
                    <div className="card-body">
                        <h1 className='text-2xl font-bold text-primary'>Update Your Profile</h1>
                        <form mx-auto>
                            <input type="text" placeholder="Tool name" value={user.displayName} name='name' disabled className="mx-auto input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input type="text" placeholder="Image Link" name='img' value={user.email} disabled className="mx-auto input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input type="text" placeholder="LinkedIn Link" name='linkedIn' className="mx-auto input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input type="text" placeholder="Git Hub" name='gitHub' className="mx-auto input input-bordered w-full max-w-xs m-2" />
                            <br />
                            <input className='btn btn-primary text-white w-full mx-auto m-5' type="submit" value="Update Profile" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
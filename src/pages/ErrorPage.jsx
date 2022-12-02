import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <div className="errorpage container w-full max-w-7xl px-4 mt-6 text-offwhite-900">
                <h2 className="xs:text-3xl md:text-5xl pb-2 font-paytoneOne uppercase">
                    Shoot!
                </h2>
                <h3 className='text-2xl font-paytoneOne'>
                    We can't seem to find the page you're looking for.
                </h3>
                <form>
                    <Link to="/">
                        <button className='bg-coral-500 hover:bg-coral-900 text-darkgrey-900 w-[16rem] py-4 mt-6 rounded font-OpenSans font-bold'>
                            Go to Home
                        </button>
                    </Link>
                </form>
            </div>

        </>
    )
}

export default ErrorPage
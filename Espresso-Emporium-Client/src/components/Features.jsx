import React from 'react';

const Features = () => {
    return (
        <div className='bg-[#ECEAE3] p-14'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-11/12 mx-auto'>
                <div>
                    <img src="https://i.ibb.co.com/bHSb9vC/1.png" alt="" />
                    <h3 className='text-3xl mt-4 mb-2 font-ranch'>Awesome Aroma</h3>
                    <p className='text-gray-500'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/Trv9Wf7/2.png" alt="" />
                    <h3 className='text-3xl mt-4 mb-2 font-ranch'>High Quality</h3>
                    <p className='text-gray-500'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/j86vVxt/3.png" alt="" />
                    <h3 className='text-3xl mt-4 mb-2 font-ranch'>Pure Grades</h3>
                    <p className='text-gray-500'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/52czWCR/4.png" alt="" />
                    <h3 className='text-3xl mt-4 mb-2 font-ranch'>Proper Roasting</h3>
                    <p className='text-gray-500'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
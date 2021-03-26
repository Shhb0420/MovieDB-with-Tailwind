import React, { Component } from 'react'
import movie from '../../Assets/Images/image4.png'
export default class DetailMovie extends Component {
    render() {
        return (
            <div>
                <div className="bg-no-repeat bg-center mt-20"
                    style={
                        {
                            backgroundImage: `url(${'https://res.cloudinary.com/zada/image/upload/v1616720330/bg_z0jooz.png'})`,
                            backgroundPositionY: '0px',
                        }
                    }
                >
                    <div className="bg-black bg-opacity-75 h-96 text-white">
                        <div class="container mx-auto flex flex-wrap px-5 py-24 items-center justify-center flex-col">
                            <div className="bg-black bg-opacity-60 text-white mt-56 w-screen -ml-18 py-2">
                                <div className="w-1/5">
                                    <div className="pl-2 mr-2 -mt-7 ml-98 py-9">
                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-yellow-400" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                    </div>
                                    <p className="font-bold text-3xl -mt-18 ml-110 text-white">7.0</p>
                                </div>
                                <ul className="ml-120 -mt-12 border-r-2 border-white w-24">
                                    <li className="font-extralight">User Score</li>
                                    <li className="font-bold">3621 Votes</li>
                                </ul>
                                <ul className="ml-130 -mt-12 border-r-2 border-white w-24">
                                    <li className="font-extralight">Status</li>
                                    <li className="font-bold">Released</li>
                                </ul>
                                <ul className="ml-140 -mt-12 border-r-2 border-white w-24">
                                    <li className="font-extralight">language</li>
                                    <li className="font-bold">english</li>
                                </ul>
                                <ul className="ml-150 -mt-12 border-r-2 border-white w-32">
                                    <li className="font-extralight">budget</li>
                                    <li className="font-bold">$200,000,000.00</li>
                                </ul>
                                <ul className="ml-160 -mt-12 border-r-2 border-white w-36">
                                    <li className="font-extralight">production</li>
                                    <li className="font-bold">DC Entertainment</li>
                                </ul>
                            </div>
                            <div class="lg:w-5/6 w-full">
                                <h1 className="-mt-36 ml-66 font-light">2021</h1>
                                <h1 className="font-bold ml-66 text-3xl">Wonder Woman 1984</h1>
                                <img src={movie} alt="" className="-mt-20 z-20" />
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div class="lg:w-5/6 w-full z-0">
                    <h1 className="mt-3 ml-98 font-medium text-2xl text-line">OVERVIEW</h1>
                    <p className="ml-98">Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.</p>
                </div>


            </div>
        )
    }
}

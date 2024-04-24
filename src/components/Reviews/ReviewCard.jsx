import React from 'react';

const ReviewCard = ({ userReview }) => {
    const { authorImage, name, location, review } = userReview;
    return (
        <div className=" relative flex w-full lg:max-w-[56rem] items-center lg:justify-center rounded-xl  text-white shadow-none">
            <div className="flex-1  relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-white bg-transparent shadow-none rounded-xl bg-clip-border">
                <img
                    src={authorImage}
                    alt="tania andrew"
                    className="relative inline-block mx-auto rounded-full h-[150px] w-[150px] lg:h-[400px] lg:w-[300px] object-cover lg:object-center"
                />
            </div>
            <div className="flex-1  p-0 mb-6">
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <h5 className="block font-sans text-lg md:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {name}
                        </h5>
                        <div className="flex items-center gap-0 5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5 text-yellow-700"
                            >
                                <path
                                    
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5 text-yellow-700"
                            >
                                <path
                                    
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5 text-yellow-700"
                            >
                                <path
                                    
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5 text-yellow-700"
                            >
                                <path
                                    
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5 text-yellow-700"
                            >
                                <path
                                    
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <p className="block font-sans text-sm lg:text-base antialiased font-light leading-relaxed text-blue-gray-900">
                        {location}
                    </p>
                </div>
                <p className="block font-sans text-sm lg:text-base antialiased font-light leading-relaxed text-inherit">
                     {review}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;
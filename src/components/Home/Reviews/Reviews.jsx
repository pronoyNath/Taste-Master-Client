import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './reviews.css';
import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div className='mt-10 mb-20'>
            <h3 className='py-7 text-3xl md:text-4xl font-bold text-yellow-900 text-center font-garamond'>Reviews of our Customers</h3>
            <AwesomeSlider className='custom-slider'>
                {reviews.map((userReview) => (
                    <div key={userReview.id} className='review-slide'>
                        <ReviewCard userReview={userReview} />
                    </div>
                ))}
            </AwesomeSlider>
        </div>
    );
};

export default Reviews;

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
        <div className='mt-20 mb-2 pt-5'>
            <h3 className='py-7 mb-10 text-6xl md:text-6xl font-bold text-orange text-center font-garamond'>Reviews of our Customers</h3>
            <AwesomeSlider className='custom-slider'>
                {reviews.map((userReview) => (
                    <div key={userReview.id} style = {{ backgroundColor: "#0a0909"}} className='review-slide'>
                        <ReviewCard userReview={userReview} />
                    </div>
                ))}
            </AwesomeSlider>
        </div>
    );
};

export default Reviews;

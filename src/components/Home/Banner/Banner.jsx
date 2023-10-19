

const Banner = () => {
    
    return (
        <div >

            <div className="hero h-[480px] bg-contain" style={{ backgroundImage: 'url(https://i.ibb.co/x8P74HN/fast-food-share.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">

                        <p className="mb-5 text-4xl text-white font-bold font-garamond">Who owns the brands you love and how have they scored?</p>
                        <button className="btn bg-yellow-900 border-none text-white font-semibold">Select a brand</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
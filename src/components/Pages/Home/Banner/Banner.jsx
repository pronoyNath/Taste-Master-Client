// import Button from '../../../Components/Button/Button';
import imageL from '../../../../assets/juice.png';
import Button from '../../../ShareComponents/Button/Button';

const Banner = ({ scrollToAvailable }) => {
    const handle = ()=>{
        console.log("olksjke");
    }
    return (
        <div className="flex relative justify-center overflow-hidden h-[400px] mx-auto w-full ">
            <div className='flex flex-1 md:flex-none items-center'>
                <div className='absolute md:relative ml-3'>
                    <h1 className="text-lg md:text-7xl italic font-extrabold">
                        Select Any Brand<span className="text-orange block ml-52">Any Food</span>
                    </h1>
                    <div className="flex justify-end items-center">
                        {/* <Button onClick={scrollToAvailable} text={'Adopt'} /> */}
                        {/* <button>hello</button> */}
                       <Button btnText={"Go To Shop"} onClick={scrollToAvailable}/>
                    </div>

                </div>
            </div>
            <img className="flex flex-1 md:flex-none h-full object-contain" src={imageL} alt="" />
        </div>
    );
};

export default Banner;

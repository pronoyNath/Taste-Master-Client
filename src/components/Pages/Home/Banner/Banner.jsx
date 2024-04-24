// import Button from '../../../Components/Button/Button';
import imageL from '../../../../assets/juice.png';
import Button from '../../../ShareComponents/Button/Button';
import 'animate.css';


const Banner = ({ scrollToAvailable }) => {
    const handle = ()=>{
        console.log("olksjke");
    }
    return (
        <div className="flex relative justify-center overflow-hidden h-[400px] mx-auto w-full ">
            <div className='flex flex-1 md:flex-none items-center'>
                <div className='absolute md:relative ml-3'>
                    <h1 className="text-lg md:text-7xl italic font-extrabold animate__animated animate__backInUp animate__slow">
                        Select Any Brand<span className="text-orange block ml-52 ">Any Food</span>
                    </h1>
                    <div className="flex justify-end items-center animate__animated animate__backInRight animate__delay-2s ">
                        {/* <Button onClick={scrollToAvailable} text={'Adopt'} /> */}
                        {/* <button>hello</button> */}
                       <Button btnText={"Go To Shop"} onClick={scrollToAvailable}/>
                    </div>

                </div>
            </div>

            
            <img className="flex flex-1 md:flex-none h-full object-contain animate__animated animate__rubberBand" src={imageL} alt="" />
        </div>
    );
};

export default Banner;

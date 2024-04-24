const PressableBtn = ({text}) => {
    return (
      <div className="bg-white min-h-[200px] flex items-center justify-center">
        <button type="submit" className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          {text}
        </button>
      </div>
    );
  };
  
  export default PressableBtn;
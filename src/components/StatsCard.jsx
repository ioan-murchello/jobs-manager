const StatsCard = ({ image, color, bgcolor, title, subtitle }) => {
  return (
    <div className='card md:w-2/6 w-full flex justify-center gap-y-5 p-5 bg-base-100 shadow-xl'>
      <div className='flex justify-evenly items-center'>
        <div
          className='sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] rounded-md flex justify-center items-center'
          style={{ background: bgcolor }}
        >
          {image}
        </div>
        <h2 className='card-title capitalize text-2xl'>{title}</h2>
      </div>
      <h2
        className={`font-semibold text-center text-lg sm:text-xl capitalize`}
        style={{ color: color }}
      >
        {subtitle}
      </h2>
    </div>
  );
};
export default StatsCard;

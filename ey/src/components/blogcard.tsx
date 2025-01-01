interface BlogCardProps {
  description: string;
  image: string;
  buttonText:string,
}

function BlogCard({ description, image, buttonText }: BlogCardProps) {
  return (
    <div className="relative flex flex-col my-6 max-w-[450px] w-[29.63%] min-w-[300px] h-[452.84px] min-h-[420px]">
      <div className="relative h-[45.4%] min-h-[206px] overflow-hidden text-white">
        <img
          src={image}
          alt="card-image"
        />
      </div>
      <div className="pt-7 pb-4">
        <p className="text-white-300 leading-normal font-sans font-thin text-[20px]">
         {description}
        </p>
      </div>
      <div className="pb-4 pt-0 mt-2">
        <button
          className="border border-white text-center font-sans text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-[134px] h-[55px] text-[20px] font-thin"
          type="button"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default BlogCard;

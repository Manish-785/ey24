import BlogCard from "./blogcard";
function CardWrapper(){
    return(
        <div className="mt-6 ml-6 flex overflow-x-auto justify-evenly h-fit">
          <BlogCard
            image="/assets/surprise.png"
            description="There is a heightened interest in cloud — an 
enabler for modern business
priorities like AI, carbon emissions
reduction and innovation."
            buttonText="Read More"
          />
          <BlogCard
            image="/assets/surprise.png"
            description="There is a heightened interest in cloud — an 
enabler for modern business
priorities like AI, carbon emissions
reduction and innovation."
            buttonText="Read More"
          />
          <BlogCard
            image="/assets/surprise.png"
            description="There is a heightened interest in cloud — an 
enabler for modern business
priorities like AI, carbon emissions
reduction and innovation."
            buttonText="Read More"
          />
        </div>
    );
}
export default CardWrapper;
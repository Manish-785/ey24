interface BannerProps {
  title: string;
  description: string;
  image: string;
  text: string;
}

function Banner({ title, description, image, text }: BannerProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "550px", // Explicit height
        padding: "20px",
        boxSizing: "border-box", // Include padding in the size
      }}
    >
      <div style={{position: "relative", top: "85%", left: "5%", transform: "translate(-5%, -85%)", width: "fit-content"}}>
        <h1
          style={{ marginBottom: "10px", fontSize: "3rem", color: "#FFE600" }}
        >
          {title}
        </h1>
        <p
          style={{
            marginBottom: "15px",
            fontSize: "1.5rem",
            maxWidth: "974px",
          }}
        >
          {description}
        </p>
        <div 
    className="flex items-center w-fit h-[60px] max-w-[400px]" 
    style={{ textAlign: "left" }} // Explicitly set text alignment
>
    <div 
        style={{
            width: '6px', 
            backgroundColor: '#FFE600', 
            height: '100%', // Ensures it spans the full height
        }} 
    ></div>
    <span 
        style={{ 
            fontSize: "1.25rem", 
            fontWeight: "normal", 
            marginLeft: "8px", // Adds spacing between the yellow bar and text
        }} 
        className="text-left" // Tailwind utility for left-aligned text
    >
        {text}
    </span>
</div>
        
      </div>
    </div>
  );
}

export default Banner;

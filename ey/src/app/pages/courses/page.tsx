import Banner from "@/components/banner";
import Navbar from "@/components/Navbar";
import CardWrapper from "@/components/cardWrapper";
import Contact from "@/components/contact";

function Courses() {
  return (
    <div>
      <Navbar />
      <Banner
        title="Courses"
        description="Learn and grow with expert-led financial courses designed to simplify complex concepts and
empower you with practical skills for real-world money management"
        image="/assets/courseBanner3.png"
        text="Leverage the power of AI-Generated playlists
tailored just for you"
      />
      <div style={{ backgroundColor: "#2E2E38", padding: "1rem" }}>
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "normal",
            marginLeft: "1.5rem",
          }}
        >
          Your Courses
        </div>
        <CardWrapper />
      </div>
      <div className="h-fit bg-white pt-8 pb-5">
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "normal",
            marginLeft: "1.5rem",
            color: "black",
          }}
          className="text-center"
        >
          Got Doubts?
        </div>
        <div
          className="bg-[#FFE600] text-black p-9 w-[95%] mx-auto flex items-center justify-between mt-4"
          style={{
            position: "relative",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "2.5rem",
                marginLeft: "1.5rem",
              }}
              className="font-light"
            >
              Get them cleared
            </span>
            <br />
            <span style={{ marginLeft: "1.5rem" }}>
              Chat with your AI-Mitra to get crystal clear clarity of concepts
            </span>
          </div>
          <span>
            <button className="border-black border text-[1.75rem] p-2 hover:bg-[#2E2E38] hover:text-white transition duration-300">
              Start a new chat
            </button>
          </span>
        </div>
      </div>
      <Contact/>
    </div>
  );
}

export default Courses;

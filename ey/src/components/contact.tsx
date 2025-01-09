function Contact() {
    return (
      <div className="w-full bg-[#2E2E38] h-fit flex flex-col items-center justify-center p-4">
        <h1 className="text-center text-[3.5rem] font-extralight text-[#FFE600]">
          Contact Us
        </h1>
        <p className="text-center text-[2rem] mb-4">
          Like what you’ve seen? Get in touch to learn more
        </p>
        <button className="border border-white rounded-full w-fit p-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="h-14 w-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </button>
      </div>
    );
  }
  
  export default Contact;
  
import { GlobeAltIcon } from "@heroicons/react/solid";
function Login() {
  return (
    <>
      <div
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: "url(/assets/loginCover.jpeg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      ><nav className="flex w-full h-[5.575rem] items-center text-[1.5rem] justify-end px-14"><GlobeAltIcon className="h-[1.55rem] w-[1.55rem]"/><span className="pl-4">English</span></nav>
        <div
          className="font-sans text-4xl text-center text-white sm:text-2xl md:text-3xl lg:text-5xl"
          style={{
            position: "absolute",
            top: "32.89%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Welcome to AI-Mitra
        </div>

        <div
          style={{
            position: "absolute",
            top: "48vh",
            left: "50vw",
            transform: "translate(-50%, -50%)",
          }}
          className="font-sans text-sm text-center text-white max-w-[685px] max-h-[94px] sm:text-sm md:text-sm lg:text-sm"
        >
          Create an account today and take the first step towards transforming
          your financial future. With AI-Mitra, embark on a personalized journey
          to financial literacy and smart decision-making, powered by
          cutting-edge AI. Whether you're looking to manage your money better,
          plan for the future, or achieve your financial goals, we're here to
          guide you every step of the way.
        </div>

        <div>
        <button
  style={{
    position: "absolute",
    top: "63%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }}
  className="bg-white text-black font-sans text-normal h-[55px] sm:w-full sm:max-w-full sm:text-base md:w-[20rem] md:text-lg lg:w-[26.5rem] lg:text-xl flex justify-center items-center hover:bg-gray-200 hover:shadow-md transition-all"
>
  Continue with Google
  <span className="ml-2">
    <img
      className="w-[20px]"
      src="/assets/google.svg"
      alt="Google logo"
    />
  </span>
</button>

        </div>
      </div>
    </>
  );
}

export default Login;

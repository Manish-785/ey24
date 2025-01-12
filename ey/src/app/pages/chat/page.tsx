function Chat() {
  return (
    <div className="w-screen h-screen bg-[#4B4B55] flex">
      <div className="bg-[#2E2E38] w-1/5"></div>
      <div className="w-4/5">
        <nav className="text-[1.5rem] pt-4 pl-10 h-1/5">AI-Mitra</nav>
        <div className=" flex flex-col items-center h-4/5">
          <input
            type="text"
            placeholder="Message AI-Mitra"
            className="w-[900px] h-[80px] bg-[#2E2E38B0] border-0 rounded-[26px] p-4 text-white text-opacity-[33%] placeholder:text-white placeholder:text-opacity-[33%] focus:outline-none focus:ring-2 focus:ring-[#FFE600] transition-all transition-3 shadow-[0_4px_20px_10px_rgba(0,0,0,0.15)]"
          style={{
            position:'fixed',
            bottom:'3rem'
          }}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;

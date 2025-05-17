import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-3">
     <div className="font-bold text-5xl flex gap-2 justify-center items-center">Buy Me A Chai <span><img src="/tea.gif" width={88} alt="" /></span></div>
     <p>
      A crowdfunding platform for creators. Fund your project and get funded. Start Now!
     </p>
     <div>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
     </div>
    </div>
    <div className="bg-white h-1 opacity-10">
    </div>

    <div className="text-white">
      <h1>Your Fans can buy you a chai</h1>
      <div className="flex gap-5">
        <div className="item">
          <img src="/man.gif" width={88} alt="" />
          <p>Fund Yourself</p>
        </div>
      </div>
    </div>
    </>
  );
}

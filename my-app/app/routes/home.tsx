import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HCBfolio" },
    { name: "description", content: "Erin's HCBfolio" },
  ];
}

export default function Home() {
  return (
    
    <div className = "h-full bg-[#1B1E25] flex flex-col items-center justify-center pt-50">
    <div className = " items-center ">
    <div className = "items-center font-roboto">
    <h3 className = "text-5xl text-white font-bold -mb-25 ml-5"> My</h3>
    <h1 className = "font-extrabold text-[19rem] text-[#FF6363] hover:tracking-[0.3em] transition-[letter-spacing] duration-[800ms] "> HCB </h1>
    <h2 className = "font-bold -mt-20 mr-5 text-white text-7xl text-right"> Portfolio </h2>
        </div>
      </div>
        <div className = "min-h-140 border-7 w-250 mt-40 bg-[#3D3D3D] rounded-4xl mb-50 flex flex-col border-[#FF6363] font-roboto overflow-hidden"> 
          <div className = "ml-9">
            <h2 className = "flex flex-row  text-4xl mt-9 gap-2 text-[#BFBFBF]">
              <div className = "font-bold "> Erin </div>   invited you to...
            </h2>
            <h1 className = "font-bold text-9xl text-white mt-2">Introduction</h1>
            <div className = "text-[#BFBFBF] text-3xl mr-20">
                <div className = "gap-2 flex flex-row text-4xl">
                <h2 className = "font-bold ">I'm Erin</h2>
                <h2> a 16 year old based in Ottawa, Ontario </h2>
                </div>
              <h1 className = "break-words mt-6"> I'm passionate about webdev, design, art and marketing. I hope you guys enjoy this portfolio website!(it's HCB themed + I eyeballed alot of the stuff on here!)</h1>
              <h1 className = "text-2xl mt-12"> Note: I'm not working on paradox anymore Dhamari quit lol so i'll have alot more time</h1>
            </div>

          </div>
        </div>
        <h1 className = "mb-5 text-white font-bold"> Made with love by Erin (no vibes in this code!) </h1>
    </div>
  );
}




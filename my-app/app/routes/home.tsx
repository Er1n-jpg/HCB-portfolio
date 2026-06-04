import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    
    <div className = "g-[#1B1E25] flex flex-col items-center justify-center z-0">
    <div className = " items-center ">
    <div className = "items-center font-roboto">
    <h3 className = "text-5xl text-white font-bold -mb-25 ml-5"> My</h3>
    <h1 className = "font-extrabold text-[19rem] text-[#FF6363] hover:tracking-[0.3em] transition-[letter-spacing] duration-[800ms] "> HCB </h1>
    <h2 className = "font-bold -mt-20 mr-5 text-white text-7xl text-right"> Portfolio </h2>
        </div>
      </div>
    </div>
  );
}




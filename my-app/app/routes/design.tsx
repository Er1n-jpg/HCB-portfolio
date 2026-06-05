import type { Route } from "./+types/home";

const designItems = [
    {
        id: 1,
        title: "This Website",
        link: "https://www.figma.com/design/TKUVonAXciHR3AZd8sjMDd/Untitled?node-id=0-1&t=RFzG2vuhzwyOs5pQ-1",
        img: "/web.png",
    },
    {
        id: 2,
        title: "ALD1FLIX",
        link: "https://www.figma.com/design/JMSEfvnQQ1nGdN19NWXRJX/Ald1flix?node-id=0-1&t=E2SxZs4bGIcXBgQG-1",
        img: "/ald1flix.png",
    },
    {
        id: 3,
        title: "Paradox",
        link: "",
        img: "/paradox.png",
    },
    {
        id: 4,
        title: "Mush-root",
        link: "https://www.figma.com/design/o66xQtHKk7avMfFKPLHEHn/Accessibility-project?node-id=2077-98&t=Il1WRAo7WdtAZsxi-1",
        img: "/mush-root.png",
    },
    {
        id: 5,
        title: "De-cafenated",
        link: "https://www.figma.com/design/lWjMa3mkG9RxBzPaweMUgR/Untitled?node-id=0-1&t=dgHrhsymkFXDWvB2-1",
        img: "/decafenated.png",
    },
    {
        id: 6,
        title: "JPEG",
        link: "https://www.instagram.com/jpeg_ottawa/",
        img: "/jpeg.png",
    },
    {
        id: 7,
        title: "Daydream Ottawa",
        link: "https://www.instagram.com/campfire_ottawa/",
        img: "/ddott.png",
    },
    {
        id: 8,
        title: "Ascension",
        link: "https://ascension.hackclub.com",
        img: "/ascension.png",
    }
]

function DesignItem({
    id,
    title,
    link,
    img,

} : {
    id: string;
    title: string;
    link: string;
    img: string;
}){
    return (
        <a href = {link}>
        <div className = "max-w-3xl flex flex-col bg-[#3D3D3D] rounded-lg" >
            <h3 className = "font-roboto font-bold text-2xl mt-5 mb-2 ml-4 text-white ">{title}</h3>
            <img src = {img} alt = "" className = " max-w-[70%] ml-4 mb-4 "></img>
        </div>
    </a>
    )
}

export default function design(){
    return(
        <div className = "h-screen flex flex-col bg-[#1B1E25] pt-16">
            <div className = "flex flex-row gap-10">
                <h3 className ="text-white font-roboto mt-5 mb-5 ml-10 font-roboto text-4xl"> Designs </h3>
            </div>
            <div className = "grid grid-cols-3 gap-4 ml-10 mr-10 min-h-30">
                { designItems.map((item) =>(
                    <DesignItem
                    key = {item.id}
                    id = {String(item.id)}
                    title = {item.title}
                    link = {item.link}
                    img = {item.img}
                    />
                ))}
            </div>
        </div>
    );
}
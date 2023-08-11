import { IoPaperPlaneOutline, IoCarOutline, IoBoatOutline } from "react-icons/io5";

export const deliveries = [
    {
        id: 2934,
        title: "World Wide Freight",
        icon: <IoPaperPlaneOutline className="text-lg md:text-xl text-slate-600 group-hover:text-orange-500" />,
        bg: <IoPaperPlaneOutline className="absolute group-hover:text-orange-50 text-9xl opacity-10 scale-[2] -top-[10%] left-[70%] rotate-[35deg] text-slate-500" />,
        text: "We can help you fly your packages to anyone, anywhere in the world!",
    },
    {
        id: 2937,
        title: "Ground Shipment",
        icon: <IoCarOutline className="text-lg md:text-xl text-slate-600 group-hover:text-orange-500" />,
        bg: <IoCarOutline className="absolute group-hover:text-orange-50 text-9xl opacity-10 scale-[2] -top-[10%] left-[70%] rotate-[35deg] text-slate-500" />,
        text: "If your shipment requires a road transport and not by air, we are still your guy!",
    },
    {
        id: 2938,
        title: "Sea Cargo",
        icon: <IoBoatOutline className="text-lg md:text-xl text-slate-600 group-hover:text-orange-500" />,
        bg: <IoBoatOutline className="absolute group-hover:text-orange-50 text-9xl opacity-10 scale-[2] -top-[10%] left-[70%] rotate-[35deg] text-slate-500" />,
        text: "Our specialty extends even down to cargo package movement and delivery!",
    },
]
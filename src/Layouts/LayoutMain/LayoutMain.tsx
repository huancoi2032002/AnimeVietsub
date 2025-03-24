import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Notification from "../../Components/Notification/Notification";
import ContentRight from "../../Components/ContentRight/ContentRight";

type LayoutMainProps = {
    children: React.ReactNode
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
    return (
        <div className="w-full h-screen flex flex-col gap-3">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[1142px] bg-[#00000099] p-[18px] rounded-[4px] flex flex-col gap-6">
                    <div className="">
                        <Notification />
                    </div>
                    <div className="w-full flex justify-between">
                        {children}
                        <div className="w-[300px]">
                            <ContentRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default LayoutMain
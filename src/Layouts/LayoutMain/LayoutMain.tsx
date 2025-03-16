import React from "react"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"

type LayoutMainProps = {
    children: React.ReactNode
}

const LayoutMain:React.FC<LayoutMainProps> = ({children}) => {
    return(
        <div className="w-full h-screen flex flex-col gap-3">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[1142px] bg-[#00000099] p-[18px] rounded-[4px]">
                    {children}
                </div>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default LayoutMain
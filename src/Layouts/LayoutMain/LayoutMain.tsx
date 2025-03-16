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
            <div className="">
                {children}
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

export default LayoutMain
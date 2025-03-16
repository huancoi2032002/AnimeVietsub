import { PlayIcon } from "../../../../assets";
import Button from "../../../../Components/Button/Button";
import Banner from '../../../../assets/banned.gif';


interface ContentRightProps {
    
}

const ContentRight = (props: ContentRightProps) => {
    
    return (
        <div className="w-full flex flex-col gap-5">
            <section className="w-full p-3 bg-[#696969]/20 flex flex-col gap-4 rounded-[4px]">
                <div className="w-full pb-4 text-xs border-b border-white/40">Hôm nay xem gì?</div>
                <div className="text-xs text-[#78909C] ">Nếu bạn buồn phiền không biết xem gì hôm nay. Hãy để chúng tôi chọn cho bạn</div>
                <Button icon={<PlayIcon className="fill-white size-3" />} title="Xem Anime Ngẫu Nhiên" width="200"/>
            </section>
            <div className="w-full h-[250px]">
                <img src={Banner} />
            </div>
            <section className="w-full p-3 bg-[#696969]/20 flex flex-col gap-4 rounded-[4px]">
                <div className="w-full pb-4 text-xs border-b border-white/40">Hỏi/đáp anime</div>
                <div className="text-xs text-[#78909C] ">Nếu bạn buồn phiền không biết xem gì hôm nay. Hãy để chúng tôi chọn cho bạn</div>
                <Button icon={<PlayIcon className="fill-white size-3" />} title="Xem Anime Ngẫu Nhiên" width="200"/>
            </section>
            <section className="w-full p-3 bg-[#696969]/20 flex flex-col gap-4 rounded-[4px]">
                <div className="w-full pb-4 text-xs border-b border-white/40">ANIME MỚI CẬP NHẬT</div>
                <div>
                    
                </div>
                
            </section>
        </div>
    );
};

export default ContentRight;
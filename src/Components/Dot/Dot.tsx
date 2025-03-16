type DotProps = {
    category: 'Circle' | 'Square';
    sizes: 'Small' | 'Normal'
};

const Dot = ({ category, sizes }: DotProps) => {

    const defaultSize = sizes === "Small" ? { width: 22, height: 22 } : { width: 40, height: 40 };

    return (
        <div
            className={`border border-[#F5EC42] ${category === 'Circle' ? 'rounded-full' : 'rounded-[4px]'} w-6 h-6`}
            style={{
                width: `${defaultSize.width}px`,
                height: `${defaultSize.height}px`,
            }}
        >

        </div>
    );
};

export default Dot;

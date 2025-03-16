import { Link } from "react-router-dom";

type DropdownProps = {
    options: { label: string; path: string }[];
};

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
    return (
        <div className="absolute left-0 top-14 min-w-max p-2 bg-white text-black shadow-lg rounded-lg z-50 border border-gray-200 grid grid-cols-3 gap-2">
            {options.map((option) => (
                <Link
                    key={option.path}
                    to={option.path}
                    className="block px-4 py-2 hover:text-black/50 cursor-pointer text-[13px] whitespace-nowrap"
                >
                    {option.label}
                </Link>
            ))}
        </div>
    );
};


export default Dropdown;

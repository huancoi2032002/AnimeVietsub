import React, { useState, useRef, useEffect } from "react";
import './Search.scss';
import { SearchIcon, Vector } from "../../assets/index";
import SearchDropdown from './SearchDropdown';

type SearchProps = {
    width?: string;
};

const Search: React.FC<SearchProps> = ({ width }) => {
    return(
        <div className="w-[230px] h-10">
            <form className="w-full h-full">
                <label className="w-full h-full flex items-center relative">
                    <input className="search-input w-full h-full bg-[#00000099] pl-10 py-2 text-[13px] border border-[#263238] rounded-md outline-none" placeholder="Tìm: tên tiếng nhật, anh, việt"/>
                    <button className="px-3 absolute h-full"><SearchIcon className="w-4 opacity-50 "/></button>
                </label>
            </form>
        </div>  
    )
};

export default Search;
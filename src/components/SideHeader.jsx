import { classNames } from "../utils";

import logo from "../assets/logo.png";

const SideHeader = ({ isOpen }) => {
	return (
		<div className="flex gap-3 items-center">
			<img src={logo} alt="logo" className="w-10 h-10 rounded-[6px] shadow-sm shadow-text-color/50" />

			<div
				className={classNames(
					"flex flex-col",
					isOpen ? "opacity-1" : "opacity-0",
					"transition-opacity duration-300 ease-in-out"
				)}
			>
				<span className="text-[18px] font-medium truncate leading-5">Codinglab</span>
				<span className="truncate leading-4">Web developer</span>
			</div>
		</div>
	);
};

export default SideHeader;

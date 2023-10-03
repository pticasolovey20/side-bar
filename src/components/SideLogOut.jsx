import { classNames } from "../utils";

import LogOut from "../icons/LogOut";

const SideLogOut = ({ isOpen }) => {
	return (
		<button
			className={classNames(
				"w-full flex gap-2 p-2 rounded-md",
				"text-text-color hover:text-white",
				"fill-[#707070] hover:fill-white",
				"shadow-none hover:shadow-md hover:shadow-text-color",
				"hover:bg-primary-color",
				"transition-bg duration-300 ease-in-out"
			)}
		>
			<div className="aspect-square">
				<LogOut />
			</div>

			<span
				className={classNames(
					"truncate",
					isOpen ? "opacity-1" : "opacity-0",
					"transition-opacity duration-300 ease-in-out"
				)}
			>
				Logout
			</span>
		</button>
	);
};

export default SideLogOut;

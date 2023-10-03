import { classNames } from "../utils";

import Moon from "../icons/Moon";

const SideSwitch = ({ isOpen }) => {
	return (
		<div
			className={classNames(
				"w-full flex gap-2 p-2 rounded-md cursor-pointer",
				"text-text-color hover:text-white",
				"fill-[#707070] hover:fill-white",
				"shadow-none hover:shadow-md hover:shadow-text-color",
				"hover:bg-primary-color",
				"transition-bg duration-300 ease-in-out"
			)}
		>
			<div className="aspect-square">
				<Moon />
			</div>

			<span
				className={classNames(
					"truncate",
					isOpen ? "opacity-1" : "opacity-0",
					"transition-opacity duration-300 ease-in-out"
				)}
			>
				Dark Mode
			</span>
		</div>
	);
};

export default SideSwitch;

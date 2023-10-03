import { classNames } from "../utils";

import Search from "../icons/Search";

const SideSearch = ({ isOpen, setIsOpen }) => {
	return (
		<div
			className={classNames(
				"flex gap-2 p-2 rounded-md cursor-pointer",
				"text-text-color fill-[#707070] bg-primary-color-light",
				"shadow-sm shadow-text-color/50"
			)}
		>
			<button className="aspect-square" onClick={() => setIsOpen(true)}>
				<Search />
			</button>

			<input
				placeholder="Search..."
				className={classNames(
					"w-[80%] pl-1 outline-none bg-transparent",
					isOpen ? "opacity-1" : "opacity-0",
					"transition-opacity duration-300 ease-in-out"
				)}
			/>
		</div>
	);
};

export default SideSearch;

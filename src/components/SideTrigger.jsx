import { classNames } from "../utils";

import Chevron from "../icons/Chevron";

const SideTrigger = ({ isOpen, setIsOpen }) => {
	const position = isOpen
		? "transform transition-transform duration-500 ease-in-out rotate-180"
		: "transform transition-transform duration-500 ease-in-out rotate-0";

	return (
		<button
			className={classNames(
				"absolute top-[36%] -right-3",
				"rounded-full outline-none",
				"fill-white bg-primary-color",
				position
			)}
			onClick={() => setIsOpen(!isOpen)}
		>
			<Chevron />
		</button>
	);
};

export default SideTrigger;

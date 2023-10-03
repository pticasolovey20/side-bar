import { useState } from "react";
import { classNames } from "../utils";

import Home from "../icons/Home";
import Chart from "../icons/Chart";
import Bell from "../icons/Bell";
import PieChart from "../icons/PieChart";
import Heart from "../icons/Heart";
import Wallet from "../icons/Wallet";

import SideHeader from "./SideHeader";
import SideTrigger from "./SideTrigger";
import SideSearch from "./SideSearch";
import SideLogOut from "./SideLogOut";

const NAVIGATION = [
	{ id: 1, icon: <Home />, label: "Dashboard" },
	{ id: 2, icon: <Chart />, label: "Revenue" },
	{ id: 3, icon: <Bell />, label: "Notifications" },
	{ id: 4, icon: <PieChart />, label: "Analytics" },
	{ id: 5, icon: <Heart />, label: "Likes" },
	{ id: 6, icon: <Wallet />, label: "Wallets" },
];

const SideBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isActive, setIsActive] = useState(1);

	return (
		<section
			className={classNames(
				isOpen ? "w-[250px]" : "w-[72px]",
				"fixed flex flex-col gap-10",
				"rounded-br-lg text-text-color",
				"bg-sidebar-color shadow-[0px_7px_10px] shadow-text-color/50",
				"transition-width duration-500 ease-in-out"
			)}
		>
			<div className="relative p-4">
				<SideHeader isOpen={isOpen} />
				<SideTrigger isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>

			<div className="flex flex-col h-full justify-between">
				<div className="flex flex-col gap-2 px-4 py-2.5 pb-4 border-b">
					<SideSearch isOpen={isOpen} setIsOpen={setIsOpen} />
					<nav>
						<ul className="flex flex-col gap-2">
							{NAVIGATION.map(({ id, icon, label }) => (
								<li
									key={id}
									className={classNames(
										"w-full flex items-center gap-2",
										"p-2 rounded-md shadow-none cursor-pointer",

										isActive === id
											? "text-white bg-primary-color !shadow-text-color !shadow-md fill-white"
											: "",

										"fill-[#707070] hover:fill-white",
										"hover:text-white hover:shadow-md",
										"hover:shadow-text-color hover:bg-primary-color",
										'transition-bg duration-300 ease-in-out"'
									)}
									onClick={() => setIsActive(id)}
								>
									<div className="aspect-square">{icon}</div>
									<span
										className={classNames(
											isOpen ? "opacity-1" : "opacity-0",
											"transition-opacity duration-300 ease-in-out"
										)}
									>
										{label}
									</span>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<div className="p-4">
					<SideLogOut isOpen={isOpen} />
				</div>
			</div>
		</section>
	);
};

export default SideBar;

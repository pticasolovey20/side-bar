import { useState } from "react";
import { classNames } from "../utils";

import Chevron from "../icons/Chevron";
import Search from "../icons/Search";
import Home from "../icons/Home";
import Chart from "../icons/Chart";
import Bell from "../icons/Bell";
import PieChart from "../icons/PieChart";
import Heart from "../icons/Heart";
import Wallet from "../icons/Wallet";
import LogOut from "../icons/LogOut";
import Moon from "../icons/Moon";

import logo from "../assets/logo.png";

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

	return (
		<section
			className={classNames(
				isOpen ? "w-[250px]" : "w-[75px]",
				"fixed flex flex-col gap-10",
				"rounded-br-md text-text-color",
				"bg-sidebar-color shadow-md shadow-black/25",
				"transition-width duration-300 ease-in-out"
			)}
		>
			<div className="relative p-4">
				<div className="flex gap-3 items-center">
					<img src={logo} alt="logo" className="w-10 h-10 rounded-[6px]" />

					<div className={classNames("flex flex-col", isOpen ? "block" : "hidden")}>
						<span className="text-[18px] font-medium truncate leading-5">Codinglab</span>
						<span className="truncate leading-4">Web developer</span>
					</div>
				</div>

				<button
					className={classNames(
						"absolute top-1/3 -right-3",
						"p-0.2 rounded-full outline-none",
						"fill-white bg-primary-color"
					)}
					onClick={() => setIsOpen(!isOpen)}
				>
					<Chevron />
				</button>
			</div>

			<div className="flex flex-col h-full justify-between">
				<div className="flex flex-col px-4 py-2.5 pb-6 border-b">
					<div
						className={classNames(
							"flex gap-2 p-2 rounded-md cursor-pointer",
							"text-text-color fill-[#707070] bg-primary-color-light"
						)}
					>
						<button className="aspect-square" onClick={() => setIsOpen(true)}>
							<Search />
						</button>

						<input
							placeholder="Search..."
							className={classNames(
								"w-[80%] pl-1 outline-none bg-transparent",
								isOpen ? "block" : "hidden"
							)}
						/>
					</div>

					<nav>
						<ul className="flex flex-col gap-2">
							{NAVIGATION.map(({ id, icon, label }) => (
								<li
									key={id}
									className={classNames(
										"flex items-center gap-2",
										"p-2 rounded-md cursor-pointer",
										"hover:text-white",
										"fill-[#707070] hover:fill-white",
										"hover:bg-primary-color"
									)}
								>
									<div className="aspect-square">{icon}</div>
									<span className={classNames(isOpen ? "block" : "hidden")}>{label}</span>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<div className="px-4 py-6">
					<button
						className={classNames(
							"w-full flex gap-2 p-2 rounded-md cursor-pointer",
							"text-text-color hover:text-white",
							"fill-[#707070] hover:fill-white",
							"hover:bg-primary-color"
						)}
					>
						<div className="aspect-square">
							<LogOut />
						</div>

						<span className={classNames("truncate", isOpen ? "block" : "hidden")}>Logout</span>
					</button>

					<div
						className={classNames(
							"w-full flex gap-2 p-2 rounded-md cursor-pointer",
							"text-text-color hover:text-white",
							"fill-[#707070] hover:fill-white",
							"hover:bg-primary-color"
						)}
					>
						<button className="aspect-square">
							<Moon />
						</button>

						<span className={classNames("truncate", isOpen ? "block" : "hidden")}>Dark Mode</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SideBar;

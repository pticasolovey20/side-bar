import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen w-full flex">
			<SideBar />
			<main className="flex-1">{children}</main>
		</div>
	);
};

export default Layout;

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
	// Sticky Navbar
	const [sticky, setSticky] = useState(false);
	const handleStickyNavbar = () => {
		if (window.scrollY >= 80) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", handleStickyNavbar);
	});

	// submenu handler
	const [openIndex, setOpenIndex] = useState(-1);
	const handleSubmenu = (index: number) => {
		if (openIndex === index) {
			setOpenIndex(-1);
		} else {
			setOpenIndex(index);
		}
	};

	const usePathName = usePathname();

	return (
		<>
			<header
				className={`header left-0 top-0 z-40 flex w-full items-center ${
					sticky
						? "bg-header shadow-navbar-sticky fixed z-[9999] !bg-opacity-80 backdrop-blur-md transition"
						: "absolute bg-transparent"
				}`}
			>
				<div className="container">
					<div className="relative -mx-4 flex items-center justify-between">
						<Link
							href="/"
							className={`${sticky ? "py-2" : "py-4"} px-4 me-12 flex-grow-0 text-3xl font-bold`}
						>
							<h3 className="text-[--navbar-heading-color]">آفتاب‌پرست</h3>
						</Link>

						<div className="flex w-full items-center justify-between px-4 flex-1">
							<nav
								id="navbarCollapse"
								className={`navbar right-0 z-30 rounded border-[.5px] px-6 py-4 duration-300 visible static w-auto border-none !bg-transparent p-0 opacity-100 `}
							>
								<ul className="flex gap-10">
									{menuData.map((menuItem: any, index) => (
										<li key={index} className="group relative text-xl font-bold">
											{menuItem.path ? (
												<Link
													href={menuItem.path}
													className={`me-0 inline-flex px-0 py-6 ${
														usePathName === menuItem.path
															? "text-[--navbar-item-text-active-color]"
															: "text-[--navbar-item-text-color] hover:text-[--navbar-item-text-hover-color]"
													}`}
												>
													{menuItem.title}
												</Link>
											) : (
												<>
													<p
														onClick={() => handleSubmenu(index)}
														className="cursor-pointer items-center justify-between text-[--navbar-item-text-color] group-hover:text-[--navbar-item-text-hover-color] me-0 inline-flex px-0 py-6"
													>
														{menuItem.title}
														<span className="ps-1">
															<svg width="25" height="24" viewBox="0 0 25 24">
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
																	fill="currentColor"
																/>
															</svg>
														</span>
													</p>
													<div
														className={`submenu left-0 rounded-sm border border-[--navbar-dropdown_menu-border-color] bg-[--navbar-dropdown_menu-background-color] transition-[top] duration-300 group-hover:opacity-100 invisible absolute top-[110%] block w-[250px] p-4 opacity-0 shadow-lg group-hover:visible group-hover:top-full ${
															openIndex === index ? "block" : "hidden"
														}`}
													>
														{menuItem.submenu.map((submenuItem: any, index: any) => (
															<button
																key={index}
																className="block rounded py-2.5 text-[--navbar-item-text-color] hover:bg-[--navbar-dropdown_menu_item-background-hover-color] px-3 w-full my-1 text-start text-lg font-bold"
																onClick={submenuItem.onClick}
															>
																{submenuItem.title}
															</button>
														))}
													</div>
												</>
											)}
										</li>
									))}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;

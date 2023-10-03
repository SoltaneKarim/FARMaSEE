"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import img from "../../../public/home.png";
import log from "../../../../../front-end/assets/ic_login_logo.png";
const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="h-10">
			<div
				className={`flex flex-col items-center h-screen w-60 bg-red-400    ${
					isOpen ? "translate-x-0" : "-translate-x-60"
				} transition-transform duration-300 ease-in-out`}>
				<div className="flex items-center justify-center bg-green-600 rounded-md w-2/3 text-white p-3 my-4">
					<Image src={log} alt="Preview" width={50} height={50} />
					<h4 className="text-white">Farm@see</h4>
				</div>
				<div className="w-full">
					<div className="flex items-center p-2">
						<Image
							src={img}
							alt="Preview"
							width={30}
							height={30}
							className="filter brightness-0 invert"
						/>
						<h4 className="ml-2 text-white">Preview</h4>
					</div>
				</div>
			</div>

			<div
				className={`flex justify-between z-10  fixed top-0 left-0 h-10 bg-slate-400 rounded-r-xl ${
					isOpen ? "translate-x-60" : "translate-x-0"
				} transition-transform duration-300 ease-in-out`}>
				<div className=" flex justify-center items-center ">
					<button className="w-12 h-fit" onClick={toggleSidebar}>
						<span className="bar "></span>
						<span className="bar "></span>
						<span className="bar "></span>
					</button>
				</div>
			</div>
			<div className="fixed flex  items-center top-0 right-0  h-fit p-1 mx-5 my-2 ">
				
				<Image
					className="p-1 border-r-2"
					src={require("../../../public/notification.png")}
					width={30}
					height={30}
				/>
				<Image
					className="p-1 ml-3 "
					src={require("../../../public/woman.png")}
					width={50}
					height={50}
				/>
			</div>
		</div>
	);
};

export default Sidebar;

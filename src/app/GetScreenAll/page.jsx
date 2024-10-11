"use client";
import React, { useState } from "react";

function GetScreenAll() {
	const [specificScreen, setspecificScreen] = useState(null); // ใช้ null สำหรับตรวจสอบว่าข้อมูลมาหรือไม่
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const getScreenAll = async (e) => {
		e.preventDefault();
		setIsLoading(true); // เริ่มโหลดข้อมูล
		setError(null); // เคลียร์ข้อผิดพลาดก่อนการโหลดใหม่

		try {
			const response = await fetch("/api/getScreenAll", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (!response.ok) {
				throw new Error("Failed to fetch"); // ถ้าการตอบกลับไม่สำเร็จ ให้โยนข้อผิดพลาด
			}

			const data = await response.json();
			setspecificScreen(data);
		} catch (error) {
			console.error("Error fetching screen data:", error);
			setError(error.message); // ตั้งค่าข้อผิดพลาด
		} finally {
			setIsLoading(false); // หยุดการโหลดไม่ว่าจะสำเร็จหรือไม่
		}
	};

	return (
		<div className="relative overflow-hidden">
			<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
				<div className="text-center">
					<h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
						Screen All
					</h1>
					<p className="mt-3 text-gray-600 dark:text-neutral-400">For Test</p>
					<div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
						{/* Form */}
						<form onSubmit={getScreenAll}>
							<div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
								<div className=""></div>
								<div>
									<button
										type="submit"
										className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
									>
										<svg
											className="shrink-0 size-5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<circle cx={11} cy={11} r={8} />
											<path d="m21 21-4.3-4.3" />
										</svg>
									</button>
								</div>
							</div>
						</form>
						{/* End Form */}

						{/* SVG Elements */}
						<div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
							<svg
								className="w-16 h-auto text-orange-500"
								width={121}
								height={135}
								viewBox="0 0 121 135"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
									stroke="currentColor"
									strokeWidth={10}
									strokeLinecap="round"
								/>
								<path
									d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
									stroke="currentColor"
									strokeWidth={10}
									strokeLinecap="round"
								/>
								<path
									d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
									stroke="currentColor"
									strokeWidth={10}
									strokeLinecap="round"
								/>
							</svg>
						</div>
						<div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
							<svg
								className="w-40 h-auto text-cyan-500"
								width={347}
								height={188}
								viewBox="0 0 347 188"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
									stroke="currentColor"
									strokeWidth={7}
									strokeLinecap="round"
								/>
							</svg>
						</div>
					</div>

					{/* Display specificScreen */}
					<div className="pt-60">
						{isLoading ? (
							<p>Loading...</p> // แสดงข้อความเมื่อกำลังโหลดข้อมูล
						) : error ? (
							<p>Fetch error: {error}</p> // แสดงข้อความเมื่อเกิดข้อผิดพลาด
						) : specificScreen ? (
							<div>
								<h2>Screen Details:</h2>
								<pre>{JSON.stringify(specificScreen, null, 2)}</pre>
							</div>
						) : null}{" "}
						{/* ไม่แสดงอะไรเลยเมื่อยังไม่มีข้อมูล */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default GetScreenAll;

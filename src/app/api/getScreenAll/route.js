// app/api/getScreenById/route.js (ในกรณีที่ใช้ App directory)
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST() {
	try {
		// เรียก API จาก TargetR
		const response = await axios.get(
			`https://stacks.targetr.net/rest-api/v1/screens/`,
			{
				auth: {
					username: "api@omg.group", // ใส่ username ของคุณ
					password: "V041Digq", // ใส่ password ของคุณ
				},
			}
		);

		// ส่งข้อมูลกลับไปยัง client
		return NextResponse.json(response.data);
	} catch (error) {
		console.error("Error fetching screen data:", error);
		return NextResponse.json(
			{ error: "Error fetching screen data" },
			{ status: 500 }
		);
	}
}

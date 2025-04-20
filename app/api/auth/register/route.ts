import bcrypt from "bcryptjs";
import User, { IUser } from "@/models/User";
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";

export async function POST(req: Request) {
	const {
		wallet,
		password,
	} = await req.json();

	try {
		dbConnect();

		if (!wallet || !password) {
			return NextResponse.json({ error: "Invalid inputs" }, { status: 400 });
		}

		const existingUser = await User.findOne({ wallet });
		if (existingUser) {
			return NextResponse.json(
				{ error: "User already exists" },
				{ status: 400 }
			);
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser: IUser = new User({
			wallet,
			password: hashedPassword,
		});
		await newUser.save();

		return NextResponse.json(
			{ message: "You are registered successfully!" },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ error:`Internal Server Error: ${error}` },
			{ status: 500 }
		);
	}
}

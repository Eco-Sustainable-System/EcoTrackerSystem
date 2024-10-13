import connect from '../../../../lib/mongodb';
import User from '../../../models/User';
import { NextResponse } from 'next/server';

export async function GET(req) {
    console.log("inside get user");
    await connect();

    try {
        const user = await User.findById("670b8c582e36e5bc5231ac4e");

        console.log(user);

        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ message: 'Error fetching posts', error }, { status: 500 });
    }
}

import connect from '../../../../lib/mongodb';
import Post from '../../../models/posts';
import { NextResponse } from 'next/server';

export async function POST(req) {
    console.log("inside create post");

    const { newPostContent, newPostImage } = await req.json()

    // console.log(newPostContent);
    // console.log("-----------------");
    // console.log(newPostImage);

    await connect();

    try {

        const newPost = new Post({
            user: "670b8c582e36e5bc5231ac4e",
            content: newPostContent,
            image: newPostImage,
        });

        await newPost.save();


        return NextResponse.json({ status: 200 });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ message: 'Error fetching posts', error }, { status: 500 });
    }
}

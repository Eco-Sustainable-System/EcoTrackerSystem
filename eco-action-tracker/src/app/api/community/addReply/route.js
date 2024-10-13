import connect from '../../../../lib/mongodb';
import Post from '../../../models/posts';
import { NextResponse } from 'next/server';

export async function POST(req) {
    console.log("inside add reply");

    const { postId, commentId, newReplies } = await req.json()

    console.log(postId);
    console.log(commentId);
    console.log(newReplies);

    await connect();

    try {

        // console.log("after add");
        const post = await Post.findOneAndUpdate(
            { _id: postId, 'comments._id': commentId },
            {
                $push: {
                    'comments.$.replies': {
                        author: "670b8c582e36e5bc5231ac4e",  // Use 'user' for the author field
                        content: newReplies,
                    },
                },
            },
            { new: true } // Return the updated document
        );


        if (!post) {
            return NextResponse.json({ message: 'Error add comment' });
        }


        return NextResponse.json({ status: 200 });
    } catch (error) {
        console.error('Error add comment:', error);
        return NextResponse.json({ message: 'Error add comment', error }, { status: 500 });
    }
}

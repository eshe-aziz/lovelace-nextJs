// const baseUrl = process.env.BASE_URL;
// export async function GET(){
//     try{
// const response = await fetch(`${baseUrl}/posts`);
// const result = await response.json();
// return new Response(JSON.stringify(result),{
//     status:200,
// })}

// catch(error){
//         return new Response((error as Error).message),{
//             status:500,
//         }
//     }
// }


"use client";
import React from 'react';
// import usePosts from '../../../utils/usePosts';
import usePosts from '../components/utils/usePosts';
const PostsPage: React.FC = () => {
  const { posts, loading, error, handleLike, handleDislike, handleViews } = usePosts();
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen p-5">
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-screen p-5">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-5">
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="w-full max-w-md border p-5 mb-5 rounded-md shadow-md text-center">
            <h1 className="text-xl font-bold mb-4">{post.title}</h1>
            <img src={post.imageUrl} alt={post.title || 'Post image'} className="mb-4 w-full h-auto rounded-md" />
            <p className="mb-4">{post.body}</p>
            <div className="mb-4">
              <button
                onClick={() => handleLike(post.id)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
              >
                Like ({post.reactions?.likes || 0})
              </button>
              <button
                onClick={() => handleDislike(post.id)}
                className="bg-red-500 text-white py-2 px-4 rounded-md mr-2"
              >
                Dislike ({post.reactions?.dislikes || 0})
              </button>
              <br />
              <button
                onClick={() => handleViews(post.id)}
                className="bg-green-500 text-white py-2 px-4 rounded-md"
              >
                Views ({post.views || 0})
              </button>
            </div>
            <div className="text-sm text-gray-600">
              User ID: {post.userId}
            </div>
            <div className="text-sm text-gray-600 mt-2">
              Tags: {post.tags?.length > 0 ? post.tags.join(', ') : 'No tags'}
            </div>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};
export default PostsPage;
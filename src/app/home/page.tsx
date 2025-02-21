"use client"; // This makes the component a Client Component

import { lusitana } from '@/app/ui/fonts';
// import { Suspense } from 'react';
import PostDigest from '@/app/ui/home/postdigest';
// import { pageOneBlogs } from '@/app/lib/test_data';
import SaveButton from '@/app/ui/home/savebutton';
import { Post } from '@/app/lib/definitions';

import { useState, useEffect } from 'react';
import { getPage } from '../lib/connection';

export default function Page() {
  

  const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPage(0, 10).then(setPosts);
    }, []);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Home
      </h1>
      <div className="">
        <h2 className='mb-2 text-lg md:text-xl'> Recent Posts </h2>
        <div className="grid gap-4">
          {posts.map((post: Post) => (
            <PostDigest key={post.id} blog={post} />
          ))}
        </div>
      </div>
      <SaveButton />
    </main>
  );
}
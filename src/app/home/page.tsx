import { lusitana } from '@/app/ui/fonts';
// import { Suspense } from 'react';
import BlogDigest from '@/app/ui/home/blogdigest';
import { pageOneBlogs } from '@/app/lib/test_data';


export default async function Page() {
  
  


  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Home
      </h1>
      <div className="">
        <h2 className='mb-2 text-lg md:text-xl'> Recent Blogs </h2>
        <div className="grid gap-4">
          {pageOneBlogs.map((blog) => (
            <BlogDigest key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}
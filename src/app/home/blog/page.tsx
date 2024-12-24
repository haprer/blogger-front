import { lusitana } from '@/app/ui/fonts';
// import { Suspense } from 'react';

export default async function Page() {
  
  


  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Blog
      </h1>

      <div className='flex grow w-full h-full bg-white text-emerald-800'>
        <p>test</p>
      </div>
      
    </main>
  );
}
import { lusitana } from '@/app/ui/fonts';
// import { Suspense } from 'react';

export default async function Page() {
  
  


  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Home
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <p>List of all the blogs should appear here</p>
      </div>
    </main>
  );
}
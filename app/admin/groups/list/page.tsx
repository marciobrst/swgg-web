'use client'
import { IGroup } from '@/app/lib/mysql';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default async function Page() {
  
  const { data, error, isLoading } = useSWR<IGroup[]>("/api/groups", fetcher);
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Admin', href: '/admin' },
          { label: 'Groups', href: '/admin/groups' },
          {
            label: 'Create',
            href: '/admin/groups/create',
            active: true,
          },
        ]}
      />
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <ul>
        {data.map((group, i) => {         
           return (<li key={i}>{group.name}</li>) 
        })}
          <li></li>
        </ul>
      </div>
    </main>
  );
}
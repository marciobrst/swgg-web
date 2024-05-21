import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { IGroup, fetchGroups } from '@/app/lib/mysql';

export default async function Page() {
  
  const groups = await fetchGroups();
 
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
        {groups.map((group, i) => {         
           return (<li key={i}>{group.name}</li>) 
        })}
          <li></li>
        </ul>
      </div>
    </main>
  );
}
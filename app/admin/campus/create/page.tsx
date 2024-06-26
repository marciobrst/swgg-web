import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';

export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Admin', href: '/admin' },
          { label: 'Campus', href: '/admin/campus' },
          {
            label: 'Create',
            href: '/admin/campus/create',
            active: true,
          },
        ]}
      />
      <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* campo campus */}
        <div className="mb-4">
          <label htmlFor="campus" className="mb-2 block text-sm font-medium">
            Campus IFPA - importe o arquivo com a lista dos Campus para cadastro
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="campus"
                name="campus"
                type="file"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
 
          </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin/campus"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create</Button>
      </div>
    </form>
    </main>
  );
}
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
          { label: 'Exmembers', href: '/exmembers' },
          { label: 'Meetings', href: '/exmembers/meetings' },
          {
            label: 'Create',
            href: '/exmembers/meetings/create',
            active: true,
          },
        ]}
      />
      <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Data */}
        <div className="mb-4">
          <label htmlFor="data" className="mb-2 block text-sm font-medium">
            Data
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="data"
                name="data"
                type="date"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
   {/* Hora */}
   <div className="mb-4">
          <label htmlFor="hora" className="mb-2 block text-sm font-medium">
            Hora
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="hora"
                name="hora"
                type="time"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
{/* assunto */}
<div className="mb-4">
          <label htmlFor="assunto" className="mb-2 block text-sm font-medium">
          Assunto
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="assunto"
                name="assunto"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
{/* participantes */}
<div className="mb-4">
          <label htmlFor="participantes" className="mb-2 block text-sm font-medium">
          Participantes
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="participantes"
                name="participantes"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
          </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/exmembers/meetings"
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
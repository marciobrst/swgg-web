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
          { label: 'Events', href: '/exmembers/events' },
          {
            label: 'Create',
            href: '/exmembers/events/create',
            active: true,
          },
        ]}
      />
      <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* campo evento */}
        <div className="mb-4">
          <label htmlFor="evento" className="mb-2 block text-sm font-medium">
            Nome do evento
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="evento"
                name="evento"
                type="text"              
                placeholder="Insira o nome do evento"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
 
{/* data */}
<div className="mb-4">
          <label htmlFor="data" className="mb-2 block text-sm font-medium">
            Título
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="data"
                name="data"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
{/* link */}
<div className="mb-4">
          <label htmlFor="link" className="mb-2 block text-sm font-medium">
            Insira o link
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="link"
                name="link"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
{/* Organizadores */}
<div className="mb-4">
          <label htmlFor="organizadores" className="mb-2 block text-sm font-medium">
          Organizadores
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="organizadores"
                name="organizadores"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
        {/*  apoio */}
<div className="mb-4">
          <label htmlFor="apoio" className="mb-2 block text-sm font-medium">
           Apoio
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="apoio"
                name="apoio"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
{/*  local */}
<div className="mb-4">
          <label htmlFor="local" className="mb-2 block text-sm font-medium">
           Local
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="local"
                name="local"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
          </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/exmembers/events"
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
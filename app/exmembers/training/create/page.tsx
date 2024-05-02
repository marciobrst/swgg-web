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
          { label: 'Training', href: '/exmembers/training' },
          {
            label: 'Create',
            href: '/exmembers/training/create',
            active: true,
          },
        ]}
      />
      <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* capacitação */}
        <div className="mb-4">
          <label htmlFor="atividade" className="mb-2 block text-sm font-medium">
            Selecione o tipo de capacitação realizada
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
            <select name="select">
  <option value="curso" selected>Curso</option>
  <option value="minicurso" >Minicurso</option>
  <option value="oficina">Oficina</option>
  <option value="palestra">Palestra</option>
</select>

            </div>
          </div>
        </div>
 
{/* titulo */}
<div className="mb-4">
          <label htmlFor="titulo" className="mb-2 block text-sm font-medium">
            Título
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="titulo"
                name="titulo"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
{/* ministrante */}
<div className="mb-4">
          <label htmlFor="ministrante" className="mb-2 block text-sm font-medium">
            Responsável/Ministrante
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="ministrante"
                name="ministrante"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
{/* local */}
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
        {/*  Data */}
<div className="mb-4">
          <label htmlFor="data" className="mb-2 block text-sm font-medium">
           Data
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id=" data"
                name="data"
                type="date"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
{/*  evento */}
<div className="mb-4">
          <label htmlFor="evento" className="mb-2 block text-sm font-medium">
           Nome do Evento
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="evento"
                name="evento"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
          </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/exmembers/training"
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
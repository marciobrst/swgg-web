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
          { label: 'Reports', href: '/exmembers/reports' },
          {
            label: 'Create',
            href: '/exmembers/reports/create',
            active: true,
          },
        ]}
      />
      <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* campo relatorio */}
        <div className="mb-4">
          <label htmlFor="relatorio" className="mb-2 block text-sm font-medium">
            Selecione o tipo 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
            <select name="select">
  <option value="tipo1">tipo1</option>
  <option value="tipo2" >tipo2</option>
  <option value="tipo3">tipo3</option>
</select>

            </div>
          </div>
        </div>
 
          </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/exmembers/reports"
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
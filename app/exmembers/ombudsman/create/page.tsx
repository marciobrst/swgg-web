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
          { label: 'Ombudasman', href: '/exmembers/ombudasman' },
          {
            label: 'Create',
            href: '/exmembers/ombudasman/create',
            active: true,
          },
        ]}
      />
      <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* campo Ouvidoria */}
        <div className="mb-4">
          <label htmlFor="Ouvidoria" className="mb-2 block text-sm font-medium">
          Ouvidoria 
          </label>
          <label htmlFor="informe" className="mb-2 block text-sm font-medium">
          Informe aqui suas sugestões e/ou dificuldades
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <textarea id="ouvidoria" name="ouvidoria" rows="5" cols="33">
              </textarea>
            </div>
          </div>
        </div>
 
          </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/exmembers/ombudsman"
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
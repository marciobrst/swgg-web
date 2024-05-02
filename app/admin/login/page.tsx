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
          { label: 'Login', href: '/admin/login' },
          {
            label: 'Create',
            href: '/admin/login/create',
            active: true,
          },
        ]}
      />
      <form>
      <div className="rounded-md bg-gray-20 p-4 md:p-6">
        {/* campo login */}
        <div className="mb-4">
          <label htmlFor="login" className="mb-2 block text-sm font-medium">
           Login
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="campu"
                name="campu"
                type="text"                             
              />

            </div>
          </div>
        </div>
          {/* campo senha */}
          <div className="mb-4">
          <label htmlFor="senha" className="mb-2 block text-sm font-medium">
           Senha
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="senha"
                name="senha"
                type="password"                             
              />

            </div>
          </div>
        </div>
 
          </div>

      <div className="mb-2 block text-sm font-medium">
      <Button type="submit">Login</Button> 
        
      </div>
      <div className="mb-2 block text-sm font-medium">
    
        <Button type="submit">Recuperar senha</Button>
      </div>
    </form>
    </main>
  );
}
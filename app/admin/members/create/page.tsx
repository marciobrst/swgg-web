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
          { label: 'Members', href: '/admin/members' },
          {
            label: 'Create',
            href: '/admin/members/create',
            active: true,
          },
        ]}
      />
      <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* campo campus */}
        <div className="mb-4">
          <label htmlFor="campus" className="mb-2 block text-sm font-medium">
            Campus IFPA
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
            <select name="select">
  <option value="cBelém">Campus Belém</option>
  <option value="cCastanhal" >Campus Castanhal</option>
  <option value="cVigia">Campus Vigia</option>
</select>

            </div>
          </div>
        </div>
 {/* campo nome  */}
        <div className="mb-4">
          <label htmlFor="nome" className="mb-2 block text-sm font-medium">
            Nome 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nome"
                name="nome"
                type="text"              
                placeholder="Digite seu nome"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
 {/* campo e-mail */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            E-mail
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"              
                placeholder="Digite seu e-mail"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>

{/* campo CPF */}
<div className="mb-4">
          <label htmlFor="cpf" className="mb-2 block text-sm font-medium">
            Linha de pesquisa
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="cpf"
                name="cpf"
                type="text"              
                placeholder="Digite seu cpf sem ponto ou traço"
                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>

{/* campo lattes */}
<div className="mb-4">
          <label htmlFor="lattes" className="mb-2 block text-sm font-medium">
            Lattes
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="lattes"
                name="lattes"
                type="text"              
                placeholder="Insira o link do seu lattes"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

{/* campo telefone */}
<div className="mb-4">
          <label htmlFor="telefone" className="mb-2 block text-sm font-medium">
            Telefone
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="telefone"
                name="telefone"
                type="number"              
                 placeholder="(xx) xxxxx-xxxx"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
{/* campo curso */}
<div className="mb-4">
          <label htmlFor="curso" className="mb-2 block text-sm font-medium">
            Curso
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="curso"
                name="curso"
                type="text"              
                 placeholder="Preenchimento exclusivo para discente"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

{/* campo matricula */}
<div className="mb-4">
          <label htmlFor="telefone" className="mb-2 block text-sm font-medium">
            Telefone
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="matricula"
                name="matricula"
                type="number"              
                 placeholder="Preenchimento exclusivo para discente"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

{/* campo professor */}
<div className="mb-4">
          <label htmlFor="professor" className="mb-2 block text-sm font-medium">
            Professor
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="professor"
                name="professor"
                type="text"              
                 placeholder="Preenchimento exclusivo para discente"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
{/* campo grupo pesquisa */}
<div className="mb-4">
          <label htmlFor="grupopesquisa" className="mb-2 block text-sm font-medium">
            Grupo de Pesquisa
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="grupopesquisa"
                name="grupopesquisa"
                type="text"              
                 placeholder="Insira o grupo de pesquisa"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

      {/* campo membro externo */}
<div className="mb-4">
          <label htmlFor="membroexterno" className="mb-2 block text-sm font-medium">
            Membro externo
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="sim"
                name="sim"
                type="radio"              
             name="nao" value="sim"/> Sim<br />
             <input
                id="nao"
                name="nao"
                type="radio"              
              value="sim"/> Não<br 

                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>  

          </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin/members"
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
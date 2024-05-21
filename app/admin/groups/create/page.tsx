import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { IGroup, createGroup } from '@/app/lib/mysql';

export default async function Page() {

  // Action
  async function create(formData: FormData) {
    'use server';
    const rawFormData = {
      group_name: formData.get('grupo')!.toString(),
      area_conhecimento: formData.get('areaconhec')!.toString(),
      linha_pesquisa: formData.get('linhapesq')!.toString(),
    } ;
    // Test it out:
    createGroup(rawFormData);
  }
 
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
      <form action={create}>
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
 {/* campo nome grupo */}
        <div className="mb-4">
          <label htmlFor="nomegrupo" className="mb-2 block text-sm font-medium">
            Nome do Grupo
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="grupo"
                name="grupo"
                type="text"              
                placeholder="Digite aqui"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
 {/* campo area de conhecimento */}
        <div className="mb-4">
          <label htmlFor="areaconhec" className="mb-2 block text-sm font-medium">
            Aréa de Conhecimento
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="areaconhec"
                name="areaconhec"
                type="text"              
                placeholder="Selecione uma Área"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>

{/* campo linha pesquisa */}
<div className="mb-4">
          <label htmlFor="linhapesq" className="mb-2 block text-sm font-medium">
            Linha de pesquisa
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="linhapesq"
                name="linhapesq"
                type="text"              
                placeholder="Digite aqui"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>

{/* campo lideres */}
<div className="mb-4">
          <label htmlFor="lideres" className="mb-2 block text-sm font-medium">
            Líderes
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="lider"
                name="lider"
                type="text"              
                placeholder="Digite aqui"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
      {/* campo vice-lideres */}
<div className="mb-4">
          <label htmlFor="vice-lideres" className="mb-2 block text-sm font-medium">
            Vice-líder(es)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="vice-lider"
                name="vice-lider"
                type="text"              
                placeholder="Digite aqui"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
          </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin/groups"
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
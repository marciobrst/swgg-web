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
          { label: 'Publications', href: '/exmembers/publications' },
          {
            label: 'Create',
            href: '/exmembers/publications/create',
            active: true,
          },
        ]}
      />
      <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* campo publicacao */}
        <div className="mb-4">
          <label htmlFor="publicacao" className="mb-2 block text-sm font-medium">
           Tipo de Publicação
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
            <select name="select">
  <option value="periodico">Artigo em periódico</option>
  <option value="livro" >Livro/E-book</option>
  <option value="capituloLivro">Capítulo de livro</option>
  <option value="ArtigoEvento">Artigo em evento</option>
  <option value="resumoExpandido">Resumo expandido</option>
  <option value="resumo">Resumo</option>
  <option value="trabalhoConclusao">Trabalho de conclusão</option>
</select>

            </div>
          </div>
        </div>
  {/* campo autor(es) */}
  <div className="mb-4">
          <label htmlFor="autores" className="mb-2 block text-sm font-medium">
           Autor(es)
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="autores"
                name="autores"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>

         {/* campo ano publicação */}
  <div className="mb-4">
          <label htmlFor="ano" className="mb-2 block text-sm font-medium">
           Ano de Publicação
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="ano"
                name="ano"
                type="date"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>

         {/* campo link */}
  <div className="mb-4">
          <label htmlFor="link" className="mb-2 block text-sm font-medium">
           Link da publicação
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
         {/* campo DOI */}
  <div className="mb-4">
          <label htmlFor="doi" className="mb-2 block text-sm font-medium">
          DOI
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="doi"
                name="doi"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
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
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>

         {/* campo periodico */}
  <div className="mb-4">
          <label htmlFor="periodico" className="mb-2 block text-sm font-medium">
           Periódico
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="periodico"
                name="periodico"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>

               {/* campo livro */}
  <div className="mb-4">
          <label htmlFor="livro" className="mb-2 block text-sm font-medium">
           Livro
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="livro"
                name="livro"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div> 
                     {/* campo livro */}
  <div className="mb-4">
          <label htmlFor="edicao" className="mb-2 block text-sm font-medium">
           Edição
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="edicao"
                name="edicao"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div> 
                     {/* campo volume */}
  <div className="mb-4">
          <label htmlFor="volume" className="mb-2 block text-sm font-medium">
           Volume
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="volume"
                name="volume"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div> 
                     {/* campo paginas */}
  <div className="mb-4">
          <label htmlFor="paginas" className="mb-2 block text-sm font-medium">
           Páginas
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="paginas"
                name="paginas"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div> 
      
                     {/* campo editora */}
  <div className="mb-4">
          <label htmlFor="editora" className="mb-2 block text-sm font-medium">
           Editora
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="editora"
                name="editora"
                type="text"              
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div> 
          </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/exmembers/publications"
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
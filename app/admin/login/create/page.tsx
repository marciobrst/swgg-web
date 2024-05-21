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
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* campo nome */}
        <div className="mb-4">
          <label htmlFor="nome" className="mb-2 block text-sm font-medium">
            Nome Completo
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="nome"
                name="nome"
                type="text"              
                placeholder="Insira aqui eu nome completo"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
  {/* campo email */}
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
         {/* campo cpf */}
         <div className="mb-4">
          <label htmlFor="cpf" className="mb-2 block text-sm font-medium">
           CPF
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="cpf"
                name="cpf"
                type="text"              
                placeholder="Insira seu CPF"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
         {/* campo lattes */}
         <div className="mb-4">
          <label htmlFor="lattes" className="mb-2 block text-sm font-medium">
            Insira o link do lattes
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="lattes"
                name="lattes"
                type="text"              
                placeholder="Insira aqui o link do seu lattes"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>
         {/* campo Tiop de membro */}
         <div className="mb-4">
          <label htmlFor="membro" className="mb-2 block text-sm font-medium">
            Tipo de membro - selecione tipo de membro
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
            <select name="select">
  <option value="docenteInterno">Docente interno</option>
  <option value="discenteInterno">Discente interno</option>
  <option value="tecnicoInterno">Técnico interno</option>
  <option value="externo">Externo</option>
</select>           
            </div>
          </div>
        </div>
    {/* campo matricula */}
    <div className="mb-4">
          <label htmlFor="matricula" className="mb-2 block text-sm font-medium">
            Matrícula - campo exclusivo para discente interno
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="matricula"
                name="matricula"
                type="text"              
                placeholder="preenchimento exclusivo para discente interno"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>     
         {/* campo SIAPE */}
    <div className="mb-4">
          <label htmlFor="siape" className="mb-2 block text-sm font-medium">
            SIAPE - campo  exclusivo para servidor: docente e/ou técnico internos
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="siape"
                name="siape"
                type="text"              
                placeholder="preenchimento exclusivo para servidor: docente e/ou técnico internos"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>   
           {/* campo instituição */}
    <div className="mb-4">
          <label htmlFor="instituição" className="mb-2 block text-sm font-medium">
           Instituição - campo  exclusivo para membros externos
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="instituicao"
                name="sinstituicao"
                type="text"              
                placeholder="preenchimento exclusivo para membros externos"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>   
           {/* campo formacao */}
    <div className="mb-4">
          <label htmlFor="formacao" className="mb-2 block text-sm font-medium">
            Formação - campo  exclusivo para membros externos
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="formacao"
                name="formacao"
                type="text"              
                placeholder="preenchimento exclusivo para membros externos"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>   
   {/* campo estrangeiro */}
<div className="mb-4">
          <label htmlFor="estrangeiro" className="mb-2 block text-sm font-medium">
            Estrangeiro
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="sim"
                name="sim"
                type="radio"              
             value="sim"/> Sim<br />
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
        {/* campo membro externo */}
<div className="mb-4">
          <label htmlFor="membroexterno" className="mb-2 block text-sm font-medium">
            Membro externo
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="masculino"
                name="masculino"
                type="radio"              
             value="masculino"/> Masculino<br />
             <input
                id="feminino"
                name="feminino"
                type="radio"              
              value="feminino"/> Feminino<br 

                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>  
           {/* campo login */}
    <div className="mb-4">
          <label htmlFor="login" className="mb-2 block text-sm font-medium">
           Login
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="login"
                name="login"
                type="text"              
                placeholder="Insira o login desejado"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
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
                placeholder="digite a senha desejada "
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />

            </div>
          </div>
        </div>    
          </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin/login"
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
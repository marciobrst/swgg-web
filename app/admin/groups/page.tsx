'use client'

import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useEffect, useState } from 'react';


export type GrupoType = {
  id: string
  nome: string
}

export default function Page() {

  const [groups, setGroups] = useState(new Array<GrupoType>())

  function fetchGroups() {
    fetch('http://localhost:8080/v1/grupos')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
      setGroups(json)
    });    
  }


  useEffect(() => {    
    fetchGroups()
  }, [])

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Admin', href: '/admin' },
          { label: 'Groups', href: '/admin/groups' },
          {
            label: 'List',
            href: '/admin/groups/list',
            active: true,
          },
        ]}
      />
      <table width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {groups.map((group) => (
          <tr key={group.id}>
            <td>{group.id}</td>
            <td>{group.nome}</td>
            <td>
              Editar - Excluir
            </td>
          </tr>
        ))}
          
        </tbody>
      </table>
      <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </main>
  );
}
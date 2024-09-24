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

export default function Page() {

  const [groups, setGroups] = useState([])

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
    </main>
  );
}
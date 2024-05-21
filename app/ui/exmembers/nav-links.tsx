import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
  
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const links = [
    { name: 'Home', href: '/exmembers', icon: HomeIcon },
    {
      name: 'Extension',
      href: '/exmembers/extension',
      icon: UserGroupIcon,
    },

    {
      name: 'Training',
      href: '/exmembers/training',
      icon: UserGroupIcon,
    },
    {
      name: 'Events',
      href: '/exmembers/events',
      icon: UserGroupIcon,
    },
    {
      name: 'Meetings',
      href: '/exmembers/meetings',
      icon: UserGroupIcon,
    },
    {
      name: 'Publications',
      href: '/exmembers/publications',
      icon: UserGroupIcon,
    },
    {
      name: 'Ombudsman',
      href: '/exmembers/ombudsman',
      icon: UserGroupIcon,
    },
    {
      name: 'Reports',
      href: '/exmembers/reports',
      icon: UserGroupIcon,
    },
    {
      name: 'News',
      href: '/exmembers/news',
      icon: UserGroupIcon,
    },
    {
      name: 'Login',
      href: '/exmembers/login',
      icon: UserGroupIcon,
    },
  ];
  
  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </a>
          );
        })}
      </>
    );
  }
  
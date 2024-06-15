export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  { columnName: 'Company', links: [] },
  {
    columnName: 'Product',
    links: [{ href: 'https://webeatery.tech', title: 'WebEatery' }],
  },
  { columnName: 'Docs', links: [] },
  {
    columnName: 'Support',
    links: [
      { href: '/cookiepolicy', title: 'Cookie Policy' },
      { href: '/eula', title: 'EULA' },
      { href: '/privacy', title: 'Privacy Policy' },
      { href: '/support', title: 'Support and FAQs' },
      { href: '/terms', title: 'Terms of Service' },
      { href: '/privacy', title: 'Privacy Policy' },
    ],
  },
];

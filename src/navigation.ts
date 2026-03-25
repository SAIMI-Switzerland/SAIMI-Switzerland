import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/#about')
    },
    {
      text: 'Important Dates',
      href: getPermalink('/#importantdates')
    },
    {
      text: 'Call for Abstracts',
      href: getPermalink('/#call')
    },
    {
      text: 'Program',
      links: [
        { text: 'Date and Location', href: getPermalink('/#program-date-location') },
        { text: 'Schedule', href: getPermalink('/#program-schedule')},
        { text: 'Keynotes', href: getPermalink('/#program-keynote')},
        //{ text: 'Resources', href: getPermalink('/#resources')},
      ],
    },
    {
      text: 'Attend',
      href: getPermalink('/#attend')
    },
    {
      text: 'People',
      links: [
        { text: 'Organising Comittee', href: getPermalink('/#oc') },
        { text: 'Steering Comittee', href: getPermalink('/#sc')},
        { text: 'Local Support Team', href: getPermalink('/#lt')},
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ]};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/symposium-on-artificial-intelligence-in-medical-imaging' },
  ],
  footNote: `
    Made by the organising comittee based on the AstroWind template. · All rights reserved.
  `,
};

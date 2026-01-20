import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Important Dates',
      href: getPermalink('/#importantdates')
    },
    {
      text: 'About',
      href: getPermalink('/#about')
    },
    {
      text: 'Call for Papers',
      href: getPermalink('/#call')
    },
    {
      text: 'Program',
      links: [
        { text: 'Date and Location', href: getPermalink('/#program-date-location') },
        { text: 'Schedule', href: getPermalink('/#program-schedule')},
        { text: 'Keynotes', href: getPermalink('/#program-keynote')},
        { text: 'Resources', href: getPermalink('/#resources')},
      ],
    },
    {
      text: 'People',
      links: [
        { text: 'Organising Comittee', href: getPermalink('/#oc') },
        { text: 'Steering Comittee', href: getPermalink('/#sc')},
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ]};

export const footerData = {
  footNote: `
    Made by the organising comittee based on the AstroWind template. · All rights reserved.
  `,
};

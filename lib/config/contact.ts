export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@dixrom',
  site: 'dixrom.com',
  calendly: 'https://calendly.com/dixrom',
  links: {
    github: 'https://github.com/dixrom',
    linkedin: 'https://linkedin.com/in/dixrom',
    twitter: 'https://t.me/dixromat',
  },
};

import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  git?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'RS lang',
    slug: 'rslang',
    banner: '/static/projects/rslang/banner.jpg',
    website: 'https://dixrom.github.io/rslang/',
    description:
      'Final group project at RSSchool (EPAM) for 3 people, but only 2 people participated in the development. This app helps people in learning English. Ideas were implemented from lingualeo.com.',
    shortDescription:
      'This app helps people in learning English',
    repository: 'https://github.com/diXrom/rslang',
    stack: [
      Stack.typescript,
      Stack.react,
      Stack.redux,
      Stack.rtkq,
      Stack.mui,
      Stack.framermotion,
    ],
    dimensions: [365, 750],
    screenshots: [
      '/static/projects/rslang/Screenshot1.png', '/static/projects/rslang/Screenshot2.png', '/static/projects/rslang/Screenshot3.png',
    ],
    deployment: {
      git: 'https://github.com/diXrom/rslang',
      web: 'https://dixrom.github.io/rslang/',
    },
    subProjects: [],
  },
  {
    title: 'MERN blog',
    slug: 'blog',
    banner: '/static/projects/blog/Screenshot1.png',
    website: 'https://github.com/diXrom/blog',
    description:
      'The MERN stack is a popular set of technologies for creating a modern Single Page Application (SPA). MERN stands for MongoDB, Express, React, and Node.js',
    shortDescription:
      'It\'s a full stack Blog application with React, Redux, Node, Express & MongoDB.',
    repository: 'https://github.com/diXrom/blog',
    stack: [
      Stack.typescript,
      Stack.react,
      Stack.node,
      Stack.redux,
      Stack.rtkq,
      Stack.tailwindcss,
      Stack.framermotion,
    ],
    dimensions: [365, 750],
    screenshots: [
      '/static/projects/rslang/Screenshot1.png', '/static/projects/rslang/Screenshot2.png', '/static/projects/rslang/Screenshot3.png',
    ],
    deployment: {
      git: 'https://github.com/diXrom/blog',
      web: 'https://dixrom.github.io/blog/',
    },
    subProjects: [],
  },
  {
    title: 'Tmdb',
    slug: 'tmdb',
    banner: '/static/projects/tmdb/Screenshot1.png',
    website: 'https://dixrom.github.io/tmdb-movie/#',
    description:
      `Test task for the course React RS School. It's a simple web application to search for movies written in React `,
    shortDescription:
      'Test task for the course React RS School',
    repository: 'https://github.com/diXrom/tmdb-movie',
    stack: [
      Stack.typescript,
      Stack.react,
      Stack.redux,
      Stack.rtkq,
      Stack.mui,
      Stack.framermotion,
    ],
    dimensions: [365, 750],
    screenshots: ['/static/projects/tmdb/Screenshot1.png','/static/projects/tmdb/Screenshot2.png'],
    deployment: {
      git: 'https://github.com/diXrom/tmdb-movie',
      web: 'https://dixrom.github.io/tmdb-movie/#',
    },
    subProjects: [],
  },
  {
    title: 'Async race',
    slug: 'asyncrace',
    banner: '/static/projects/asyncrace/baner.png',
    website: 'https://dixrom.github.io/async-race/',
    description:
      `Race Game SPA. App has back-end(API) and front-end(managing the collection of the cars, operating its engines, and showing races statistics) web application written in React&RTKQ. Web Services on the free plan are automatically spun down after 15 minutes of inactivity. When a new request for a free service comes in, Render spins it up again so it can process the request.`,
    shortDescription:
      'Race Game SPA, app has back-end(API)',
    repository: 'https://github.com/diXrom/async-race',
    stack: [
      Stack.typescript,
      Stack.react,
      Stack.redux,
      Stack.rtkq,
      Stack.mui,
      Stack.framermotion,
    ],
    dimensions: [365, 750],
    screenshots: ['/static/projects/asyncrace/baner.png', '/static/projects/asyncrace/Screenshot1.png'],
    deployment: {
      git: 'https://github.com/diXrom/async-race',
      web: 'https://dixrom.github.io/async-race/',
    },
    subProjects: [],
  }, 
  {
    title: 'Online Store',
    slug: 'online-store',
    banner: '/static/projects/onlinestore/Screenshot1.png',
    website: 'https://dixrom.github.io/online-store/',
    description:
      `A simple store web application written in React`,
    shortDescription:
      'A simple online store',
    repository: 'https://github.com/diXrom/online-store',
    stack: [
      Stack.typescript,
      Stack.react,
      Stack.mui,
    ],
    dimensions: [365, 750],
    screenshots: ['/static/projects/onlinestore/Screenshot1.png', '/static/projects/onlinestore/Screenshot2.png'],
    deployment: {
      git: 'https://github.com/diXrom/online-store',
      web: 'https://dixrom.github.io/online-store/',
    },
    subProjects: [],
  }, 
  {
    title: 'OWl',
    slug: 'owl',
    banner: '/static/projects/owl/banner.png',
    website: 'https://owl-next-dixrom.vercel.app/courses/financial-analytics',
    description:
      'A simple application written in Next.Js.',
    shortDescription:
      'A simple application written in Next.Js.',
    repository: 'https://github.com/diXrom/rslang',
    stack: [
      Stack.react,
      Stack.nextjs,
      Stack.typescript,
      Stack.css,
    ],
    dimensions: [365, 750],
    screenshots: [
      '/static/projects/owl/Screenshot1.png', '/static/projects/owl/Screenshot2.png'
    ],
    deployment: {
      git: 'https://github.com/diXrom/next-app',
      web: 'https://owl-next-dixrom.vercel.app/courses/financial-analytics',
    },
    subProjects: [],
  }, 
  {
    title: '2048',
    slug: 'game-2048',
    banner: '/static/projects/game2048/Screenshot1.png',
    website: 'https://dixrom.github.io/game-2048/random-game/',
    description:
      `HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch. Add them up to reach 2048`,
    shortDescription:
      'Copy of the game 2048',
    repository: 'https://github.com/diXrom/game-2048',
    stack: [
      Stack.html,
      Stack.sass,
      Stack.javascript,
    ],
    dimensions: [365, 750],
    screenshots: ['/static/projects/game2048/Screenshot1.png'],
    deployment: {
      git: 'https://github.com/diXrom/game-2048',
      web: 'https://dixrom.github.io/game-2048/random-game/',
    },
    subProjects: [],
  },
];

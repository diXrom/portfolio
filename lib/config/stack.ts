import { Colors } from './colors';

export enum Stack {
  rtkq,
  typescript,
  javascript,
  redux,
  sass,
  git,
  jest,
  react,
  css,
  tailwindcss,
  html,
  mui,
  framermotion,
  nextjs,
  node
}

export const WorkStack = [
  Stack.html,
  Stack.css,
  Stack.sass,
  Stack.javascript,
  Stack.typescript,
  Stack.react,
  Stack.redux,
  Stack.rtkq,
  Stack.nextjs,
  Stack.node,
  Stack.git,
  Stack.jest,
  Stack.mui,
  Stack.tailwindcss,
  Stack.framermotion,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.node]: {
    value: 'NodeJS',
    color: Colors.node,
  },
  [Stack.nextjs]: {
    value: 'NextJs',
    color: Colors.web,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.rtkq]: {
    value: 'RTKQ',
    color: Colors.rtkq,
  },
  [Stack.redux]: {
    value: 'Redux',
    color: Colors.redux,
  },
  [Stack.sass]: {
    value: 'SASS',
    color: Colors.sass,
  },
  [Stack.jest]: {
    value: 'Jest',
    color: Colors.jest,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.git]: {
    value: 'Git',
    color: Colors.git,
  },
  [Stack.css]: {
    value: 'CSS',
    color: Colors.css,
  },
  [Stack.tailwindcss]: {
    value: 'TailwindCSS ',
    color: Colors.tailwindcss,
  },
  [Stack.html]: {
    value: 'HTML',
    color: Colors.html,
  },
  [Stack.mui]: {
    value: 'MUI',
    color: Colors.mui,
  },
  [Stack.framermotion]: {
    value: 'Framer Motion',
    color: Colors.framermotion,
  },
};

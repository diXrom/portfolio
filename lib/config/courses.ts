export type CourseContent = {
  name: string;
  slug?: string;
  description?: string;
  content?: CourseContent[];
};

export interface Course {
  title: string;
  slug: string;
  banner: string;
  description: string;
  shortDescription?: string;
  content: CourseContent[];
}

export const courses: Course[] = [
  {
    title: 'JS/FE Pre-School 2022',
    slug: 'oi6zx3pz',
    banner: '/static/courses/prejs.png',
    description:
      'RS School is free-of-charge and community-based education program conducted by The Rolling Scopes developer community',
    content: [],
  },
  {
    title: 'JavaScript/Front-end 2022Q1',
    slug: '3m20nnfq',
    banner: '/static/courses/js.png',
    description:
      'RS School is free-of-charge and community-based education program conducted by The Rolling Scopes developer community',
    content: [],
  },

  {
    title: 'REACT',
    slug: '',
    banner: '/static/courses/react.jpg',
    description:
      'RS School is free-of-charge and community-based education program conducted by The Rolling Scopes developer community',
    content: [],
  },
];

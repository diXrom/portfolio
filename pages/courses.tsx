import Card from '@/components/Card';
import { Header } from '@/components/Form';
import { PageSEO } from '@/components/SEO';
import siteMetadata from 'data/siteMetadata';
import config from '@/lib/config';

export default function Courses(): React.ReactElement {
  return (
    <>
      <PageSEO
        title={`Courses - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className='divide-y-2 divide-gray-100 fade-in dark:divide-gray-800'>
        <Header title='Courses' />
        <div className='container py-12'>
          <div className='flex flex-wrap justify-center -m-4'>
            {config.courses.map(({ slug, title, description, banner }) => (
              <Card
                key={slug}
                title={title}
                description={description}
                banner={banner}
                href={`https://app.rs.school/certificate/${slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

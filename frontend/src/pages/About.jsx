import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'chirp'}
      extra={
        <>
          <p>
            Website : <a href="https://poliglots.github.io/">poliglots</a>{' '}
          </p>
        </>
      }
    />
  );
};

export default About;

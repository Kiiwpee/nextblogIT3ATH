import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <hr></hr>

        <p>Hello! I am Sean Austine M. Simon</p>

        <p>Hello, My name is Sean Austine M. Simon. My hobbies are playing games with my friends or just hanging out with my friends. I am an old soul so my music taste is from the 90’s or 80’s. I am a person who is passionate about the things I do. If I set my goal on it, I'll definitely do anything to achieve it.</p>

        <p>For now I still don't have plans and I am still exploring stuff but what I like most is coding.</p>

        <p>This lesson I expect to enhance my knowledge and skills. I also expect to learn and develop skills in different language and enhance my logical thinking.</p>

        <p>I do not have specific topic that I would like to learn, but I enjoy topics that are new to me and that are a little bit challenging.</p>



        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
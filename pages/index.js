import Link from 'next/link';
import Head from 'next/head';
import Section from '../components/Section';
import Layout, { siteTitle } from '../components/Layout';
import Header from '../components/Header';
import Container from '../components/Container';
import Grid from '../components/Grid';
import ButtonWrapper from '../components/ButtonWrapper';
import Button from '../components/Button';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Header fixed />
      <Section>
        <Container centered>
          <Grid rows={1} columns={2}>
            <div>
              <h1>This is an H1 Heading.</h1>
              <p>
                This is a <strong>sample</strong> website.
              </p>
              <ButtonWrapper>
                <Button href='/' label='Primary Button' primary />
                <Button href='/' label='Secondary Button' primary={false} />
              </ButtonWrapper>
            </div>
          </Grid>
        </Container>
      </Section>
    </Layout>
  );
}

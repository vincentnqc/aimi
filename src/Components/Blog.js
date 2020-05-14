import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import pic1 from '../pics/notes.jpg';
import pic2 from '../pics/EddieAdamsatMason350.jpg';
import pic3 from '../pics/percussion.jpg';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Instructors', url: '/instructors' },
  { title: 'Instruments', url: '/instruments' },
  { title: 'Culture', url: '#' },
];

const mainFeaturedPost = {
  description:
    "Explore the world of music...",
  image: pic1,
};

const featuredPosts = [
  {
    title: 'Local Lessons',
    description:
      "No matter where you live, chances are we can introduce you to an amazing music teacher in your neighborhood. You can take lessons in the privacy of your own home or at your teacher's location.",
    image: pic2,
    imageText: 'Image Text',
  },
  {
    title: 'Experience',
    description:
      'Each lesson is customized to help you grow. Learn faster and easier than ever with personal attention from an expert instructor.',
    image: pic3,
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'Satisfaction Guaranteed',
  description:
    "Try a lesson. If you're not satisfied we'll refund your hard earned money.",
  
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="About Us" posts={["Independent Music Instructors believe that music is an essential part of  life –  whether that means playing for your own pleasure or giving your children a lifetime of self-expression. We offer piano lessons, guitar lessons, cello lessons, vocal lessons, clarinet and saxophone lessons, and so much more! Our music school includes many activities outside of weekly music lessons and we welcome you no matter what your age, level, and goals."]} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="AIMI" description="We're here to teach you!" />
    </React.Fragment>
  );
}
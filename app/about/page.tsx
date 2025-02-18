import GithubContributions from './github-contributions/github-contributions';
import Occupation from './occupation';
import Summary from './summary';

export const metadata = {
  title: 'About',
  description: 'About Artyom Loiko',
};

export default function About() {
  return (
    <>
      <Occupation />
      <Summary />
      <GithubContributions />
    </>
  )
}

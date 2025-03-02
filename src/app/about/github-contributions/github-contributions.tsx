import { Contributions } from 'contributions';
import { Activity } from 'react-activity-calendar';
import Calendar from './calendar';

const GITHUB_USERNAME = 'artyomloyko';

export default async function GithubContributions() {
  const contributions = await Contributions.forUser(GITHUB_USERNAME);
  const days = contributions.getDays();

  const data: Activity[] = days.map((day) => {
    const date = day.getDate();
    const intensity = day.getIntensity();
    const count = day.getCount();

    return {
      date: date,
      level: intensity,
      count: count,
    };
  });

  return <Calendar data={data} />;
}

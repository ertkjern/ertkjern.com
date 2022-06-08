import Project from '../../atoms/project/project';
import styles from './projects.module.scss';

const Projects = () => {
  return (
    <div id="projects" className="container">
      <h2 className={styles.heading}>Projects</h2>
      <p>A few of the hobby projects that has been released.</p>
      <div className="row justify-content-between">
        <Project
          name="Bunkring"
          url="https://apps.apple.com/no/app/bunkring/id1608870460"
          shortDescription="Find fuel locations for your leisure boat. A simple app created in corporation with bunkring.no"
          image={{
            src: '/images/projects/bunkring.png',
            alt: 'Bunkring logo',
          }}
        />

        <Project
          name="Tell i vei"
          url="https://apps.apple.com/no/app/tell-i-vei/id1498375122"
          shortDescription="A game to learn kids how to count to 10. Made for my nephews."
          image={{
            src: '/images/projects/tell_i_vei.png',
            alt: 'Tell i vei logo',
          }}
        />

        <Project
          name="Bounce"
          url="https://apps.apple.com/no/app/bounce-away/id1510417330?platform=iphone"
          shortDescription="A game inspired by flappy birds. Way to hard to even be fun"
          image={{
            src: '/images/projects/bounce_away.png',
            alt: 'Bounce away logo',
          }}
        />
      </div>
    </div>
  );
};

export default Projects;

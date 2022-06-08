import Project from '../../atoms/project/project';
import styles from './projects.module.scss';

const Projects = () => {
  return (
    <div id="projects" className={`container ${styles.projects}`}>
      <h2 className={styles.heading}>Prosjekter</h2>
      <p className={styles.description}>Det blir mange uferdige prosjekter, men det er alltid noen få som kommer, delvis, i mål. <br/><br/>
        Her finner du noen av appene som faktisk har fått se dagens lys.
      </p>
      <div className={styles.projectsWrapper}>
        <Project
          name="Bunkring"
          url="https://apps.apple.com/no/app/bunkring/id1608870460"
          shortDescription="Finn frem til nærmeste og billigste sted å bunkre drivstoff. Laget for og i sammarbeid med bunkring.no"
          image={{
            src: '/images/projects/bunkring.png',
            alt: 'Bunkring logo',
          }}
        />

        <Project
          name="Tell i vei"
          url="https://apps.apple.com/no/app/tell-i-vei/id1498375122"
          shortDescription="Lær deg å telle til 10. Et enkelt tellespill laget for mine nevøer. Laget i Unity3D"
          image={{
            src: '/images/projects/tell_i_vei.png',
            alt: 'Tell i vei logo',
          }}
        />

        <Project
          name="Bounce away"
          url="https://apps.apple.com/no/app/bounce-away/id1510417330?platform=iphone"
          shortDescription="Et spill inspirert av flappy birds. Endte opp alt for vanskelig for spilleren, men lærte Unity3D."
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

import styles from './cv.module.scss';
import CVExperience from '../../atoms/cv-experience/cv-experience';

const CV = () => {
  return (
    <div id="CV" className="container">
      <h2 className={styles.heading}>CV</h2>
      <h3 className={styles.subHeading}>Arbeidserfaring</h3>
      <div className="row justify-content-between">
        <CVExperience
          name="Adventure Tech / Go Fjords"
          fromDate={new Date('01/08/2019')}
          toDate={new Date()}
          jobTitle="Senior systemutvikler"
          jobType="Fulltid"
          image={{
            src: '/images/cv/adventuretech.svg',
            alt: 'Adventure tech logo',
          }}
        />
        <CVExperience
          name="Evry"
          fromDate={new Date('01/01/2017')}
          toDate={new Date('01/08/2019')}
          jobTitle="UX Utvikler"
          jobType="Full Time"
          image={{
            src: '/images/cv/evry.svg',
            alt: 'Evry logo',
          }}
        />

        <CVExperience
          name="Knowit"
          fromDate={new Date('01/07/2015')}
          toDate={new Date('01/01/2017')}
          jobTitle="Systemutvikler"
          jobType="Fulltid"
          image={{
            src: '/images/cv/knowit.svg',
            alt: 'Knowit logo',
          }}
        />
      </div>
      <h3 className={styles.subHeading}>Utdannelse</h3>
      <div className="row">
    
        <CVExperience
          name="Universitetet i Bergen"
          fromDate={new Date('01/01/2013')}
          toDate={new Date('01/01/2015')}
          jobTitle="Master"
          jobType=""
          image={{
            src: '/images/cv/uib.svg',
            alt: 'Universitetet i Bergen logo',
          }}
        />

        <CVExperience
          name="Universitetet i Agder"
          fromDate={new Date('01/01/2010')}
          toDate={new Date('01/01/2013')}
          jobTitle="Bachelor"
          jobType="Student"
          image={{
            src: '/images/cv/uia.svg',
            alt: 'Universitetet i Agder logo',
          }}
        />

        <CVExperience
          name="Handelshøyskolen i Bergen (BI)"
          fromDate={new Date('01/07/2015')}
          toDate={new Date('01/01/2017')}
          jobTitle="Prosjektledelse"
          jobType=""
          image={{
            src: '/images/cv/bi.svg',
            alt: 'Handelshøyskolen i Bergen (BI) Logo',
          }}
        />
      </div>
    </div>
  );
};

export default CV;

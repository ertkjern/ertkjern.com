import styles from './cv.module.scss';
import CVExperience from '../../atoms/cv-experience';

const CV = () => {
  return (
    <div className="container">
      <h2 className={styles.heading}>Curriculum Vitae</h2>
      <h3 className={styles.subHeading}>Work experience</h3>
      <div className="row justify-content-between">
        <CVExperience
          name="Adventure Tech / Go Fjords"
          fromDate={new Date('01/08/2019')}
          toDate={new Date()}
          jobTitle="Senior software developer"
          jobType="Full Time"
          image={{
            src: '/images/adventuretech.svg',
            alt: 'Adventure tech logo',
          }}
        />
        <CVExperience
          name="Evry"
          fromDate={new Date('01/01/2017')}
          toDate={new Date('01/08/2019')}
          jobTitle="UX Developer"
          jobType="Full Time"
          image={{
            src: '/images/evry.svg',
            alt: 'Evry logo',
          }}
        />

        <CVExperience
          name="Knowit"
          fromDate={new Date('01/07/2015')}
          toDate={new Date('01/01/2017')}
          jobTitle="Software Developer"
          jobType="Full Time"
          image={{
            src: '/images/knowit.svg',
            alt: 'Knowit logo',
          }}
        />
      </div>
      <h3 className={styles.subHeading}>Education</h3>
      <div className="row">
        <CVExperience
          name="Handelshøyskolen i Bergen (BI)"
          fromDate={new Date('01/07/2015')}
          toDate={new Date('01/01/2017')}
          jobTitle="Project Management"
          jobType=""
          image={{
            src: '/images/bi.svg',
            alt: 'School of economics BI Logo',
          }}
        />

        <CVExperience
          name="University of Bergen"
          fromDate={new Date('01/01/2013')}
          toDate={new Date('01/01/2015')}
          jobTitle="Master Degree"
          jobType=""
          image={{
            src: '/images/uib.svg',
            alt: 'University of Bergen logo',
          }}
        />

        <CVExperience
          name="University of Agder"
          fromDate={new Date('01/01/2010')}
          toDate={new Date('01/01/2013')}
          jobTitle="Bachelor Degree"
          jobType="Student"
          image={{
            src: '/images/uia.svg',
            alt: 'University of Agder logo',
          }}
        />
      </div>
    </div>
  );
};

export default CV;

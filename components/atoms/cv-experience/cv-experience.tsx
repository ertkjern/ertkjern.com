import Image from 'next/image';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInYears from 'date-fns/differenceInYears';
import isSameDay from 'date-fns/isSameDay';
import format from 'date-fns/format';
import styles from './cv-experience.module.scss';
import { Image as IImage } from '../../../interfaces/image';

interface ICVExperience {
  name: string;
  fromDate: Date;
  toDate: Date;
  jobTitle: string;
  jobType: string;
  image: IImage;
}

const CVExperience = ({
  name,
  fromDate,
  toDate,
  jobTitle,
  jobType,
  image,
}: ICVExperience) => {
  const getJobLength = (fromDate: Date, toDate: Date): string => {
    const yearDiff = differenceInYears(toDate, fromDate);
    // Get month diff (but not total, subtract years and add 1 as months begins on zero)
    const monthDiff = differenceInMonths(toDate, fromDate) - yearDiff * 12 + 1;

    const yearString = yearDiff > 0 ? `${yearDiff} years ` : '';
    const monthString = monthDiff > 0 ? `${monthDiff} months ` : '';

    // Return string
    return `${yearString}${monthString}`;
  };

  const getFromToDate = (fromDate: Date, toDate: Date) => {
    const isStillActiveJob = isSameDay(fromDate, toDate);
    return `${format(fromDate, 'MMMM yyyy')} - 
            ${isStillActiveJob ? 'Today' : format(toDate, 'MMMM yyyy')}`;
  };

  return (
    <div className={`${styles.col} col-sm-12 col-md-6 col-lg-4`}>
      {image && 
        <div className={styles.imageWrapper}>
          <Image width={340} height={92} src={image.src} alt={image.alt} loading="eager" /> {/** Small image sizes anyways. Just load at once */}
        </div>
      }
      <h4 className={styles.experienceName}>{name}</h4>
      <p className={styles.experienceDuration}>
        {getFromToDate(fromDate, toDate)} · {getJobLength(fromDate, toDate)}
      </p>
      <p className={styles.experienceTitle}>
        {jobTitle} {jobType ? `· ${jobType}` : ''}
      </p>
    </div>
  );
};

export default CVExperience;

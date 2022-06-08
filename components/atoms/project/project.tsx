import styles from './project.module.scss';
import { Image as IImage } from '../../../interfaces/image';
import Image from 'next/image';

interface ProjectProps{
    name: string;
    url: string;
    image: IImage;
    shortDescription: string;
}

const Project = ({name, url, shortDescription, image}: ProjectProps) => {
  return (
    <div className={styles.col}>
    {image && 
      <div className={styles.imageWrapper}>
        <Image width={150} height={150} src={image.src} alt={image.alt} />
      </div>
    }
    <h4 className={styles.projectName}>{name}</h4>

    <p className={styles.projectTitle}>
      {shortDescription}
    </p>
    <a href={url}>Read more</a>
  </div>
  );
};

export default Project;

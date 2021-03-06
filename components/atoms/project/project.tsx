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
        <Image 
          width={150}
          height={150}
          src={image.src}
          alt={image.alt} 
          loading="eager"
        /> {/** Small image sizes anyways. Just load eager at once */}
      </div>
    }
    <h4 className={styles.projectName}>{name}</h4>

    <p className={styles.projectTitle}>
      {shortDescription}
    </p>
    <a className="url" href={url}>Last ned</a>
  </div>
  );
};

export default Project;

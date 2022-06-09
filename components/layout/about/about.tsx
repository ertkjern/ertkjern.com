import styles from './about.module.scss';

const About = () => {
  return (
    <div id="about" className={`container ${styles.about}`}>
      <h2>Hei! 👋</h2>
      <p>
        Jeg er en systemutvikler fra Bergen 🌧️ som til vanlig jobber med å
        utvikle fremtidens reiselivsløsninger i Adventure Tech ✈️.
      </p>
      <p>
        På fritiden snubler jeg ofte over en del hobby-prosjekter. Enten for
        egen vinning eller for å hjelpe andre.
      </p>
      <p>
        Denne siden inneholder noen få prosjekter (langt i fra alle) jeg har
        jobbet med i tillegg til en CV, men er i hovedsak laget bare for å fylle
        domenet med noe halvfornuftig.
      </p>
    </div>
  );
};

export default About;

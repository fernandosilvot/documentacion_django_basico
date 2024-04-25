import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Django Básico',
    Svg: require('@site/static/img/django.svg').default,
    description: (
      <>
       Aprende lo básico de Django, <br /> desde la instalación hasta la creación de una aplicación web.
      </>
    ),
  },
  {
    title: 'Realizado',
    Svg: require('@site/static/img/cittsj.svg').default,
    description: (
      <>
        Realizado por Fernando Silva T. <br /> Estudiante de Ingeniería en Informática. <br />miembro del CITT Duoc Uc Sede San Joaquín.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

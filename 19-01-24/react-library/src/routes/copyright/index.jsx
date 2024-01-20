import style from "./index.module.scss";

import React from "react";

const CopyrightPage = () => {
  return (
    <div className={style.copyright - container}>
      <h1 className={styles.title_h1}>Termini di Servizio e Copyright</h1>
      <p className={styles.par_h1}>
        Benvenuto nella nostra applicazione! Questa pagina contiene le
        informazioni relative ai termini di servizio, copyright e regolamenti
        dell'applicazione.
      </p>
      <h2 className={styles.subtitle_h2}>
        INFORMATIVA PRIVACY AI SENSI DEGLI ARTT. 13 E 14 DEL REGOLAMENTO UE
        2016/679
      </h2>
      <p className={styles.par_h1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        blanditiis, libero totam cum deserunt porro quam, natus officia esse
        saepe sequi ipsum quod architecto distinctio maxime asperiores, sint ut
        repellat dignissimos itaque! Provident blanditiis excepturi sunt totam?
        Dolores et architecto mollitia veritatis, iure, nobis tempore,
        aspernatur reiciendis omnis deserunt vero.
      </p>
    </div>
  );
};

export default CopyrightPage;

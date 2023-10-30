import React from 'react'
import styles from './Faqs.module.css'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Faqs = () => {


  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>FAQs</h1>

      <Accordion className={styles.main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.btn} />}
          className={styles.acc}
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accChild}>
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={styles.main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.btn} />}
          className={styles.acc}
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accChild}>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Faqs
import React from 'react'
import styles from './Card.module.css'
import { Chip, Tooltip } from "@mui/material";
import image from '../../assets/assesment.png';
const Card = ({data,type}) => {
    // const getCard = (type) => {
      // switch(type){
      //   case "album" : {
      //     const {image,follows,title,songs} = data;
          return(
            
            
            <div className={styles.wrapper}>
            <div className={styles.card}>
            <img src ={image} alt='album'/>
             <div className={styles.banner}>
             <Chip
                    label="100 Millions" size="small" className={styles.chip} />
             </div>
            </div>
            <div className={styles.titleWrapper}>

              <p>BollyWood Songs</p>
            </div>
            </div>
      
          );
        }
     


export default Card;
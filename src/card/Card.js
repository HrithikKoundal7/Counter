import classes from './Card.module.css'
const Card = (props)=>{
    return<div> <div className={classes.card}>{props.children}</div>
      <ul className= {classes.box}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
}

export default Card;
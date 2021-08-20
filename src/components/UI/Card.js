import './Card.css';

const Card = (props) => {
    // classes would also grab class name inside component
    const classes ='card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;
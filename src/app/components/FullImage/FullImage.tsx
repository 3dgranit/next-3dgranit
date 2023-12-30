import classes from "./fullPage.module.scss";

const FullImage = (props) => {
    const {image, show, close} = props;
    if (!show) return null;
    return (
        <div className={classes.root} onClick={()=> close()}>
            <img src={image} alt='image'/>
        </div>
    )
}

export default FullImage;

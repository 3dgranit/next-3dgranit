import classes from "./fullPage.module.scss";

const FullImage = (props: any) => {
    const {image, show, close} = props;
    if (!show) return null;
    return (
        <div className={classes.root} onClick={()=> close()}>
            <img src={image} alt="main photo"/>
        </div>
    )
}

export default FullImage;

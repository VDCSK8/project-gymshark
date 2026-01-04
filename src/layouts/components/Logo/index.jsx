import LogoGymShark from "../../../assets/Logo/Logo.svg";
import styles from "./Logo.module.scss";
function Logo() {
  return (
    <div>
      <img src={LogoGymShark} alt="Gym Shark Logo"  className={styles.LogoGymShark}/>
    </div>
  );
}

export default Logo;

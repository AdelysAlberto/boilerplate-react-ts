import listIcons from "../../assets";


type TBaseIcon = {
  icon?: string
  width?: number
  height?: number
  alt?: string
  style?: string
  onClick?: () => void
}

const BaseIcon = ({ icon = "", width = 40, height = 40, alt = "", style = "", onClick }: TBaseIcon) => {

  const name = listIcons[icon];
  return <img src={name} width={width} height={height} alt={alt} className={style} onClick={onClick} />;

};

export default BaseIcon;

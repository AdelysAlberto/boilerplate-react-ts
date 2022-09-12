import listImages from "../../assets";

type TBaseImage = {
  image?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  style?: string;
}

const BaseImage = ({ image = "", width = 100, height = 100, alt = "", style = "" }: TBaseImage) => {

  const name = listImages[image];
  return <img src={name} width={width} height={height} alt={alt} className={style} />;

};

export default BaseImage;

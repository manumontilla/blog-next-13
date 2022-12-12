'use client'

import Sandia from "../../content/icons/sandia.svg";
import Cereza from "../../content/icons/cereza.svg";

const iconTypes = {
  cereza: Cereza,
  sandia: Sandia,
};


const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};

export default IconComponent;


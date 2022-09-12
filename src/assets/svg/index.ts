
import IconEmail from "./icon-email.svg";
import IconMobile from "./icon-mobile.svg";
import IconEmailBlue from "./icon-email-blue.svg";
import IconShowPassword from "./icon-show-password.svg";
import IconHidePassword from "./icon-hide-password.svg";
import IconSuccess from "./icon-success.svg";
import IconUSDC from "./icon-usdc.svg";
import IconUSDT from "./icon-usdt.svg";
import IconDAI from "./icon-dai.svg";
import IconCopy from "./icon-copy.svg";
import IconClose from "./icon-close.svg";


type Map = {
  [key: string]: string | undefined
}

const SvgImage: Map = {
  "default": "",
  "icon-email": IconEmail,
  "icon-mobile": IconMobile,
  "icon-email-blue": IconEmailBlue,
  "icon-show-password": IconShowPassword,
  "icon-hide-password": IconHidePassword,
  "icon-success": IconSuccess,
  "icon-usdt": IconUSDT,
  "icon-usdc": IconUSDC,
  "icon-dai": IconDAI,
  "icon-copy": IconCopy,
  "icon-close": IconClose,
};

export default SvgImage;


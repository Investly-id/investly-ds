// @ts-nocheck
import React, { useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { getTwColor } from "../Utils";

export const TypeIconName = [
  "address-book",
  "ambulance",
  "angle-double-down",
  "angle-double-left",
  "angle-double-right",
  "angle-double-up",
  "arrow-circle-down",
  "arrow-circle-left",
  "arrow-circle-right",
  "arrow-circle-up",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "award",
  "bars",
  "bell",
  "bell-slash",
  "biking",
  "book",
  "book-medical",
  "box",
  "briefcase",
  "building",
  "bulhorn",
  "calendar",
  "camera",
  "capsules",
  "check",
  "check-circle",
  "chevron-circle-down",
  "chevron-circle-left",
  "chevron-circle-right",
  "chevron-circle-up",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "clock",
  "comments",
  "copy",
  "credit-card",
  "crosshairs",
  "download",
  "envelope",
  "exchange",
  "exclamation-circle",
  "eye",
  "eye-slash",
  "file-alt",
  "fire-alt",
  "first-aid",
  "gift",
  "glass-whieskey",
  "handshake",
  "heart",
  "heartbeat",
  "history",
  "hospital",
  "image",
  "info-circle",
  "lightbulb",
  "link",
  "map-marked-alt",
  "map-marker-alt",
  "medkit",
  "medkit1",
  "minus",
  "mobile-alt",
  "money-bill",
  "newspaper",
  "paperclip",
  "pen",
  "phone-alt",
  "place-holder",
  "play",
  "plus",
  "prescription",
  "qrcode",
  "question-circle",
  "quote-left",
  "quote-right",
  "receipt",
  "redo",
  "running",
  "save",
  "search",
  "share-alt",
  "shoe-prints",
  "shopping-basket",
  "sign-in",
  "sign-out",
  "sliders",
  "sort",
  "star",
  "sticky-note",
  "stop",
  "sync",
  "th-large",
  "th-list",
  "thumbs-down",
  "thumbs-up",
  "times",
  "trash",
  "truck",
  "undo",
  "upload",
  "user",
  "user-md",
  "video",
  "walking",
  "wallet",
  "send",
  "paper-plane",
  "ellipsis",
  "home",
  "rey-card",
  "bullet",
  "lock",
  "compass",
  "chart-simple",
  "user-group",
  "pencil",
  "percent",
  "shield",
  "map-pin",
] as const;

export type IconName = typeof TypeIconName[number];

const IconMap: Record<IconName, React.FC> = {
  "address-book": require("./Icons/AddressBook").default,
  ambulance: require("./Icons/Ambulance").default,
  "angle-double-down": require("./Icons/AngleDoubleDown").default,
  "angle-double-left": require("./Icons/AngleDoubleLeft").default,
  "angle-double-right": require("./Icons/AngleDoubleRight").default,
  "angle-double-up": require("./Icons/AngleDoubleUp").default,
  "arrow-circle-down": require("./Icons/ArrowCircleDown").default,
  "arrow-circle-left": require("./Icons/ArrowCircleLeft").default,
  "arrow-circle-right": require("./Icons/ArrowCircleRight").default,
  "arrow-circle-up": require("./Icons/ArrowCircleUp").default,
  "arrow-down": require("./Icons/ArrowDown").default,
  "arrow-left": require("./Icons/ArrowLeft").default,
  "arrow-right": require("./Icons/ArrowRight").default,
  "arrow-up": require("./Icons/ArrowUp").default,
  award: require("./Icons/Award").default,
  bars: require("./Icons/Bars").default,
  bell: require("./Icons/Bell").default,
  "bell-slash": require("./Icons/BellSlash").default,
  biking: require("./Icons/Biking").default,
  book: require("./Icons/Book").default,
  "book-medical": require("./Icons/BookMedical").default,
  box: require("./Icons/Box").default,
  briefcase: require("./Icons/Briefcase").default,
  building: require("./Icons/Building").default,
  bulhorn: require("./Icons/Bulhorn").default,
  calendar: require("./Icons/Calendar").default,
  camera: require("./Icons/Camera").default,
  capsules: require("./Icons/Capsules").default,
  check: require("./Icons/Check").default,
  "check-circle": require("./Icons/CheckCircle").default,
  "chevron-circle-down": require("./Icons/ChevronCircleDown").default,
  "chevron-circle-left": require("./Icons/ChevronCircleLeft").default,
  "chevron-circle-right": require("./Icons/ChevronCircleRight").default,
  "chevron-circle-up": require("./Icons/ChevronCircleUp").default,
  "chevron-down": require("./Icons/ChevronDown").default,
  "chevron-left": require("./Icons/ChevronLeft").default,
  "chevron-right": require("./Icons/ChevronRight").default,
  "chevron-up": require("./Icons/ChevronUp").default,
  clock: require("./Icons/Clock").default,
  comments: require("./Icons/Comments").default,
  copy: require("./Icons/Copy").default,
  "credit-card": require("./Icons/CreditCard").default,
  crosshairs: require("./Icons/Crosshairs").default,
  download: require("./Icons/Download").default,
  envelope: require("./Icons/Envelope").default,
  exchange: require("./Icons/Exchange").default,
  "exclamation-circle": require("./Icons/ExclamationCircle").default,
  eye: require("./Icons/Eye").default,
  "eye-slash": require("./Icons/EyeSlash").default,
  "file-alt": require("./Icons/FileAlt").default,
  "fire-alt": require("./Icons/FireAlt").default,
  "first-aid": require("./Icons/FirstAid").default,
  gift: require("./Icons/Gift").default,
  "glass-whieskey": require("./Icons/GlassWhieskey").default,
  handshake: require("./Icons/Handshake").default,
  heart: require("./Icons/Heart").default,
  heartbeat: require("./Icons/Heartbeat").default,
  history: require("./Icons/History").default,
  hospital: require("./Icons/Hospital").default,
  image: require("./Icons/Image").default,
  "info-circle": require("./Icons/InfoCircle").default,
  lightbulb: require("./Icons/Lightbulb").default,
  link: require("./Icons/Link").default,
  "map-marked-alt": require("./Icons/MapMarkedAlt").default,
  "map-marker-alt": require("./Icons/MapMarkerAlt").default,
  medkit: require("./Icons/Medkit").default,
  medkit1: require("./Icons/Medkit1").default,
  minus: require("./Icons/Minus").default,
  "mobile-alt": require("./Icons/MobileAlt").default,
  "money-bill": require("./Icons/MoneyBill").default,
  newspaper: require("./Icons/Newspaper").default,
  paperclip: require("./Icons/Paperclip").default,
  "paper-plane": require("./Icons/PaperPlane").default,
  pen: require("./Icons/Pen").default,
  "phone-alt": require("./Icons/PhoneAlt").default,
  "place-holder": require("./Icons/PlaceHolder").default,
  play: require("./Icons/Play").default,
  plus: require("./Icons/Plus").default,
  prescription: require("./Icons/Prescription").default,
  qrcode: require("./Icons/Qrcode").default,
  "question-circle": require("./Icons/QuestionCircle").default,
  "quote-left": require("./Icons/QuoteLeft").default,
  "quote-right": require("./Icons/QuoteRight").default,
  receipt: require("./Icons/Receipt").default,
  redo: require("./Icons/Redo").default,
  running: require("./Icons/Running").default,
  save: require("./Icons/Save").default,
  search: require("./Icons/Search").default,
  send: require("./Icons/Send").default,
  "share-alt": require("./Icons/ShareAlt").default,
  "shoe-prints": require("./Icons/ShoePrints").default,
  "shopping-basket": require("./Icons/ShoppingBasket").default,
  "sign-in": require("./Icons/SignIn").default,
  "sign-out": require("./Icons/SignOut").default,
  sliders: require("./Icons/Sliders").default,
  sort: require("./Icons/Sort").default,
  star: require("./Icons/Star").default,
  "sticky-note": require("./Icons/StickyNote").default,
  stop: require("./Icons/Stop").default,
  sync: require("./Icons/Sync").default,
  "th-large": require("./Icons/ThLarge").default,
  "th-list": require("./Icons/ThList").default,
  "thumbs-down": require("./Icons/ThumbsDown").default,
  "thumbs-up": require("./Icons/ThumbsUp").default,
  times: require("./Icons/Times").default,
  trash: require("./Icons/Trash").default,
  truck: require("./Icons/Truck").default,
  undo: require("./Icons/Undo").default,
  upload: require("./Icons/Upload").default,
  user: require("./Icons/User").default,
  "user-md": require("./Icons/UserMd").default,
  video: require("./Icons/Video").default,
  walking: require("./Icons/Walking").default,
  wallet: require("./Icons/Wallet").default,
  ellipsis: require("./Icons/Ellipsis").default,
  home: require("./Icons/Home").default,
  bullet: require("./Icons/Bullet").default,
  "rey-card": require("./Icons/ReyCard").default,
  lock: require("./Icons/Lock").default,
  compass: require("./Icons/Compass").default,
  "chart-simple": require("./Icons/ChartSimple").default,
  "user-group": require("./Icons/UserGroup").default,
  pencil: require("./Icons/Pencil").default,
  percent: require("./Icons/Percent").default,
  shield: require("./Icons/Shield").default,
  "map-pin": require("./Icons/MapPin").default,
};

const Icon = (props: SvgProps & { name: IconName; size?: number }) => {
  const IconComponent = IconMap[props.name];

  const extendProps = useMemo(
    () => ({
      height: props?.size ?? props?.height,
      width: props?.size ?? props?.width,
      fill: getTwColor(props?.fill as string | undefined),
    }),
    [props?.fill, props?.size, props?.height, props?.width]
  );

  return <IconComponent {...props} {...extendProps} />;
};

Icon.defaultProps = {
  size: undefined,
};

export default React.memo(Icon);

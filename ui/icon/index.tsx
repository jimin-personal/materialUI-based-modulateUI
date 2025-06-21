import React from 'react';
import clsx from 'clsx';
import MCheckIcon from '@mui/icons-material/Check';
import Cancel from '@mui/icons-material/Cancel';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ChromeReaderMode from '@mui/icons-material/ChromeReaderMode';
import Close from '@mui/icons-material/Close';
import Error from '@mui/icons-material/Error';
import Info from '@mui/icons-material/Info';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import LocationCity from '@mui/icons-material/LocationCity';
import Warning from '@mui/icons-material/Warning';
import MChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AppsIcon from '@mui/icons-material/Apps';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import LinkIcon from '@mui/icons-material/Link';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  useCopyCourseLinkIconStyles,
  useErrorIconStyles,
  useIconColorStyles,
  useStepMoveIconStyles,
  useWarningIconStyles,
} from './useIconStyles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MuiDeleteIcon from '@mui/icons-material/Delete';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import MEditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MuiInputIcon from '@mui/icons-material/Input';
import CachedIcon from '@mui/icons-material/Cached';
import InputIcon from '@mui/icons-material/Input';
import PersonIcon from '@mui/icons-material/Person';
import MuiAddIcon from '@mui/icons-material/Add';
import MuiAddCircleIcon from '@mui/icons-material/AddCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InsertChart from '@mui/icons-material/InsertChart';
import VerticalSplit from '@mui/icons-material/VerticalSplit';
import ViewQuilt from '@mui/icons-material/ViewQuilt';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarsIcon from '@mui/icons-material/Stars';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TextsmsIcon from '@mui/icons-material/Textsms';
import PhoneIphone from '@mui/icons-material/PhoneIphone';
import LaptopWindows from '@mui/icons-material/LaptopWindows';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowRight from '@mui/icons-material/ArrowRight';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import PublicIcon from '@mui/icons-material/Public';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import DragIndicator from '@mui/icons-material/DragIndicator';
import OpenInNew from '@mui/icons-material/OpenInNew';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LockIcon from '@mui/icons-material/Lock';
import TurnedIn from '@mui/icons-material/TurnedIn';
import RemoveCircle from '@mui/icons-material/RemoveCircle';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import Home from '@mui/icons-material/Home';
import Star from '@mui/icons-material/Star';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MuiKeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiMapIcon from '@mui/icons-material/Map';
import MuiLockIcon from '@mui/icons-material/Lock';
import MuiAssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreditCard from '@mui/icons-material/CreditCard';
import Code from '@mui/icons-material/Code';
import MuiConstructionIcon from '@mui/icons-material/Construction';
import Android from '@mui/icons-material/Android';
import MuiOpenInNew from '@mui/icons-material/OpenInNew';
import GroupAdd from '@mui/icons-material/GroupAdd';
import LastPage from '@mui/icons-material/LastPage';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import ControlPointDuplicate from '@mui/icons-material/ControlPointDuplicate';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowForward from '@mui/icons-material/ArrowForward';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Search from '@mui/icons-material/Search';
import AddPhotoAlternateOutlined from '@mui/icons-material/AddPhotoAlternateOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOutlined from '@mui/icons-material/VideocamOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import { Share as MuiShareIcon } from '@mui/icons-material';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PollOutlined from '@mui/icons-material/PollOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SmartPhoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import styled from '@emotion/styled';

interface IconProps {
  className?: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large' | 'inherit' | undefined;
}

export const SuccessIcon: React.FC<IconProps> = ({ className }) => (
  <CheckCircle className={clsx('color-success', className)} />
);

export const WarningAlertIcon: React.FC<IconProps> = ({ className }) => (
  <Warning className={className} />
);

export const ErrorIcon: React.FC<IconProps> = ({ className }) => {
  const classes = useErrorIconStyles();
  return <Error className={clsx(classes.errorIcon, className)} />;
};

export const WarningIcon: React.FC<IconProps> = ({ className }) => {
  const classes = useWarningIconStyles();
  return (
    <svg
      className={clsx(classes.warningIcon, className)}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="1" width="4" height="18" fill="#F0564D" />
      <rect x="12" y="22" width="4" height="5" fill="#F0564D" />
    </svg>
  );
};

export const RightDrawerCloseIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.58984 7.41L10.1798 12L5.58984 16.59L6.99984 18L12.9998 12L6.99984 6L5.58984 7.41ZM15.9998 6H17.9998V18H15.9998V6Z"
        fill="#757575"
      />
    </svg>
  );
};

export const AssignGroupIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 7.5H3.75V5.25H2.25V7.5H0V9H2.25V11.25H3.75V9H6V7.5ZM13.5 8.25C14.745 8.25 15.7425 7.245 15.7425 6C15.7425 4.755 14.745 3.75 13.5 3.75C13.26 3.75 13.0275 3.7875 12.8175 3.855C13.245 4.4625 13.4925 5.1975 13.4925 6C13.4925 6.8025 13.2375 7.53 12.8175 8.145C13.0275 8.2125 13.26 8.25 13.5 8.25ZM9.75 8.25C10.995 8.25 11.9925 7.245 11.9925 6C11.9925 4.755 10.995 3.75 9.75 3.75C8.505 3.75 7.5 4.755 7.5 6C7.5 7.245 8.505 8.25 9.75 8.25ZM14.715 9.87C15.3375 10.4175 15.75 11.115 15.75 12V13.5H18V12C18 10.845 16.2225 10.1325 14.715 9.87ZM9.75 9.75C8.25 9.75 5.25 10.5 5.25 12V13.5H14.25V12C14.25 10.5 11.25 9.75 9.75 9.75Z"
        fill="#9E9E9E"
      />
    </svg>
  );
};

export const LeftArrowIcon: React.FC<IconProps> = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.67 3.77L15.9 2L6 11.9L15.9 21.8L17.67 20.03L9.54 11.9L17.67 3.77Z"
        fill="#757575"
      />
    </svg>
  );
};

export const RightArrowIcon: React.FC<IconProps> = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.33 3.77L8.1 2L18 11.9L8.1 21.8L6.33 20.03L14.46 11.9L6.33 3.77Z" fill="#757575" />
    </svg>
  );
};

export const NavigateNextStepKeyboardArrowIcon: React.FC<IconProps> = ({ className, onClick }) => {
  const classes = useStepMoveIconStyles();
  return (
    <div className={clsx(classes.iconContainer, className)} onClick={onClick}>
      <KeyboardArrowDown color={'action'} fontSize={'large'} />
    </div>
  );
};

export const NavigatePreviousStepKeyboardArrowIcon: React.FC<IconProps> = ({
  className,
  onClick,
}) => {
  const classes = useStepMoveIconStyles();
  return (
    <div className={clsx(classes.iconContainer, className)} onClick={onClick}>
      <KeyboardArrowUp color={'action'} fontSize={'large'} />
    </div>
  );
};

export const NavigateNextStepIcon: React.FC<IconProps> = ({ className, size, onClick }) => {
  return <ArrowDownward fontSize={size} className={className} onClick={onClick} />;
};

export const NavigatePreviousStepIcon: React.FC<IconProps> = ({ className, size, onClick }) => {
  return <ArrowUpward fontSize={size} className={className} onClick={onClick} />;
};

export const SelectedIcon: React.FC<IconProps & { isActive?: boolean }> = ({
  className,
  isActive,
  ...props
}) => {
  const colorClasses = useIconColorStyles();
  return (
    <MCheckIcon className={clsx(className, { [colorClasses.successColor]: isActive })} {...props} />
  );
};

export const EditIcon = MEditIcon;
export const DeleteIcon = MuiDeleteIcon;

export const AddDoerIcon = AddCircleOutlineIcon;
export const AddUserIcon = PersonAddIcon;
export const DashboardIcon = InsertChart;
export const MatrixIcon = AppsIcon;
export const ExportDataIcon = VerticalAlignBottomIcon;
export const DownloadFileIcon = VerticalAlignBottomIcon;
export const CopyLinkIcon = LinkIcon;
export const InfoIcon = Info;
export const InfoOutlinedIcon = InfoOutlined;
export const NextArrowIcon = ArrowForwardIcon;
export const HomeIconInStep = ArrowBackIosIcon;
export const CloseIcon = Close;
export const CancelIcon = Cancel;
export const AddFileImageIcon = AddPhotoAlternateIcon;
export const UploadFileIcon = CloudUploadIcon;
export const TooltipIcon = Info;
export const BackArrowIcon = KeyboardBackspaceSharpIcon;
export const StepContentIcon = PermMediaIcon;
export const ListSortIcon = SwapVertIcon;
export const LinkTemplateIcon = MuiInputIcon;
export const CityIcon = LocationCity;
export const AccordionArrowDropDownIcon = KeyboardArrowRight;
export const LoadMoreIcon = ArrowDownwardIcon;
export const GroupListMoreActionIcon = MoreVertIcon;
export const UserGroupEditIcon = MEditIcon;
export const ChangeViewIcon = CachedIcon;
export const SignOutIcon = InputIcon;
export const UserIcon = PersonIcon;
export const MoreIcon = MoreVertIcon;
export const AddTagIcon = MuiAddIcon;
export const TagIcon = LocalOfferIcon;
export const TagMenuIcon = MenuIcon;
export const SearchInputIcon = Search;
export const TemplateIcon = ViewQuilt;
export const UserManagementIcon = SupervisorAccount;
export const AddingUserRoleIcon = AddCircleIcon;
export const TemplateTotalStepsIcon = ChromeReaderMode;
export const StepCompletedIcon = CheckCircleIcon;
export const MenuDropDownIcon = ArrowDropDown;
export const NewNotificationIcon = NotificationImportantIcon;
export const NotificationIcon = NotificationsIcon;
export const UserSearchIcon = SearchIcon;
export const UserSearchClearIcon = Close;
export const TooltipHelpIcon = HelpIcon;
export const ChevronRightIcon = MChevronRightIcon;
export const ArrowBack = ArrowBackIcon;
export const MessageIcon = TextsmsIcon;
export const PhoneViewIcon = PhoneIphone;
export const LaptopViewIcon = LaptopWindows;
export const GuideIcon = HelpIcon;
export const PrevStepArrowIcon = LeftArrowIcon;
export const NextStepArrowIcon = RightArrowIcon;
export const StepGuideIcon = MenuBookIcon;
export const ArrowRightIcon = ArrowRight;
export const AddNewStepIcon = MuiAddIcon;
export const AddIcon = MuiAddIcon;
export const ImportStepIcon = SystemUpdateAltIcon;
export const DuplicateStepIcon = ControlPointDuplicateIcon;
export const ShareIcon = PublicIcon;
export const DuplicateFieldIcon = ControlPointDuplicateIcon;
export const UserGroupIcon = People;
export const AddFormQuestion = MuiAddCircleIcon;
export const DragIndicatorIcon = () => {
  const colorClasses = useIconColorStyles();
  return <DragIndicator className={colorClasses.greyColor} />;
};
export const TemplateEditIcon = MEditIcon;
export const ExternalLinkOpen = OpenInNew;
export const AddUserFileIcon = PermContactCalendarIcon;
export const PrivateIcon = LockIcon;
export const SaveIcon = TurnedIn;
export const CircleRemoveIcon = RemoveCircle;
export const HomeIcon = Home;
export const FixedStepIcon = Star;
export const SendInvitationIcon = StayCurrentPortraitIcon;
export const ArrowBackInCarouselIcon = KeyboardArrowLeftIcon;
export const ArrowForwardInCarouselIcon = KeyboardArrowRightIcon;
export const TimeLeftIcon = TimelapseIcon;
export const ClearThumbnailIcon = MuiDeleteIcon;
export const ShowPasswordIcon = Visibility;
export const HidePasswordIcon = VisibilityOff;
export const OpeningMapInMobileIcon = MuiKeyboardArrowDownIcon;
export const OpeningMapInPCIcon = LastPage;

export const FormInputSetAnswerIcon = MuiAssignmentIcon;
export const BookSessionIcon = CalendarTodayIcon;
export const FeatureTickIcon = CheckCircleIcon;
export const ManageSubscriptionICon = CreditCard;
export const EmbeddedLink = Code;
export const UnderDevelopmentIcon = MuiConstructionIcon;
export const AiIcon = Android;
export const ViewProgressIcon = MuiOpenInNew;
export const InviteUserIcon = GroupAdd;
export const DisabledEditNotion = MuiLockIcon;
export const NotionShareIcon = SendIcon;
export const NavigateFromCoverCardToStepIcon = KeyboardArrowDown;
export const NavigateWithinNormalStepCardIcon = ArrowDownward;
export const MoveStepToNextCardIcon = ArrowForward;
export const MoveStepToPreviousCardIcon = ArrowBack;
export const DeleteStepCardIcon = DeleteOutlineIcon;
export const ImageIcon = AddPhotoAlternateOutlined;
export const AddContentIcon = AddIcon;
export const VideoIcon = VideocamIcon;
export const TextStepTypeIcon = TextFieldsIcon;
export const ImageStepTypeIcon = AddPhotoAlternateOutlined;
export const VideoStepTypeIcon = VideocamOutlined;
export const CommunityShareIcon = ShareOutlined;
export const MoreMenuIcon = MoreVertOutlinedIcon;
export const MobileIcon = SmartPhoneOutlinedIcon;

export const RemoveCardIcon = Close;

export const AddStepIcon: React.FC<IconProps> = ({ onClick }) => {
  const AddStepIconContainer = styled.div`
    background-color: #6252eb;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #4b41a3;
    }
    &:active {
      background-color: #8881c7;
    }
  `;
  const AddStepIcon = styled(AddIcon)`
    color: white;
    font-size: 32px;
  `;
  return (
    <AddStepIconContainer onClick={onClick}>
      <AddStepIcon />
    </AddStepIconContainer>
  );
};

import home from "../assets/home.svg";
import cons from "../assets/dollar.svg";
import ptf from "../assets/folder.svg";
import mvt from "../assets/mvt.svg";
import doc from "../assets/doc.svg";
import quest from "../assets/quest.svg";
import news from "../assets/news.svg";
import chat from "../assets/chat.svg";

// MUI
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FolderIcon from "@mui/icons-material/Folder";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ForumIcon from "@mui/icons-material/Forum";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export const NavBarData = [
  { label: "ACCUEIL", path: "/", icon: home },
  { label: "CONSOLIDATION", path: "/cons", icon: cons },
  { label: "PORTEFEUILLES", path: "/ptf", icon: ptf },
  { label: "MOUVEMENTS", path: "mvt", icon: mvt },
  { label: "DOCUMENTS", path: "", icon: doc },
  { label: "QUESTIONNAIRE", path: "", icon: quest },
  { label: "NEWSLETTER", path: "", icon: news },
  { label: "MESSAGERIE", path: "", icon: chat },
];

const iconCss = {
  fontSize: "20px",
  color: "white",
  margin: "0px 25px",
};
export const NavBarData2 = [
  {
    label: "ACCUEIL",
    path: "/",
    icon: <HomeRoundedIcon sx={iconCss} />,
  },
  {
    label: "CONSOLIDATION",
    path: "/cons",
    icon: <FolderCopyIcon sx={iconCss} />,
  },
  {
    label: "PORTEFEUILLES",
    path: "/ptf",
    icon: <FolderIcon sx={iconCss} />,
  },
  {
    label: "MOUVEMENTS",
    path: "mvt",
    icon: <TrendingUpIcon sx={iconCss} />,
  },
  {
    label: "DOCUMENTS",
    path: "",
    icon: <TextSnippetIcon sx={iconCss} />,
  },
  {
    label: "QUESTIONNAIRE",
    path: "",
    icon: <LiveHelpIcon sx={iconCss} />,
  },
  {
    label: "NEWSLETTER",
    path: "",
    icon: <NewspaperIcon sx={iconCss} />,
  },
  {
    label: "MESSAGERIE",
    path: "",
    icon: <ForumIcon sx={iconCss} />,
  },
];

const iconCssMobile = {
  fontSize: "25px",
  color: "white",
  transition: "color 0.2s ease-in-out", // Add a smooth transition effect
  "&:hover": {
    color: "#06171f",
  },
  padding: "0px 10px",
};
export const NavBarData2Mobile = [
  {
    label: "ACCUEIL",
    path: "/",
    icon: <HomeRoundedIcon sx={iconCssMobile} />,
  },
  {
    label: "CONSOLIDATION",
    path: "/cons",
    icon: <FolderCopyIcon sx={iconCssMobile} />,
  },
  {
    label: "PORTEFEUILLES",
    path: "/ptf",
    icon: <FolderIcon sx={iconCssMobile} />,
  },
  {
    label: "MOUVEMENTS",
    path: "mvt",
    icon: <TrendingUpIcon sx={iconCssMobile} />,
  },
  {
    label: "DOCUMENTS",
    path: "",
    icon: <TextSnippetIcon sx={iconCssMobile} />,
  },
  {
    label: "QUESTIONNAIRE",
    path: "",
    icon: <LiveHelpIcon sx={iconCssMobile} />,
  },
  {
    label: "NEWSLETTER",
    path: "",
    icon: <NewspaperIcon sx={iconCssMobile} />,
  },
  {
    label: "MESSAGERIE",
    path: "",
    icon: <ForumIcon sx={iconCssMobile} />,
  },
];

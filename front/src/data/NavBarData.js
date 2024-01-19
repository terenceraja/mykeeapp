import home from "../assets/home.svg";
import cons from "../assets/dollar.svg";
import ptf from "../assets/folder.svg";
import mvt from "../assets/mvt.svg";
import doc from "../assets/doc.svg";
import quest from "../assets/quest.svg";
import news from "../assets/news.svg";
import chat from "../assets/chat.svg";

export const NavBarData = [
  { label: "ACCUEIL", path: "/", icon: home, cName: "nav_row" },
  { label: "CONSOLIDATION", path: "/cons", icon: cons, cName: "nav_row" },
  { label: "PORTEFEUILLES", path: "/ptf", icon: ptf, cName: "nav_row" },
  { label: "MOUVEMENTS", path: "mvt", icon: mvt, cName: "nav_row" },
  { label: "DOCUMENTS", path: "", icon: doc, cName: "nav_row" },
  { label: "QUESTIONNAIRE", path: "", icon: quest, cName: "nav_row" },
  { label: "NEWSLETTER", path: "", icon: news, cName: "nav_row" },
  { label: "MESSAGERIE", path: "", icon: chat, cName: "nav_row" },
];

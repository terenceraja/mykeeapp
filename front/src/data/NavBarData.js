import home from "../assets/home.svg";
import cons from "../assets/dollar.svg";
import ptf from "../assets/folder.svg";
import mvt from "../assets/mvt.svg";
import doc from "../assets/doc.svg";
import quest from "../assets/quest.svg";
import news from "../assets/news.svg";
import chat from "../assets/chat.svg";

export const NavBarData = [
  { label: "ACCUEIL", path: "/", icon: home, cName: "nav-rows" },
  { label: "CONSOLIDATION", path: "/cons", icon: cons, cName: "nav-rows" },
  { label: "PORTEFEUILLES", path: "/ptf", icon: ptf, cName: "nav-rows" },
  { label: "MOUVEMENTS", path: "mvt", icon: mvt, cName: "nav-rows" },
  { label: "DOCUMENTS", path: "", icon: doc, cName: "nav-rows" },
  { label: "QUESTIONNAIRE", path: "", icon: quest, cName: "nav-rows" },
  { label: "NEWSLETTER", path: "", icon: news, cName: "nav-rows" },
  { label: "MESSAGERIE", path: "", icon: chat, cName: "nav-rows" },
];

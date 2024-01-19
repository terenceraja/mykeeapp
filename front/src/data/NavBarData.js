import home from "../assets/home.svg";
import cons from "../assets/dollar.svg";
import ptf from "../assets/folder.svg";
import mvt from "../assets/mvt.svg";
import doc from "../assets/doc.svg";
import quest from "../assets/quest.svg";
import news from "../assets/news.svg";
import chat from "../assets/chat.svg";

export const NavBarData = [
  { title: "ACCUEIL", path: "/", icon: home, cName: "nav-rows" },
  { title: "CONSOLIDATION", path: "/cons", icon: cons, cName: "nav-rows" },
  { title: "PORTEFEUILLES", path: "/ptf", icon: ptf, cName: "nav-rows" },
  { title: "MOUVEMENTS", path: "mvt", icon: mvt, cName: "nav-rows" },
  { title: "DOCUMENTS", path: "", icon: doc, cName: "nav-rows" },
  { title: "QUESTIONNAIRE", path: "", icon: quest, cName: "nav-rows" },
  { title: "NEWSLETTER", path: "", icon: news, cName: "nav-rows" },
  { title: "MESSAGERIE", path: "", icon: chat, cName: "nav-rows" },
];

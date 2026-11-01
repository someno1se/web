
import {projects,contacts,projectCard,contactLink} from "./components.js";
const $=id=>document.getElementById(id);
projects.forEach(item=>$("project-grid")?.append(projectCard(item)));
contacts.forEach(item=>$("contact-links")?.append(contactLink(item)));
$("footer-year").textContent=new Date().getFullYear();
const theme=$("theme-toggle");
function syncTheme(){const isDark=document.documentElement.dataset.theme==="dark";theme?.setAttribute("aria-label",isDark?"라이트 모드 켜기":"다크 모드 켜기")}
syncTheme();
theme?.addEventListener("click",()=>{const value=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=value;try{localStorage.setItem("deader-theme",value)}catch(e){}syncTheme()});
const menu=$("menu-toggle"),mobile=$("mobile-nav");
menu?.addEventListener("click",()=>{const opened=menu.getAttribute("aria-expanded")==="true";menu.setAttribute("aria-expanded",String(!opened));menu.setAttribute("aria-label",opened?"메뉴 열기":"메뉴 닫기");mobile.hidden=opened});
mobile?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mobile.hidden=true;menu.setAttribute("aria-expanded","false")}));
let player=null,playing=false,apiReady=false;
const music=$("music-toggle"),status=$("music-status");
function syncMusic(){music?.setAttribute("aria-pressed",String(playing));music?.setAttribute("aria-label",playing?"배경음악 일시정지":"배경음악 재생");status.textContent=playing?"배경음악 재생 중":"배경음악 일시정지"}
window.onYouTubeIframeAPIReady=()=>{try{player=new YT.Player("youtube-player",{height:"1",width:"1",videoId:"dHFJXMIJkKU",playerVars:{autoplay:0,controls:0,loop:1,playlist:"dHFJXMIJkKU"},events:{onReady:()=>{apiReady=true},onStateChange:event=>{playing=event.data===YT.PlayerState.PLAYING;syncMusic()}}})}catch(e){status.textContent="음악 재생 기능을 사용할 수 없습니다"}};
music?.addEventListener("click",()=>{if(!apiReady||!player){status.textContent="음악 플레이어를 불러오는 중입니다";return}try{playing?player.pauseVideo():player.playVideo();playing=!playing;syncMusic()}catch(e){status.textContent="음악을 재생할 수 없습니다"}});
const youtube=document.createElement("script");youtube.src="https://www.youtube.com/iframe_api";youtube.async=true;document.head.append(youtube);

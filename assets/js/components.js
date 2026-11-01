
export const projects=[
{symbol:"TO",category:"TEAM",name:"Team Orbital",description:"함께하는 팀 활동과 협업 프로젝트.",status:"팀 활동"},
{symbol:"TB",category:"SERVICE",name:"Team Byte",description:"서비스와 커뮤니티를 운영하며 새로운 경험을 만드는 프로젝트.",status:"활동 중",href:"https://discord.gg/Bm6aGyRjKZ",linkText:"서버 둘러보기"},
{symbol:"AF",category:"API DEVELOPMENT",name:"AFN API",description:"다양한 기능을 연결하는 API 관련 개발 활동.",status:"활동 중"},
{symbol:"NG",category:"DEVELOPMENT",name:"NoT Guard",description:"안전하고 편리한 디지털 경험을 위한 개발 프로젝트.",status:"활동 중"}
];
export const contacts=[{name:"GitHub",url:"https://github.com/someno1se"},{name:"Discord 친구 추가",url:"https://discord.gg/YnewFYnX"}];
function el(tag,className,text){const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node}
export function projectCard(item){const card=el("article","project-card reveal"),top=el("div","project-top");top.append(el("span","project-category",item.category),el("span","project-status",item.status));card.append(top,el("div","project-symbol",item.symbol),el("h3","",item.name),el("p","",item.description));if(item.href){const link=el("a","project-link",item.linkText+" ↗");link.href=item.href;link.target="_blank";link.rel="noopener noreferrer";card.append(link)}return card}
export function contactLink(item){const link=el("a","contact-link",item.name+" ↗");link.href=item.url;link.target="_blank";link.rel="noopener noreferrer";return link}

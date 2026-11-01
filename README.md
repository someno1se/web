# Deader — Personal Website

개인 개발자 포트폴리오 및 잔월 커뮤니티 소개를 위한 정적 웹사이트입니다.

## 구조

- `index.html`: 페이지 마크업, SEO 및 소셜 공유 메타데이터
- `assets/css/styles.css`: 테마, 반응형 레이아웃, 전환 효과
- `assets/js/components.js`: 재사용 가능한 프로젝트 및 연락처 카드 컴포넌트
- `assets/js/app.js`: 프로젝트 데이터, 테마 전환, 모바일 메뉴, BGM 제어
- `CNAME`: GitHub Pages 커스텀 도메인 `deader-dev.xyz`

## 로컬 실행

```bash
python -m http.server 8000
```

`http://localhost:8000`에서 확인할 수 있습니다. 별도 빌드 도구는 필요하지 않습니다.

## 내용 수정

- 프로젝트와 연락처 정보: `assets/js/app.js`
- 소개와 잔월 커뮤니티 문구: `index.html`
- 색상, 타이포그래피, 레이아웃: `assets/css/styles.css`

잔월 초대 링크가 확정되기 전까지는 준비 중 상태로 표시합니다. 음악은 사용자가 버튼을 누를 때 YouTube 플레이어를 불러오며 브라우저 또는 영상 제공 환경에 따라 재생이 제한될 수 있습니다.
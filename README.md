# SoulHub

프런트엔드 초기 스캐폴드 (Vite + React + TypeScript + React Router + MUI)

## 구조
```
src/
	main.tsx            # ThemeProvider + RouterProvider 진입
	routes.tsx          # createBrowserRouter 정의
	ui/
		RootLayout.tsx    # 공용 AppBar / Footer / Outlet
		pages/
			DashboardPage.tsx
			CharactersPage.tsx
			CharacterDetailPage.tsx
			NotFoundPage.tsx
		theme/theme.tsx   # MUI 커스텀 테마
```

## 개발 실행
```bash
npm install
npm run dev
```

브라우저에서 기본 라우트:
- `/` 대시보드
- `/characters` 목록
- `/characters/:id` 상세(Mock)

## 다음 확장 아이디어
- Character JSON 업로드 & 검증 폼
- Risk Badge 컴포넌트 (색상/Tooltips)
- Diff Viewer (이전 버전 대비 변경점)
- 검색 & 필터 (risk, version 등)

## 테마 커스터마이징
`src/ui/theme/theme.tsx` 에서 palette / typography 수정 가능.

## 라이선스
TBD
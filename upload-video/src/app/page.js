import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        {/* Link 컴포넌트로 로고 수정 */}
        <Link href="/" className="logo">Wetube</Link>

        {/* 네비게이션 링크들 */}
        <Link href="/">Home</Link>
        <Link href="/sign-up">Sign up</Link> {/* URL에 하이픈 추가 (Next.js 규칙 준수) */}
        <Link href="/login">Login</Link>
        <Link href="/search">Search</Link>
        <Link href="/upload">Upload Video</Link>
      </nav>
      <div className="container">
        <h1>Welcome to WeTube</h1>
        <p>Upload and watch videos easily!</p>
      </div>
    </div>
  );
}

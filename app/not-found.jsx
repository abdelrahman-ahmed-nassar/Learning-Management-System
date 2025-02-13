"use client";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">Page Not Found</p>
        <p className="text-xl">Oops! The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

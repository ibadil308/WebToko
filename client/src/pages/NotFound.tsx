export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-4">Page Not Found</p>
        <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-block text-primary hover:underline">
          Go back home
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} SheCan NGO. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 text-sm">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

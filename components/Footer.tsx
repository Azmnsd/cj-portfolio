
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10 mb-5">
        <hr className="w-full border-gray-600 mb-6" />

        {/* Centered content */}
        <div className="flex flex-col items-center justify-center w-full text-sm text-gray-500">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Carl Jeffrey Tamayo
          </p>
        </div>
      </div>
    </footer>
  );
}

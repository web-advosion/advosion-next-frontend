export default function ButtonDownload({ documentPath }) {
  return (
    <a href={`${documentPath}`} download>
      <div className="max-w-40 h-8 px-8 rounded-2xl bg-(--cta-black) text-(--primary-bg) font-bold text-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-ou">
        <p className="">Download</p>
      </div>
    </a>
  );
}

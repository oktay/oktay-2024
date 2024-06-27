import MainMenu from "./main-menu";

export default function MainHeader() {
  return (
    <header className="z-10 bg-background border-b md:hidden">
      <div className="container h-12 flex items-center -ml-2">
        <MainMenu />
      </div>
    </header>
  );
}

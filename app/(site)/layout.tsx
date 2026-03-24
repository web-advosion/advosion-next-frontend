import NavBarSnap from "../actions/NavBarSnap";
import FooterV3 from "../components/FooterV3";
import AOSInit from "../components/AOSInit";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInit />
      <NavBarSnap />
      {children}
      <FooterV3 />
    </>
  );
}

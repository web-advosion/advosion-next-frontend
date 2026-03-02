import NavBarSnap from "../actions/NavBarSnap";
import FooterV2 from "../components/FooterV2";
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
      <FooterV2 />
    </>
  );
}

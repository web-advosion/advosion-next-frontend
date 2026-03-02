import FooterV2 from "@/app/components/FooterV2";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <FooterV2 />
    </>
  );
}

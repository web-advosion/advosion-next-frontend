export default function GoogleMap() {
  return (
    <div className="w-full h-full aspect-square">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.7532150345182!2d9.930506376872229!3d56.050135469050446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c6e589d400001%3A0x4703274b08dfa8c1!2sADVOSION!5e0!3m2!1sda!2sdk!4v1772112760965!5m2!1sda!2sdk"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

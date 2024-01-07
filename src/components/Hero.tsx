import heroImage from "../assets/hero.jpg";
export default function Hero() {
  return (
    <div className="__hero h-screen relative w-full">
      <img className="absolute top-0 left-0 z-0 w-full h-full object-cover" src={heroImage} alt="" />
    </div>
  );
}

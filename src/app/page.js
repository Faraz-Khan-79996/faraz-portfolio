import HeroSection from "./components/HeroSection";
import { intro , typeAnimationContent , cvLink , summary } from "./_content/homepage.content";
export default function Home() {
  return (
    <>
           <HeroSection 
        intro={intro} 
        typeAnimationContent={typeAnimationContent} 
        cvLink={cvLink} 
        summary={summary} 
      />
    </>

  );
}

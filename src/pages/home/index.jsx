import MainLayout from "../../layout/MainLayout";
import Action from "./components/Action";
import Banner from "./components/Banner";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import ListCourse from "./components/ListCourse";
import Terminal from "./components/Terminal";

export default function Home() {
  return (
      <main className="homepage" id="main">
        <Banner />
        <ListCourse />
        <Different />
        <Terminal />
        <Gallery />
        <Action />
      </main>
  );
}

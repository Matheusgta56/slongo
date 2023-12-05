import Courses from "./admin/page";
import Footer from "./admin/layout";
import Header from "./";

export const revalidate = 0
export default function Home() {
  return (
    <div className="bg-[#3d3d3d]">
      <div className="max-w-[1440px] m-auto ">
        <Header />
        <Courses />
        <Footer children={undefined} />

      </div>
    </div>


  )
}

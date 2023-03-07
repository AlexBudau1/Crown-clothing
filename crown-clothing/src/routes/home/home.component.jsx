import { Outlet } from "react-router-dom";

import Categories from "../../components/categories-source/categories-source.component";

const Home = () => {

  return (
    <div>
        <Categories/>
        <Outlet/>
    </div>
  );
}

export default Home;

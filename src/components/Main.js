import {BrowserRouter,Route,Routes} from "react-router-dom";
import CreateNews from "./CreateNews";
import NewsList from "./NewsList";
import TopMenu from "./TopMenu";

const Main=()=>{
    return(
        <div>
            <BrowserRouter>
            <TopMenu></TopMenu>
                <Routes>
                    <Route path="/CreateNews" element={<CreateNews></CreateNews>}></Route>
                    <Route path="/CreateNews" element={<CreateNews></CreateNews>}></Route>
                    <Route path="/NewsList" element={<NewsList></NewsList>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Main;
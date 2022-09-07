
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

function Router(){

return(
        <>
            <Routes>
                <Route path="/:coinID" element={<Coin/>}></Route>
                <Route path="/" element={<Coins/>}></Route>
            </Routes>
        </>
) 


}

export default Router;
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Questions from "./components/Questions/Questions"
import Result from "./components/Result/Result"

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" elemente={<Home />} />
            <Route path="/questions" elemente={<Questions />} />
            <Route path="/result" elemente={<Result />} />
        </Routes>
    )
}

export default AppRoutes
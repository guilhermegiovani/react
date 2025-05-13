import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Questions from "./components/Questions/Questions"
import Result from "./components/Result/Result"

function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/result" element={<Result />} />
        </Routes>
    )
}

export default AppRoutes
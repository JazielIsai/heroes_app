import { Route, Routes } from "react-router-dom"
import { DcScreen } from "../Components/dc/DcScreen"
import { HeroScreen } from "../Components/Hero/HeroScreen"
import { MarvelScreen } from "../Components/Marvel/MarvelScreen"
import { SearchScreen } from "../Components/Search/SearchScreen"
import { NavBar } from "../Components/Ui/Navbar"

export const DashboardRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelScreen/>} />
              <Route path="dc" element={<DcScreen/>} />
              
              <Route path="search" element={<SearchScreen/>} />
              <Route path="hero" element={<HeroScreen/>} />

              <Route path="/" element={<MarvelScreen/>}/>
          </Routes>
        </div>
    </>
  )
}

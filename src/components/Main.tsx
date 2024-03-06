import { useEffect, useState } from "react"
import Home from "./Home"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Main = () => {

  const [news,setNews] = useState([])
  const [search,setSearch] = useState("")
  const [menu,setMenu] = useState("")

    const getNews = async() =>{
        try{
            await fetch(`https://newsapi.org/v2/everything?q=${menu ? menu : "politics"}&sortBy=popularity&apiKey=6046867fa79f4b379c70524289a2823b`)
            .then(res => res.json())
            .then(json => setNews(json?.articles))
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        getNews()
    },[menu])

  return (
    <div>
      <Navbar setSearch={setSearch} setMenu={setMenu}/>
      <Home news={news} search={search} menu={menu}/>
      <Footer/>
    </div>
  )
}

export default Main

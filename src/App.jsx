import './App.css'
import Navbar from "./Components/Navbar"
import Section from "./Components/Section"
import Offers from "./Components/Offers"
import data from "./data"

export default function App() {

    const offers = data.map(item => {
      return (
        <Offers
          key={item.id}
          item={item}
          />
      )
    })
  return (
    <main>
      <Navbar />
      <Section />
      <section className="Offers-list">
        {offers}
      </section>
    </main>
  )
}

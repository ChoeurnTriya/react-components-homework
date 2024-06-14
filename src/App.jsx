import './App.css'
import { NavbarComponent } from './components/NavbarComponent'
import { FooterComponent } from './components/FooterComponent'
import { CTACardComponent } from './components/CTACardComponent'
import { ProductComponent } from './components/ProductComponent'

function App() {

  return (
    <>
      <main>
        <NavbarComponent/>
        <section className='flex flex-wrap justify-center gap-1'>
          <ProductComponent/>
          <ProductComponent/>
          <ProductComponent/>
          <ProductComponent/>
          <div className='flex flex-wrap gap-1'>
            <CTACardComponent/>
            <CTACardComponent/>
            <CTACardComponent/>
            <CTACardComponent/>
          </div>
        </section>
      </main>
      <footer>
        <FooterComponent/>
      </footer>
    </>
  )
}

export default App

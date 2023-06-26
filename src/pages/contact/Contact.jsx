
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"

function Contact() {
  const [data, setData] = useState("")

  useEffect(() => {
    const url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.220943472655!2d3.3253884483000316!3d6.61945190387148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91a131fba823%3A0x9da89698cf0ee432!2sAgege%20Train%20Station%20(Babatunde%20Fashola%20Station)!5e0!3m2!1sen!2sng!4v1686696327079!5m2!1sen!2sng"
    setData(url)
    AOS.init()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    
    // md:mx-14 md:px-10 px-4 h-screen relative

    <section className="h-screen">
      <h2 data-aos="fade-left" className="px-10 text-blue-500  text-xl font-semibold md:text-2xl">Contact</h2>
        <iframe data-aos="fade-in" className="w-full h-full z-10 dark:invert dark:grayscale mt-5 shadow-inner" src={data} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-10 md:-translate-x-0 md:-translate-y-0 md:top-96 duration-300">
        <div className="w-64 h-full bg-white p-5 dark:bg-[#161616] mx-auto shadow-2xl py-5 rounded-md">
          <div data-aos="zoom-down" className="text-gray-500 dark:text-gray-500 font-semibold text-center mb-5">
          <h3 className="mb-2">Ajegunle Agege, Lagos Nigeria</h3>
          <h4 className="mb-2">Abbalolo360@gmail.com</h4>
          <h4>+2349132316236</h4>
          </div>
          
          <div data-aos="zoom-in">
            <div className="text-center text-gray-200 dark: bg-[#4445f9] block w-24 py-1 shadow-md mb-4 mx-auto">FaceBook</div>
            <div className="text-center text-gray-200 dark: bg-[#E1306C] block w-24 py-1 shadow-md mb-4 mx-auto">Instagram</div>
            <div className="text-center text-gray-200 dark: bg-[#25D366] block w-24 py-1 shadow-md mx-auto">WhatsApp</div>
          </div>
        </div>

      </div>
    </section>
  )
  
}

export default Contact
import { useState } from "react"


function Footer() {
  
  const date = new Date()
  const fullYear = date.getFullYear()
 
  const [year] = useState(fullYear)
  return (
    <section className="bg-black/50 w-full h-full p-5 text-center">
     &copy; {year}
    </section>
  )
}

export default Footer
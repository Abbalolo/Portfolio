

// eslint-disable-next-line react/prop-types
function Blur({handleNav}) {
  return (
    <div className="backdrop-blur absolute top-0 z-30 left-0 h-screen w-full" onClick={ handleNav}></div>
  )
}

export default Blur
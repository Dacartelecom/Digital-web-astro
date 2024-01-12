import port from '../../public/img/Portada.jpg'

const Portada = () => {
  return (
    <div className='w-full flex relative'>
        <div className='w-1/3'></div>
        <div className='absolute w-full h-full'>
            <div className='bg-[#F6D183] h-full w-[50%]'>
                <div className='w-full h-full flex justify-center items-center' >
                    <div className='bg-[#232327] w-[80%] h-[300px] text-white text-6xl font-medium p-[30px] leading-[70px] shadow-black shadow-lg flex flex-col'>
                    <span className=''>LOS MEJORES <br />TALENTOS DE LA <br /> INDUSTRIA CALL CENTER</span>
                    <span className='text-[20px] leading-[50px] font-light'>Garantizamos la Presentación de un servicio óptimo por parte del capital humano</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-2/3'><img src={port.src} alt="" /></div>
    </div>
  )
}
export default Portada

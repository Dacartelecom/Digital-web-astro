import logo from '../../public/img/Logo-DyC-color-blanco- horizontal.png'

const Header = () => {
  return (
    <header className='bg-[#232327] h-[90px] w-full'>
        <div className='flex justify-between w-[90%] items-center h-full'>
        <div className='w-[280px] ml-10'>
            <img src={logo.src} alt="" />
        </div>
        <div className='text-white flex gap-[80px] text-2xl font-normal'>
            <span>Nosotros</span>
            <span>Servicios</span>
            <span>Clientes</span>
            <span>Mision</span>
        </div>
        </div>
    </header>
  )
}

export default Header
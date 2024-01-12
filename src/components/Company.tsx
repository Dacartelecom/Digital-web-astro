import showcase from '../../public/img/showcase.jpg'
 const Company = () => {
  return (
    <div className="flex justify-center items-center h-[600px] w-[80%] m-auto gap-[50px]">
        <div className='w-[1000px]'>
            <img src={showcase.src} alt="" />
        </div>
        <div className='flex flex-col justify-center items-center text-center w-[60%]'>
            <div className='flex flex-col justify-center items-center my-5'>
                <span className='text-3xl mb-3'>Texto de Prueba</span>
                <span className='text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur architecto consequatur eum magnam, id alias officiis dolorem autem debitis hic? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos molestias ducimus ipsa id nulla atque sit dolore magni ipsum soluta!</span>
            </div>
            <div className='flex flex-col justify-center items-center my-5'>
                <span className='text-3xl mb-3'>Texto de Prueba</span>
                <span className='text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur architecto consequatur eum magnam, id alias officiis dolorem autem debitis hic? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam minus ab omnis dolorem voluptatem tenetur ex, voluptates perspiciatis praesentium corporis.</span>
            </div>
        </div>
    </div>
  )
}
export default Company
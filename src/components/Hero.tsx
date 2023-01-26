import moment from 'moment';
import Image from "next/image";
const Hero = () => (
  <div className='my-16'>
    <h1 className='md:my-14 my-10 lg:my-16 text-5xl md:text-6xl lg:text-7xl font-black tracking-wide'>K&apos;s Dev Blog</h1>
    <div className='lg:flex gap-4 lg:gap-8'>
      <Image className="rounded-md" src={'http://placekitten.com/1060/900'} width={900} height={700} alt='cute cat' />
      <div className='lg:space-y-2 space-y-2 lg:my-0 my-4 max-w-prose lg:max-w-full flex flex-col'>
        <p className='lg:order-first order-2 mt-2 lg:mt-0 text-xs font-medium text-slate-500 uppercase tracking-widest'>{moment().format('MMMM Do YYYY')}</p>
        <h2 className='text-4xl font-semibold order-1'>The things that are currently on my mind as a part-time designer/developer</h2>
        <p className='text-ellipsis font-light text-lg order-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ullam modi quis ipsum quo exercitationem iste, culpa velit tempore necessitatibus reprehenderit mollitia deleniti, magni, illum voluptatum et facilis temporibus. Repellendus impedit voluptatibus ab ducimus molestias veniam culpa, fuga totam officiis!</p>
      </div>
    </div>
  </div>
)

export default Hero;
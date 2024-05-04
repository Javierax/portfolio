import websiteimg1 from '../assets/ecommerce-websites.jpg';
import websiteimg2 from '../assets/food-ecommerce.jpg';
import websiteimg3 from '../assets/website-blog.jpg';
export default function Projects(){
    return <section id='projects'className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
      <h1 className='text-4xl  border-b-2 border-secondary mb-5 w-[135px] font-bold'>Projects</h1>
      <p className='text-justify'>These are some of my best projects. I have built these with MERN check them out. </p>
        </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
        <div className='relative'>
        <img className='h-[200px] w-[500px]' src={websiteimg1} alt='website' />
        <div className='project-desc'>
        <p className='text-center px-5 py-5'>A Ecommerce Website Built with MERN STACT</p>
        </div>
        </div>
        <div className='relative'>
        <img className='h-[200px] w-[500px]' src={websiteimg2} alt="website 2" />
        <div className='project-desc'>
        <p className='text-center px-5 py-5 '> A Food Ecommerce Website Built with MERN STACT</p>
        </div>
        </div>
        <div className='relative'>
        <img className='h-[200px] w-[500px]' src={websiteimg3} alt='website 3' />
        <div className='project-desc'>
        <p className='text-center px-5 py-5'>A Basic Blog  Website Built with MERN STACT</p>

        </div>
        </div>
        </div>
        </div>

    </section>
    }
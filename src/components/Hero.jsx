import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, } from "react-icons/ai";
export default function Hero() {
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-4xl font-hero-font'>Hi,<br /> I'm Javidh Ahammed
                <p className='text-2xl'>I'm MERN Stack developer</p>
            </h1>
            <div className='flex py-10'>
                <a href="https://www.x.com/javidh_ahammed" className='pr-5 hover:text-white' ><AiOutlineTwitter size={40} /></a>
                <a href="https://www.facebook.com/javidh.ahammed?mibextid=ZbWKwL" className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
                <a href="https://www.instagram.com/__javierax__/" className='pr-5 hover:text-white'><AiOutlineInstagram size={40} /></a>
                <a href="https://www.linkedin.com/in/javidh-ahammed-756962228/" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                {/* <a href="#"className='hover:text-white'><AiOutlineWhatsApp size={40}/></a> */}
            </div>

        </div>

        <img className='md:w-1/3' src={HeroImg} alt='hero' />
    </section>
}
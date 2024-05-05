import AboutImg from '../assets/about.png'
export default function About (){
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} alt='about' />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-2 border-primary mb-5 w-[170px] font-bold'>About Me </h1>
            
            <p className='pb-5 text-justify'>My name is Javidh Ahammed, I'm MERN Stack web developer. I built innovative Websites with React.js.  </p>
            <p className='pb-5 text-justify'>I've honed my skills in building robust and interactive user interfaces using React. Additionally, I have a strong foundation in HTML, CSS, and JavaScript, which allows me to create dynamic and responsive web applications.</p>
            <p className='pb-5 text-justify'>I'm passionate about staying updated with the latest trends and technologies in the React ecosystem to deliver modern and efficient solutions.</p>
            <p className='pb-5 text-justify'>In backend I know Node.js,Express.js, and MongoDB</p>
            </div>
        </div>
    </section>
}
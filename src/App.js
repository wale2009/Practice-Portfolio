import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { 
  AiFillLinkedin, 
  AiFillInstagram, 
  AiFillGithub  
} from "react-icons/ai";
// import image from "./Images/IMG_1869.jpeg"

function App() {
  return (
    <div>
      <main className=" bg-gradient-to-r from-indigo-900 to-slate-500 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className=" text-cyan-200 text-xl"> PORTFOLIO</h1>
            <ul className=" flex items-center">
              <li>
                <a className=" bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-2 rounded-md ml-8" >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* <div className=" relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
            <img src={image}  layout="fill" objectFit="cover" alt=''/>
          </div> */}
          <div className="  text-center p-10 py-10">
            <h2 className=" text-3xl py-2 text-teal-500 font-medium md:text-6xl">
               Adewale Emmanuel Adebayo
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl"> 
              Full-Stack Developer
            </h3>
            <p className=" text-md py-5 leading-8 text-slate-950 md:text-xl mx-w-xl mx-auto"> 
              Freelancer providing services for programming in both front-end 
              and back-end content.
            </p>
          </div>
          
          <div className=" flex justify-center text-3xl gap-16 py-3 text-zinc-950">
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillLinkedin />
            <FaXTwitter />
            <FaFacebook />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

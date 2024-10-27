
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt="logo"/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
   
    <h1 class="text-3xl font-bold underline"></h1>
    <FaLinkedin/>
    <FaGithub/>
    
    <FaInstagram/>
    </div>
  </nav>
  )
}

export default Navbar

import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa'
function Footer() {
  return (
    <>
           <hr />
           <footer className='py-12'>
              <div  className="max-w-screen-2xl  container mx-auto px-4 md:px-20">
                <div className='flex justify-center flex-col items-center'>
                    <div className='flex space-x-4'>
                         <FaFacebook size={24}/>
                         <FaTwitter size={24}/>
                         <FaInstagram size={24}/>
                         <FaLinkedin size={24}/>                    
                    </div>
                    <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col '>
                            <p className="text-sm">&copy;2025 Hemraj Pal. Designed and developed by me.</p>
                            <p className="text-sm">Supportive Partner ❤️ VS Code</p>
                    </div>
                </div>

              </div>
           </footer>
           
    </>
  )
}

export default Footer

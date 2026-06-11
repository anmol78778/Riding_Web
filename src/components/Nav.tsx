'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import AuthModal from './AuthModal'
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, RootState } from '@/redux/store'
import { Bike, Car, ChevronRight, LogOut, Menu, Truck, X } from 'lucide-react'
import { signOut } from 'next-auth/react'
// import { setUserData } from '@/redux/userSlice'
// import axios from 'axios'
// import { getSocket } from '@/lib/socket'


const Nav_Items = ["Home","Bookings","About Us","Contact"]
function Nav() {
    const pathName = usePathname()
    const [authOpen, setAuthOpen] = useState(false)
    // const [profileOpen, setProfileOpen] = useState(false)
    // const [menuOpen, setMenuOpen] = useState(false)
    // const { userData } = useSelector((state: RootState) => state.user)
    // const [pendingCount,setPendingCount]=useState(0)
    // const dispatch = useDispatch<AppDispatch>()
    // const router = useRouter()
    // const handleLogOut = async () => {
    //     await signOut({ redirect: false })
    //     dispatch(setUserData(null))
    //     setProfileOpen(false)
    // }

    // const fetchCount=async ()=>{
    //     try {
    //         const {data}=await axios.get("/api/partner/bookings/pending-requests-count")
    //         console.log(data)
    //         setPendingCount(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(()=>{
    //    if(userData?.role=="partner"){
    //      fetchCount()
    //    }
    // },[userData?.role])
    //  useEffect(()=>{
    //      const socket=getSocket()
    //      console.log(socket)
    //      socket.on("new-booking",(data)=>{
    //       setPendingCount(prev=>prev+1)
    //      })
    //      return ()=>{
    //         socket.off("new-booking")
    //      }
    //     },[])
    return (
        <>
            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`fixed top-3 left-1/2 -translate-x-1/2
        w-[94%] md:w-[86%]
        z-50 rounded-full bg-[#0B0B0B] text-white
        shadow-[0_15px_50px_rgba(0,0,0,0.7)] py-3`}
            >
                <div className='max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between'>
                    <Image src={"/logo.png"} alt='logo' width={44} height={44} priority />
                  
 

                    <div className='hidden md:flex items-center gap-10'>

                        {Nav_Items.map((i,index)=>{

                            let href;
                            if(i==="Home"){
                                href="/"
                            }else{
                                href=`/${i.toLowerCase()}`
                            }

                            const active=href==pathName

                            return <Link key={index} href={href} className={`text-sm pl-2 font-medium transition ${active ? "text-white" : "text-gray-400 hover:text-white"}`} >{i}</Link>
                        })}
                    </div>

                     <button className='px-4 py-1.5 rounded-full bg-white text-black text-sm'  onClick={()=>setAuthOpen(true)}>
                        Login
                     </button>
                
                   </div>

                        </motion.div>
                   <AuthModal  open={authOpen} onClose={()=>setAuthOpen(false)}/>
                
        </>
    )
}

export default Nav

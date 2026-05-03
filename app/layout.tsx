import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';import Footer from '@/components/Footer';import CustomCursor from '@/components/CustomCursor';import ScanlineOverlay from '@/components/ScanlineOverlay';import LoadingScreen from '@/components/LoadingScreen';
const head=Space_Grotesk({subsets:['latin'],variable:'--font-head'});const inter=Inter({subsets:['latin'],variable:'--font-inter'});
export const metadata: Metadata={title:'Dev Fraol | Portfolio',description:'Web Developer & Graphic Designer portfolio',openGraph:{title:'Dev Fraol',description:'Immersive digital experiences'}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en' className={`${head.variable} ${inter.variable}`}><body><LoadingScreen/><CustomCursor/><ScanlineOverlay/><Navbar/><main className='max-w-6xl mx-auto px-4 py-10'>{children}</main><Footer/></body></html>}

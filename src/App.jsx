import { useState, useEffect, useRef, Fragment } from 'react'
import './App.css'

import { HiOutlineExternalLink } from 'react-icons/hi';
import { HiChevronDown } from 'react-icons/hi2';
import { BsInstagram, BsYoutube, BsGithub } from 'react-icons/bs';
import { MdMenu } from 'react-icons/md';

import * as Scroll from 'react-scroll'

import { Dialog, Transition } from '@headlessui/react'

function CardTag({href, children}) {
  return (
    <a
      className='flex items-center gap-1 px-4 py-2 border border-violet-500 text-violet-500 rounded-full hover:bg-violet-500/20 duration-500 ease-in-out'
      href={href} target='_blank'
    >
      <span className='text-xs font-semibold'>{children}</span>
      <HiOutlineExternalLink className='w-4 h-4'/>
    </a>
  )
}

function CardSocial({Icon, href}) {
  return (
    <a href={href} target='_blank'>
      <Icon className='w-8 h-8 text-white hover:opacity-50 duration-500 ease-in-out'/>
    </a>
  )
}

function Card({name, role, quote, image, github, instagram, children}) {
  return (
    <div className='z-10 hover:z-0 bg-slate-950 max-w-sm w-full flex flex-col items-center px-8 py-8 space-y-6 rounded-lg hover:shadow-2xl border border-violet-200/40 hover:shadow-violet-300/20 hover:scale-110 duration-500 ease-in-out'>
      <img src={image} className='aspect-square w-full'/>
      <div className='flex flex-col items-center space-y-1'>
        <h3 className='text-2xl font-bold tracking-tighter text-center'>{name}</h3>
        <span className='uppercase text-sm font-light tracking-wider text-center'>{role}</span>
        <p className='pt-2 text-base italic font-light text-center'>{quote}</p>
      </div>
      {(github || instagram) && (
        <div className='flex justify-center gap-3'>
          {github && <CardSocial Icon={BsGithub} href={`https://github.com/${github}`}/>}
          {instagram && <CardSocial Icon={BsInstagram} href={`https://instagram.com/${instagram}/`}/>}
        </div>
      )}
      <div className='flex flex-wrap w-full gap-3'>
        {children}
      </div>
    </div>
  )
}

function MenuLink({href, text, setMenuOpen}) {
  const [clicked, setClicked] = useState(false);
  return (
    <a
      href={href}
      className='group flex py-3 w-full items-center font-semibold text-3xl tracking-tight transition duration-300'
      onClick={() => {
        setClicked(true);
        setMenuOpen(false);
      }}
    >
      <div className='flex'>
        <div className={(clicked ? 'w-[2000px]' : 'w-8 group-hover:w-16') + ' h-0.5 bg-violet-500 group-hover:bg-violet-300 transition-all duration-500 flex flex-row-reverse'}>
          <div className='absolute w-2 h-0.5 mr-[0.5px] bg-violet-500 group-hover:bg-violet-300 duration-500 rotate-[30deg] origin-right'></div>
          <div className='absolute w-2 h-0.5 mr-[0.5px] bg-violet-500 group-hover:bg-violet-300 duration-500 -rotate-[30deg] origin-right'></div>
        </div>
      </div>
      <div className='px-3'>{text}</div>
    </a>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  useEffect(() => Scroll.scrollSpy.update(), []);
  return (
    <div className='select-none'>
      <Transition.Root show={menuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className='fixed inset-0 bg-slate-950 bg-opacity-90 transition-opacity'/>
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0 overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 translate-y-4 lg:translate-y-0 lg:scale-125"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-4 lg:translate-y-0 lg:scale-150"
              >
                <Dialog.Panel className="relative transform text-left transition-all py-16 px-8 lg:px-20 w-full min-h-full">
                  <div className='flex flex-col items-start'>
                    <MenuLink setMenuOpen={setMenuOpen} href='#' text='Top'/>
                    <MenuLink setMenuOpen={setMenuOpen} href='#members' text='Members'/>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className='w-full h-full bg-slate-950'>
        <div className='flex flex-col w-full h-[calc(100svh+40px)] py-12 px-8 lg:px-20 bg-[url("/hero.jpg")] bg-cover' style={{WebkitClipPath: 'polygon(0 0,100% 0%,100% calc(100% - 40px),0 100%)'}}>
          <nav className='flex justify-between'>
            <a href='/' className='flex items-center gap-1 hover:opacity-50 duration-500 ease-in-out'>
              <img src='/csclub2.png' className='w-8 h-8'/>
              <span className='font-semibold text-lg tracking-tighter text-white'>
                Computer Science Club
              </span>
            </a>
            <div className='flex items-center'>
              <button className='p-2 flex items-center gap-1 hover:opacity-50 duration-500 ease-in-out' onClick={() => setMenuOpen(true)}>
                <MdMenu className='w-8 h-8'/>
              </button>
            </div>
          </nav>
          <div className='flex flex-col w-full flex-1 justify-center items-start lg:items-center text-white space-y-6'>
            <h1 className='font-extrabold text-6xl tracking-tighter'>
              Be part of something bigger.
            </h1>
            <p className='text-base'>Computer Science Club at Kamiak High School</p>
          </div>
          <Scroll.Link
            to='members' spy={true} smooth='easeInOutCubic' duration={1000}
            className='flex flex-col items-center mb-[40px] hover:cursor-pointer animate-pulse duration-500 ease-in-out'
          >
            <p className='font-light uppercase tracking-widest text-xs'>Scroll down to learn more</p>
            <HiChevronDown className='w-8 h-8'/>
          </Scroll.Link>
        </div>
      </div>
      <div className='flex flex-col justify-center py-64 px-8 lg:px-20 bg-slate-950 text-base'>
        <div id='members' className='relative -translate-y-20'></div>
        <h1 className='font-extrabold tracking-tighter text-6xl'>Members</h1>
        <div className='flex flex-wrap pt-8 gap-8'>
          <Card name='Dylan Kim' role='Web developer' quote='CS club is beautiful and amazing' image='/dylan.jpg' github="KanyeMilk" instagram="Dylaniscoolerthanu">
          </Card>
          <Card name='Joseph Jackson' role='Full-stack' quote='Join CS Club!' image='/joseph.jpg' github='jwseph' instagram='jonjonwwww'>
            <CardTag href='https://kamiak.org/sniperbot'>Sniper Bot</CardTag>
            <CardTag href='https://yuu.pages.dev'>Yuu Player</CardTag>
          </Card>
          <Card name='Vivian Chen' role='Member' quote='hooray' image='/dylan.jpg' instagram="Zimbowimbo2000">
          </Card>
          <Card name='Fiona Ge' role='Member' quote='aeiou' image='/fiona.jpg' github="FoG-Ge">
          </Card>
          <Card name='Shawn Lu' role='Member' quote='aeiou' image='/dylan.jpg' github="ItalianPlumer">
          </Card>
          <Card name='Jace Lee' role='Member' quote='aeiou' image='/dylan.jpg' github="">
          </Card>
        </div>
        <h1 className='pt-64 text-2xl font-semibold tracking-tight text-center'>More coming soon!</h1>
      </div>
      <div className='bg-slate-950'>
        <div
          className='flex flex-col items-center w-full py-16 px-4 sm:px-6 lg:px-8 bg-[url("/hero.jpg")] bg-cover space-y-6'
          style={{WebkitClipPath: 'polygon(0 40px,100% 0%,100% 100%,0 100%)'}}
        >
          <div className='flex gap-6 pt-[40px]'>
            <CardSocial Icon={BsGithub} href='https://github.com/kamiakhs'/>
            <CardSocial Icon={BsInstagram} href='https://www.instagram.com/kamiak_csc/'/>
            <CardSocial Icon={BsYoutube} href='https://www.youtube.com/'/>
          </div>
          <a href='/' className='font-semibold text-sm tracking-tighter text-white hover:opacity-50 duration-500 ease-in-out'>
            © 2023 KHS Computer Science Club
          </a>
        </div>
      </div>
    </div>
  )
}

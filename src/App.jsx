import { useState } from 'react'
import './App.css'

import { HiOutlineExternalLink } from 'react-icons/hi';
import { HiChevronDown } from 'react-icons/hi2';
import { BsInstagram, BsYoutube } from 'react-icons/bs';

function CardTag({href, children}) {
  return (
    <a
      className='flex items-center gap-1 px-4 py-2 border border-violet-500 text-violet-500 rounded-full hover:bg-violet-500/10 duration-500 ease-in-out'
      href={href} target='_blank'
    >
      <span className='text-xs font-semibold'>{children}</span>
      <HiOutlineExternalLink className='w-4 h-4'/>
    </a>
  )
}

function Card({name, quote, image, children}) {
  return (
    <div className='max-w-sm w-full p-px bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg hover:shadow-2xl hover:shadow-violet-300/10 hover:scale-105 duration-500 ease-in-out'>
      <div className='bg-slate-950 h-full w-full flex flex-col items-center px-8 py-8 space-y-6 rounded-lg'>
        <img src={image} className='aspect-square w-full'/>
        <div className='flex flex-col items-center space-y-1'>
          <h3 className='uppercase text-2xl font-bold tracking-tight text-center'>{name}</h3>
          <p className='text-base italic text-center'>{quote}</p>
        </div>
        <div className='flex flex-wrap w-full gap-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <div className='w-full h-full bg-slate-950'>
        <div className='flex flex-col w-full h-[calc(100%+40px)] py-12 px-8 lg:px-20 bg-[url("/hero.jpg")] bg-cover select-none' style={{WebkitClipPath: 'polygon(0 0,100% 0%,100% calc(100% - 40px),0 100%)'}}>
          <nav className='flex'>
            <a href='/' className='flex items-center gap-1 hover:opacity-50 duration-500 ease-in-out'>
              <img src='/csclub2.png' className='w-8 h-8'/>
              <span className='font-semibold text-lg tracking-tighter text-white'>
                Computer Science Club
              </span>
            </a>
          </nav>
          <div className='flex flex-col w-full flex-1 justify-center items-start lg:items-center text-white space-y-6'>
            <h1 className='font-extrabold text-6xl tracking-tighter'>
              Be part of something bigger.
            </h1>
            <p className='text-base'>Computer Science Club at Kamiak High School</p>
          </div>
          <div className='flex flex-col items-center pb-[40px]'>
            <p className='font-light uppercase tracking-widest text-xs'>Scroll down to learn more</p>
            <HiChevronDown className='w-8 h-8'/>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center py-64 px-8 lg:px-20 bg-slate-950 text-base select-none'>
        <h1 className='font-extrabold tracking-tighter text-6xl'>The members</h1>
        <div className='flex flex-wrap pt-8 gap-8'>
          <Card name='Dylan Kim' quote='I dream of computer science' image='/dylan.jpg'>
          </Card>
          <Card name='Joseph Jackson' quote='Guys, add more padding' image='/joseph.jpg'>
            <CardTag href='https://kamiak.org/sniperbot'>Sniper Bot</CardTag>
            <CardTag href='https://yuu.pages.dev'>Yuu Player</CardTag>
          </Card>
        </div>
        <h1 className='pt-64 text-2xl font-semibold tracking-tight text-center'>More coming soon!</h1>
      </div>
      <div className='bg-slate-950'>
        <div
          className='flex flex-col items-center w-full py-16 px-4 sm:px-6 lg:px-8 bg-[url("/hero.jpg")] bg-cover space-y-4 select-none'
          style={{WebkitClipPath: 'polygon(0 40px,100% 0%,100% 100%,0 100%)'}}
        >
          <div className='flex gap-4 pt-[40px]'>
            <a href='https://www.instagram.com/kamiak_csc/' target='_blank' className='hover:opacity-50 duration-500 ease-in-out'>
              <BsInstagram className='w-8 h-8'/>
            </a>
            <a href='https://www.youtube.com/' target='_blank' className='hover:opacity-50 duration-500 ease-in-out'>
              <BsYoutube className='w-8 h-8'/>
            </a>
          </div>
          <div className='text-sm font-medium tracking-tight'>© 2023 Kamiak High School CS Club</div>
        </div>
      </div>
    </>
  )
}

export default App

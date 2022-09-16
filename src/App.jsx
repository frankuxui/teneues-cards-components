import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App () {
  const buttonThemenRef = useRef(null)
  const [theme, setTheme] = useState(false)

  const handleToggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setTheme(!theme)
  }
  useEffect(() => {
    buttonThemenRef.current.addEventListener('click', handleToggleTheme)
    return () => {
      buttonThemenRef.current.removeEventListener('click', handleToggleTheme)
    }
  }
  , [theme])

  return (
    <div className='App pt-16 pb-16 mx-5 '>

      <div className='flex justify-center m-auto mb-3'>
        <button ref={buttonThemenRef} className='rounded-full w-16 h-16 bg-slate-300 text-3xl dark:bg-slate-800'>
          {theme ? '🌞' : '🌙'}
        </button>
      </div>

      <div className='flex justify-center flex-col m-auto mb-16 text-center text-lg dark:text-slate-200'>
        <p className='font-bold mb-1'>Built by <a href='https://allmylinks.com/frankuxui' className='underline dark:text-white'>Frank Esteban</a></p>
        <p>Contact me on the different platforms and social networks</p>
        <div className='flex items-center justify-center space-x-2 mt-4 flex-wrap'>
          <a href='https://www.linkedin.com/in/frankuxui/' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='4.983' cy='5.009' r='2.188' fill='currentColor' />
              <path d='M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://www.figma.com/@frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z' fill='currentColor' />
              <circle cx='15.332' cy='12' r='3.332' />
            </svg>
          </a>
          <a href='https://dribbble.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://codesandbox.io/u/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://codepen.io/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M21.838 8.445c0-.001-.001-.001 0 0l-.003-.004-.001-.001v-.001a.809.809 0 0 0-.235-.228l-9.164-6.08a.834.834 0 0 0-.898 0L2.371 8.214A.786.786 0 0 0 2 8.897v6.16a.789.789 0 0 0 .131.448v.001l.002.002.01.015v.002h.001l.001.001.001.001c.063.088.14.16.226.215l9.165 6.082a.787.787 0 0 0 .448.139.784.784 0 0 0 .45-.139l9.165-6.082a.794.794 0 0 0 .371-.685v-6.16a.793.793 0 0 0-.133-.452zm-9.057-4.172 6.953 4.613-3.183 2.112-3.771-2.536V4.273zm-1.592 0v4.189l-3.771 2.536-3.181-2.111 6.952-4.614zm-7.595 6.098 2.395 1.59-2.395 1.611v-3.201zm7.595 9.311-6.96-4.617 3.195-2.15 3.765 2.498v4.269zm.795-5.653-3.128-2.078 3.128-2.105 3.131 2.105-3.131 2.078zm.797 5.653v-4.27l3.766-2.498 3.193 2.15-6.959 4.618zm7.597-6.11-2.396-1.611 2.396-1.59v3.201z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://tailwindcomponents.com/u/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://github.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://www.instagram.com/frankuxui/' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://dev.to/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='30' height='30' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.73 11.93C7.73 13.65 7.71 13.76 7.5 14C7.31 14.17 7.12 14.23 6.74 14.23L6.23 14.24L6.2 11.97L6.18 9.7H6.7C7.05 9.7 7.3 9.77 7.47 9.91C7.71 10.12 7.73 10.16 7.73 11.93M22 7.5V16.5C22 17.61 21.11 18.5 20 18.5H4C2.89 18.5 2 17.61 2 16.5V7.5C2 6.39 2.89 5.5 4 5.5H20C21.11 5.5 22 6.39 22 7.5M8.93 11.73C8.9 9.89 8.88 9.74 8.64 9.34C8.24 8.66 7.79 8.5 6.28 8.5H5V15.5H6.21C7.54 15.5 8.1 15.33 8.5 14.79C8.91 14.26 9 13.81 8.93 11.73M13.12 8.5H11.64C10.15 8.5 10.14 8.5 9.93 8.78S9.7 9.21 9.7 12V14.96L9.97 15.23C10.22 15.5 10.28 15.5 11.68 15.5H13.12V14.31L12.03 14.27L10.93 14.24V12.6L11.61 12.57L12.27 12.53V11.34H10.88V9.7H13.12V8.5M19 8.56C19 8.5 18.7 8.5 18.34 8.5L17.66 8.56L17.07 10.91C16.69 12.39 16.45 13.18 16.4 13.04C16.32 12.77 15.26 8.6 15.26 8.55C15.26 8.5 14.95 8.5 14.58 8.5H13.89L14.3 10.05C14.5 10.92 14.89 12.33 15.11 13.2C15.45 14.55 15.57 14.85 15.86 15.14C16.06 15.36 16.31 15.5 16.47 15.5C16.8 15.5 17.23 15.16 17.37 14.77C17.5 14.5 19 8.69 19 8.56Z' fill='currentColor' />
            </svg>
          </a>
          <a href='https://twitter.com/frankuxui' className='flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-300 transition-all dark:hover:bg-slate-700'>
            <svg width='28' height='28' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z' fill='currentColor' />
            </svg>
          </a>
        </div>
      </div>

      {/** container cards */}
      <div className='box-border m-auto max-w-[80rem] 3xl:max-w-[120rem] columns-1xs sm:columns-2xs md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-4 3xl:columns-6'>

        {/** Card 1 */}
        <div className='break-inside rounded-xl mb-4 p-6 text-sm bg-[#48e8cc] text-black'>
          <div className='flex items-start justify-between'>
            <div className='space-y-1'>
              <h1 className='text-base text-[#128d78]'>Best change</h1>
              <h2 className='text-xl font-bold'>Basic payment</h2>
            </div>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' width='38' height='38' className='flex-none'>
              <path d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>
          <ul className='flex items-start flex-col space-y-2 mt-4'>
            <li className='flex items-start space-x-2'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' width='18' height='18' className='flex-none'>
                <path d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <span>lorem ipsun merfis actuan</span>
            </li>
            <li className='flex items-start space-x-2'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' width='18' height='18' className='flex-none'>
                <path d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <span>Ut enim ad minima veniam</span>
            </li>
            <li className='flex items-start space-x-2'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' width='18' height='18' className='flex-none'>
                <path d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <span>Quis autem vel eum</span>
            </li>
          </ul>
          <div className='w-full border-t-2 border-dashed my-5 border-[#36d2b8]' />
          <div className='flex items-center justify-between'>
            <span>View more</span>
            <h5>
              <span className='text-xl font-bold'>€10.99</span>
              <span> /month</span>
            </h5>
          </div>
        </div>

        {/** Card 2 */}
        <div className='break-inside rounded-xl mb-4 p-6 text-sm bg-[#1e1e1e] text-[#949494]'>
          <div className='flex items-starte justify-between'>
            <div className='space-y-1'>
              <h1 className='text-base'>Best change</h1>
              <h2 className='text-xl font-bold text-white'>Basic payment</h2>
            </div>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1} stroke='currentColor' width='38' height='38' className='flex-none'>
              <path d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>
          <ul className='flex items-start flex-col space-y-2 mt-4'>
            <li className='flex items-start space-x-2'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' width='18' height='18' className='flex-none'>
                <path d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <span>lorem ipsun merfis actuan</span>
            </li>
            <li className='flex items-start space-x-2'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' width='18' height='18' className='flex-none'>
                <path d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <span>Ut enim ad minima veniam</span>
            </li>
            <li className='flex items-start space-x-2'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' width='18' height='18' className='flex-none'>
                <path d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <span>Quis autem vel eum</span>
            </li>
          </ul>
          <div className='w-full border-t-2 border-dashed my-5 border-[#3a3a3a]' />
          <div className='flex items-center justify-between'>
            <button className='flex items-center uppercase text-xs text-white'>
              View more
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width='18' height='18' className='ml-2'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
              </svg>
            </button>
            <h5>
              <span className='text-xl font-bold text-white'>€23.80</span>
              <span> /month</span>
            </h5>
          </div>
        </div>

        {/** Card 3 */}
        <div className='flex items-start flex-row justify-between break-inside rounded-xl mb-4 p-6 text-sm bg-white text-black border-2 border-black dark:bg-[#1e1e1e] dark:text-white dark:border-[#b9b9b9]'>
          <span className='mr-6'>
            <svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512' width='26' height='26'>
              <path
                fill='#73A1FB' d='M160.325,256.018c0,52.754,42.919,95.67,95.675,95.67c52.753,0,95.668-42.917,95.668-95.67 c0-52.754-42.916-95.673-95.668-95.673C203.244,160.344,160.325,203.263,160.325,256.018z'
              />
              <path
                fill='#DA143A' d='M476.299,129.73c0.745-1.311,0.732-2.921-0.039-4.219c-22.285-37.532-53.998-68.971-91.712-90.916 C345.679,11.975,301.226,0.019,256,0.019c-78.269,0-151.211,35.125-200.125,96.368c-1.079,1.35-1.22,3.221-0.356,4.717 l72.066,124.819c0.755,1.309,2.149,2.098,3.633,2.098c0.188,0,0.379-0.013,0.569-0.039c1.689-0.23,3.07-1.459,3.497-3.109 c14.21-55.059,63.851-93.513,120.716-93.513c3.529,0,7.173,0.161,10.836,0.473c0.119,0.012,0.24,0.017,0.359,0.017h205.456 C474.161,131.852,475.554,131.043,476.299,129.73z'
              />
              <path
                fill='#78B86D' d='M293.829,377.597c-1.042-1.348-2.792-1.927-4.442-1.471c-10.839,3.018-22.071,4.548-33.387,4.548 c-48.079,0-92.392-28.199-112.893-71.838c-0.05-0.107-0.106-0.212-0.165-0.316L40.139,130.465c-0.749-1.301-2.135-2.098-3.634-2.098 c-0.007,0-0.015,0-0.022,0c-1.507,0.008-2.896,0.823-3.634,2.135C11.36,168.633,0,212.036,0,256.018 c0,61.7,22.259,121.299,62.677,167.817c40.017,46.055,95.108,76.364,155.129,85.345c0.208,0.032,0.416,0.045,0.623,0.045 c1.482,0,2.876-0.789,3.633-2.098l72.085-124.857C294.999,380.791,294.873,378.945,293.829,377.597z'
              />
              <path
                fill='#F1CB30' d='M490.471,159.854H346.147c-1.706,0-3.242,1.032-3.884,2.61c-0.645,1.578-0.27,3.391,0.947,4.583 c24.148,23.673,37.447,55.269,37.447,88.97c0,25.513-7.698,50.065-22.264,71.005c-0.067,0.097-0.129,0.196-0.188,0.299 L255.223,505.686c-0.754,1.306-0.749,2.916,0.012,4.219c0.754,1.288,2.134,2.077,3.623,2.077c0.015,0,0.032,0,0.047,0 c67.769-0.755,131.362-27.717,179.064-75.914C485.708,387.83,512,323.887,512,256.018c0-32.259-5.929-63.716-17.623-93.5 C493.746,160.91,492.197,159.854,490.471,159.854z'
              />
            </svg>
          </span>
          <div className='flex flex-col space-y-1 flex-1 mt-[-2px]'>
            <h1 className='text-lg font-bold'>UX/UI Designer</h1>
            <p className='flex items-center text-[#777777]'>
              Landing &bull; Full time
              <svg xmlns='http://www.w3.org/2000/svg' className='ml-1' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <polyline points='20 6 9 17 4 12' />
              </svg>
            </p>
            <p className=''>September 22 - 2022</p>
          </div>
          <button className='flex-none cursor-pointer'>
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <polygon points='16 3 21 8 8 21 3 21 3 16 16 3' />
            </svg>
          </button>
        </div>

        {/** Card 4 */}
        <div className='break-inside rounded-xl space-y-4 mb-4 text-sm p-6 bg-white dark:bg-[#1e1e1e] dark:text-white'>
          <div className='flex items-start justify-between'>
            <div className='flex flex-col'>
              <h1 className='text-lg font-bold'>About Meeting</h1>
              <p>September 12:45 - 18:30</p>
            </div>
            <button type='button' className='w-10 h-10 flex items-center justify-center rounded-full transition-all hover:bg-slate-50 dark:hover:bg-[#333]'>
              <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <circle cx='12' cy='12' r='3' /><path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z' />
              </svg>
            </button>
          </div>
          <p>Minim dolor in amet nulla laboris enim dolore consequat proident.</p>
          <div className='flex flex-row items-center justify-between space-x-2'>
            <div className='col-start-2 row-start-1 row-end-3'>
              <dt className='sr-only'>Users</dt>
              <dd className='flex justify-start -space-x-1.5'>
                <a href='#' className='inline-block -m-1'>
                  <img
                    className='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-[#1e1e1e]'
                    src='https://randomuser.me/api/portraits/women/46.jpg'
                    alt='avatar'
                  />
                </a>
                <a href='#' className='inline-block -m-1'>
                  <img
                    className='w-9 h-9 rounded-full bg-slate-100 ring-2 ring-white dark:ring-[#1e1e1e]'
                    src='https://randomuser.me/api/portraits/men/45.jpg'
                    alt='avatar'
                  />
                </a>
                <div className='inline-flex items-center justify-center -m-1 font-medium rounded-full w-10 h-10 ring-2 ring-white dark:ring-[#1e1e1e] bg-[#eeff00] dark:text-black'>
                  +5
                </div>
              </dd>
            </div>
            <div className='flex flex-row items-center space-x-1'>
              <button type='button' className='w-10 h-10 flex items-center justify-center rounded-full border-2 border-black dark:border-white'>
                <svg width='20' height='20' viewBox='0 0 24 24'>
                  <path fill='currentColor' d='M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z' />
                </svg>
              </button>
              <button type='button' className='w-10 h-10 flex items-center justify-center rounded-full bg-[#eeff00] dark:text-black'>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M7 17l9.2-9.2M17 17V7H7' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/** card 5 */}
        <div className='break-inside rounded-xl mb-4 text-sm p-6 bg-[#fbe115] text-black'>
          <div className='flex items-center justify-between'>
            <h1 className='font-medium relative inline-block pb-2 text-lg'>
              Our goals
              <span className='h-[3px] w-full absolute left-0 bottom-0 bg-black' />
            </h1>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <path d='M7 17l9.2-9.2M17 17V7H7' />
            </svg>
          </div>
          <h2 className='text-2xl font-bold mt-6 mb-3'>We work for a better future</h2>
          <p>Minim dolor in amet nulla laboris enim dolore consequat proident.</p>
        </div>

        {/** Card 6 */}
        <div className='break-inside rounded-xl mb-4 p-6 space-y-4 text-sm bg-[#bea3f8] text-black'>
          <div className='flex items-start justify-between'>
            <div className='space-y-1'>
              <h1 className='text-base font-medium text-[#000000]'>Best change</h1>
              <h2 className='text-xl font-bold'>Best Team designer</h2>
            </div>
            <button className='cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#000000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='3' y1='12' x2='21' y2='12' />
                <line x1='3' y1='6' x2='21' y2='6' />
                <line x1='3' y1='18' x2='21' y2='18' />
              </svg>
            </button>
          </div>
          <div className='flex items-center space-x-2'>
            <button className='rounded-full px-3 py-1 font-bold text-xs uppercase transition-all border-[1.5px] group border-black bg-transparent hover:bg-black hover:text-white '>
              Teams
            </button>
            <button className='rounded-full px-3 py-1 font-bold text-xs uppercase transition-all border-[1.5px] group border-black bg-transparent hover:bg-black hover:text-white '>
              Groups
            </button>
          </div>
          <p className='flex items-center font-medium space-x-2'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' width='24' height='24' className='flex-none'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941' />
            </svg>
            <span>Upstream project</span>
          </p>
          <div className='flex flex-row items-center justify-between space-x-2'>
            <div className='flex items-center'>
              <dd className='flex justify-start -space-x-1'>
                <a href='#' className='inline-block -m-1'>
                  <img
                    className='w-8 h-8 rounded-full bg-slate-100 ring-white'
                    src='https://randomuser.me/api/portraits/women/12.jpg'
                    alt='avatar'
                  />
                </a>
                <a href='#' className='inline-block -m-1'>
                  <img
                    className='w-8 h-8 rounded-full bg-slate-100 ring-white'
                    src='https://randomuser.me/api/portraits/women/67.jpg'
                    alt='avatar'
                  />
                </a>
                <a href='#' className='inline-block -m-1'>
                  <img
                    className='w-8 h-8 rounded-full bg-slate-100 ring-white'
                    src='https://randomuser.me/api/portraits/men/12.jpg'
                    alt='avatar'
                  />
                </a>
                <div className='inline-flex -m-1 items-center justify-center font-medium rounded-full w-8 h-8 bg-black text-white'>
                  3
                </div>
              </dd>
            </div>
            <div className='flex flex-row items-center font-medium space-x-1'>
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#000000' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round'>
                <polyline points='20 6 9 17 4 12' />
              </svg>
              <span>3 days ago</span>
            </div>
          </div>
        </div>

        {/** card 7 */}
        <div className='break-inside flex flex-col justify-between rounded-xl mb-4 text-sm bg-[#ffc5a3] text-black'>
          <div className='flex justify-between flex-row  items-center p-4 text-sm'>
            <h2 className='text-base font-bold'>Header</h2>
            <button className='flex items-center justify-center rounded-full p-1 transition-all hover:bg-slate-200 dark:hover:bg-slate-700 '>
              <svg width='26' height='26' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' fill='currentColor' />
              </svg>
            </button>
          </div>
          <div className='p-4 space-y-4'>
            <div className='flex items-center space-x-4'>
              <img className='flex-none w-12 h-12 rounded-full object-cover' src='https://randomuser.me/api/portraits/men/46.jpg' alt='avatar' />
              <div className='flex-auto'>
                <a href='#' className='text-base font-bold block'>Ralph Edwards</a>
                <span>Dog Trainer</span>
              </div>
            </div>
            <div className='space-y-1'>
              <h4 className='text-xl font-medium'>News</h4>
              <p>Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod.</p>
            </div>
          </div>
          <div className='flex p-4 flex-row items-center justify-between'>
            <div className='flex space-x-1'>
              <span className='px-3 py-1 rounded-full text-xs font-medium bg-black text-white'>FASHION</span>
              <span className='px-3 py-1 rounded-full text-xs font-medium bg-black text-white'>TRENDS</span>
            </div>
            <button type='button' className='w-9 h-9 flex items-center justify-center rounded-full border-2 border-black dark:border-white'>
              <svg width='20' height='20' viewBox='0 0 24 24'>
                <path fill='currentColor' d='M20.71,7.04C20.37,7.38 20.04,7.71 20.03,8.04C20,8.36 20.34,8.69 20.66,9C21.14,9.5 21.61,9.95 21.59,10.44C21.57,10.93 21.06,11.44 20.55,11.94L16.42,16.08L15,14.66L19.25,10.42L18.29,9.46L16.87,10.87L13.12,7.12L16.96,3.29C17.35,2.9 18,2.9 18.37,3.29L20.71,5.63C21.1,6 21.1,6.65 20.71,7.04M3,17.25L12.56,7.68L16.31,11.43L6.75,21H3V17.25Z' />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App

//
// {/** card */}
// <div className='break-inside rounded-xl mb-4 text-sm p-6 bg-white dark:bg-[#1e1e1e] dark:text-white'>card</div>
//

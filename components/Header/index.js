'use client'

import { Popover } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '../Button'
// Local Data
import data from '../../data/portfolio.json'

const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  const router = useRouter()
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isBlog = false

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const { name, showBlog, showResume } = data


  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <Popover className='block tablet:hidden mt-5'>
        {({ open }) => (
          <>
            <div className='flex items-center justify-between p-2 laptop:p-0'>
              <h1
                onClick={() => router.push('/')}
                className='font-medium p-2 laptop:p-0 link'
              >
                {name}.
              </h1>

              <div className='flex items-center'>
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                  >
                    <Image
                      alt='theme-toggle'
                      src={`/images/${
                        theme === 'dark' ? 'moon.svg' : 'sun.svg'
                      }`}
                      width={24}
                      height={24}
                    />
                  </Button>
                )}

                <Popover.Button>
                  <Image
                    alt='theme-toggle'
                    src={`/images/${
                      !open
                        ? currentTheme === 'dark'
                          ? 'menu-white.svg'
                          : 'menu.svg'
                        : currentTheme === 'light'
                        ? 'cancel.svg'
                        : 'cancel-white.svg'
                    }`}
                    width={20}
                    height={20}
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                currentTheme === 'dark' ? 'bg-slate-800' : 'bg-white'
              } shadow-md rounded-md`}
            >
              <div className='grid grid-cols-1'>
                <Button onClick={handleWorkScroll}>Work</Button>
                <Button onClick={handleAboutScroll}>About</Button>
                {showBlog && (
                  <Button onClick={() => router.push('/blog')}>Blog</Button>
                )}
                {showResume && (
                  <Button
                    onClick={() =>
                      window.open('mailto:hello@chetanverma.com')}
                  >
                    Resume
                  </Button>
                )}

                <Button
                  onClick={() => window.open('mailto:hello@chetanverma.com')}
                >
                  Contact
                </Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          currentTheme === 'light' && 'bg-white'
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push('/')}
          className='font-medium cursor-pointer mob:p-2 laptop:p-0'
        >
          {name}.
        </h1>
        {!isBlog
          ? (
            <div className='flex'>
              <Button onClick={handleWorkScroll}>Work</Button>
              <Button onClick={handleAboutScroll}>About</Button>
              {showBlog && (
                <Button onClick={() => router.push('/blog')}>Blog</Button>
              )}
              {showResume && (
                <Button
                  onClick={() => router.push('/resume')}
                  classes='first:ml-1'
                >
                  Resume
                </Button>
              )}

              <Button onClick={() => window.open('mailto:hello@chetanverma.com')}>
                Contact
              </Button>
              {mounted && currentTheme && data.darkMode && (
                <Button
                  onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                >
                  <Image
                    alt='theme-toggle'
                    src={`/images/${currentTheme === 'dark' ? 'moon.svg' : 'sun.svg'}`}
                    width={24}
                    height={24}
                  />
                </Button>
              )}
            </div>
            )
          : (
            <div className='flex'>
              <Button onClick={() => router.push('/')}>Home</Button>
              {showBlog && (
                <Button onClick={() => router.push('/blog')}>Blog</Button>
              )}
              {showResume && (
                <Button
                  onClick={() => router.push('/resume')}
                  classes='first:ml-1'
                >
                  Resume
                </Button>
              )}

              <Button onClick={() => window.open('mailto:hello@chetanverma.com')}>
                Contact
              </Button>

              {mounted && theme && data.darkMode && (
                <Button
                  onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                >
                  <Image
                    alt='theme-toggle'
                    src={`/images/${currentTheme === 'dark' ? 'moon.svg' : 'sun.svg'}`}
                    width={24}
                    height={24}
                  />
                </Button>
              )}
            </div>
            )}
      </div>
    </>
  )
}

export default Header

"use client";
import Image from "next/image";
import Link  from "next/link";
import './page.css';
import { useState } from 'react';
//import TextField from '@mui/material/TextField';

//maybe import a css file
//export default function for global styles in this class
export default function Home() {
  // ts logic goes here for login area
  const[username, setName] = useState('');
  const[password, setPassword] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

  };
//roadmap for this class
//make password box identical to username, make text with bubbles
//style both of these two boxes
//center the login button 
//replace the next js button with another official image, or a logo of some sorts you made
// make a footer with something nice like a note from editor with some cool designs and what not


  
  return (
    <div className="layout-grid">
      <main className="main-content">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className = "username-field">
            <input
              type="text"
              value={username}
              onChange={handleNameChange}
              placeholder="username"

            />
            
          </div>

          <div className = "password-field">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="password"
              />

            </div>
      
      <div className="login-button-class">
          <Link href="/second"
            className="login-button">
            Login
          </Link> 
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

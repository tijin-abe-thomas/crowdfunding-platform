import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useAccount, Web3Button } from '@web3modal/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return <center><Web3Button /></center>;
}

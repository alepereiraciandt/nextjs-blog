import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function firsPost() {
    return (
        <>
        <Head>
            <title>First Post</title>
            <script src="https://connect.facebook.net/en_US/sdk.js" />
        </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <div>
                <Image
                    src="/images/profile.jpg"
                    height={200}
                    width={200}
                    alt="White laces"
                />
            </div>
            <Layout />
        </>
    )
}

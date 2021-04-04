import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Reproduce App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-300">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to Start Learning?</span>
                        <span className="block text-blue-600">Travel Jinni Nextjs </span>
                        <span className="block text-black-600">And</span>
                        <span className="block text-blue-600">Tailwind Starter</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="wwww.traveljinni.com"
                                className="inline-flex items-center justify-center px-5 py-3  ml-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                                Enroll
                            </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a
                                href="www.traveljinni.com"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

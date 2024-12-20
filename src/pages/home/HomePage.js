import React from 'react';
import { myPhoto } from '../../assets';
import { BasicCard } from '../../components';
import './home.css'
import { portofolioData } from '../../data'
import { useHistory } from 'react-router-dom';

const HomePage = () => {

    let history = useHistory()

    return (
        <>
            <div className='base-home'>
                <div className='side-left'></div>
                <div className='side-right'>
                    <div className='content'>
                        <h3><b>Mochamad Farhan Fitrahtur Rachmad</b></h3>
                        <p>Frontend Engineer || <span style={{color: '#4E73DF'}}>Flutter, React JS, React Native, Next JS</span></p>
                        <hr />
                        <h4 style={{ color: '#4E73DF' }}><b>Tentang Saya</b></h4>
                        <p>Halo, Perkenalkan, nama saya Mochamad Farhan Fitrahtur Rachmad dan nama panggilan saya Farhan.
Kemudian pendidikan terakhir saya D4 Teknik Informatika di Politeknik Negeri Malang,
kemudian saya juga sudah berkecimpung di dunia pemrograman khususnya frontend engineering
selama kurang lebih 5 tahun. Kemudian teknologi yang saya gunakan adalah React JS, React
Native, Next JS dan Flutter dan bahasa pemrograman yang biasa saya gunakan adalah JS, TS dan
Dart. Saya juga seorang pekerja keras dan dapat bekerja secara individu maupun tim. Saya juga
siap menerima ilmu baru dan dapat bekerja dibawah tekanan.</p>
                        <hr />
                        <h4 style={{ color: '#4E73DF' }}><b>Pengalaman Produktif</b></h4>
                        <ul>
                        <li>
                            <b>Contract</b>
                                <div></div>
                                <b>Live700 Software Inc</b> - Makati, Philipines
                                <div></div>
                                <span>September 2024 – Sekarang</span>
                                <div></div>
                                <span>Sebagai Flutter Developer </span>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Full-time</b>
                                <div></div>
                                <b>ADS Digital Partner (PT.Adma Digital Solusi)</b> - Surabaya, Indonesia
                                <div></div>
                                <span>Mei 2021 – Juni 2024</span>
                                <div></div>
                                <span>Dalam pekerjaan ini saya diberi tanggung jawab sebagai frontend engineer, pada posisi ini saya ditugaskan
untuk membuat website dan aplikasi mobile, untuk teknologi yang digunakan dalam pengembangan website
yaitu ReactJS dan frameworknya yaitu NextJS, dengan bahasa pemrograman yang digunakan yaitu Javascript
dan TypeScript, kemudian untuk teknologi dalam pengembangan mobile menggunakan React native dengan
bahasa pemrograman Javascript dan Typescript, lalu menggunakan Flutter dengan bahasa pemrograman Dart.
Selain itu, tugas detail saya meliputi slicing desain yang telah dibuat oleh Desainer UI/UX dan
mengimplementasikan sumber daya API yang dibuat oleh backend engineer ke dalam aplikasi.</span>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            {/* <li>
                                <b>Full-time</b>
                                <div></div>
                                <b>Kementerian Kelautan dan Perikanan Republik Indonesia</b> - Jakarta Pusat
                                <div></div>
                                <span>Agustus 2023 – Sekarang</span>
                                <div></div>
                                <span>Sebagai Helpdesk IT Support Vendor</span>
                            </li>
                            <div style={{ height: '10px' }}></div> */}
                            <li>
                                <b>Full-time</b>
                                <div></div>
                                <b>PT. ARM Solusi</b> - Jakarta Selatan, Indonesia
                                <div></div>
                                <span>Agustus 2023 – Juni 2024</span> 
                                <div></div>
                                <span>Sebagai IT Support & Software Engineer</span>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Freelancer</b>
                                <div></div>
                                <b>PT. ASRI UTAMA IP&S</b> - Jakarta Selatan, Indonesia
                                <div></div>
                                <span>Juli 2020 – September 2020</span>
                                <div></div>
                                <span>Dalam pekerjaan ini saya adalah seorang freelancer rekayasa perangkat lunak, dimana saya membuat
sistem informasi berupa admin tools berbasis website. Teknologi yang saya gunakan adalah
framework CodeIgniter dengan bahasa pemrograman yang digunakan yaitu PHP. Dan untuk frontend
tersendiri menggunakan React JS dan Next JS</span>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Internship</b>
                                <div></div>
                                <b>PT. Digdaya Olah Teknologi Indonesia</b> - Malang, Indonesia
                                <div></div>
                                <span>Juli 2018 – September 2018</span>
                                <div></div>
                                <span>Dalam pekerjaan ini saya diberi tanggung jawab sebagai frontend engineer, dimana selama masa magang saya ditugaskan untuk membuat sistem
informasi aplikasi berbasis website yaitu website company profile dan project dengan klien
perusahaan. Teknologi yang saya gunakan adalah VueJS dan React dengan bahasa pemrograman yang
digunakan yaitu JavaScript</span>
                            </li>
                        </ul>
                        <hr />
                        <h4 style={{ color: '#4E73DF' }}><b>Pendidikan</b></h4>
                        <ul>
                            <li>
                                <b>Jurusan Teknologi Informasi, Prodi D4 Teknik Informatika</b>
                                <div></div>
                                <b>Politeknik Negeri Malang</b> - Malang
                                <div></div>
                                <span>2019 - 2023</span>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>SMK Jurusan Rekayasa Perangkat Lunak</b>
                                <div></div>
                                <b>SMK Telkom Malang</b> - Malang
                                <div></div>
                                <span>2016 - 2019</span>
                            </li>
                        </ul>
                        <hr />
                        <h4 style={{ color: '#4E73DF' }}><b>Ketrampilan</b></h4>
                        <ul>
                            <li className='py-2'>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="30"
                                    width="30"
                                >
                                    <path d="M13.9 2.01L3.9 12l3.09 3.09 2.71-2.7L20.09 2l-6.19.01zm.82 14.6l5.39-5.38h-5.93c-.11 0-.26 0-.34.07l-2.23 2.23-3.09 3.07 3.09 3.1 2.15 2.15c.07.07.14.17.26.15h6.07z" />
                                </svg>
                                <span className='px-1'></span>
                                Flutter</li>
                            <li className='py-2'>
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    height="30"
                                    width="30"
                                >
                                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                                </svg>
                                <span className='px-1'></span>
                                React Native</li>
                            <li className='py-2'>
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    height="30"
                                    width="30"
                                >
                                    <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                                </svg>
                                <span className='px-1'></span>
                                React JS</li>
                            <li className='py-2'>
                                <svg fill="none" viewBox="0 0 15 15" height="30" width="30">
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M0 7.5a7.5 7.5 0 1111.697 6.216L4.907 4.21A.5.5 0 004 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 010 7.5zM10 10V4h1v6h-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className='px-1'></span>
                                Next JS</li>
                            <li className='py-2'> 
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="30"
                                    width="30"
                                >
                                    <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033a.3.3 0 01.024.06c.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087l-1.58-.907v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" />
                                </svg>
                                <span className='px-1'></span>
                                Laravel</li>
                            <li className='py-2'>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="30"
                                    width="30"
                                >
                                    <path d="M18.5 9.51a4.22 4.22 0 01-1.91-1.34A5.77 5.77 0 0012 6a4.72 4.72 0 00-5 4 3.23 3.23 0 013.5-1.49 4.32 4.32 0 011.91 1.35A5.77 5.77 0 0017 12a4.72 4.72 0 005-4 3.2 3.2 0 01-3.5 1.51zm-13 4.98a4.22 4.22 0 011.91 1.34A5.77 5.77 0 0012 18a4.72 4.72 0 005-4 3.23 3.23 0 01-3.5 1.49 4.32 4.32 0 01-1.91-1.35A5.8 5.8 0 007 12a4.72 4.72 0 00-5 4 3.2 3.2 0 013.5-1.51z" />
                                </svg>
                                <span className='px-1'></span>
                                Tailwind CSS</li>
                            <li className='py-2'>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="30"
                                    width="30"
                                >
                                    <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" />
                                </svg>
                                <span className='px-1'></span>

                                Javascript</li>
                            <li className='py-2'>
                                <svg
                                    viewBox="0 0 32 32"
                                    fill="currentColor"
                                    height="30"
                                    width="30"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                                    />
                                </svg>
                                <span className='px-1'></span>

                                CSS</li>
                            <li className='py-2'>
                                <svg    
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="30"
                                    width="30"
                                >
                                    <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
                                </svg>
                                <span className='px-1'></span>
                                HTML</li>
                            <li className='py-2'>
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    height="30"
                                    width="30"
                                >
                                    <path d="M15.698 7.287L8.712.302a1.03 1.03 0 00-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 011.55 1.56l1.773 1.774a1.224 1.224 0 011.267 2.025 1.226 1.226 0 01-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 11-1.008-.036V5.887a1.226 1.226 0 01-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 000 1.457l6.986 6.986a1.03 1.03 0 001.457 0l6.953-6.953a1.031 1.031 0 000-1.457" />
                                </svg>
                                <span className='px-1'></span>
                                GIT</li>
                        </ul>
                        <hr />
                        <h4 style={{ color: '#4E73DF' }}><b>Portofolio</b></h4>
                        <div style={{ height: '5px' }}></div>
                        <div className='container'>
                            <div className='row'>
                                {
                                    portofolioData.data?.slice(0, 2).map((data, index) => {
                                        return (
                                            <div className='col-lg-6' >
                                                <div onClick={() => history.push({
                                                    pathname: `/detailproject/${index}`,
                                                    state: {
                                                        id: 1
                                                    }
                                                })} style={{ cursor: 'pointer' }}>
                                                    <BasicCard
                                                        img={data.cover}
                                                        title={data.name} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div style={{ height: '20px' }}></div>
                            <h6>Lihat portofolio saya yang lainnya<span style={{ cursor: 'pointer' }} className='btn-link' onClick={() => history.push({
                                pathname: `/listproject`,
                            })}> klik disini</span></h6>
                            {/* <center> <button className='btn btn-lg btn-primary' onClick={() => history.push({
                                 pathname: `/listproject`,
                            })}>Project Lainnya</button></center> */}
                        </div>
                        <hr />
                        <h4 style={{ color: '#4E73DF' }}><b>Links</b></h4>
                        <ul>
                            <li>
                                <b>
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="30"
                                        width="30"
                                    >
                                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                                    </svg>
                                    <span className='px-1'></span>
                                    Linkedin</b>
                                <div></div>
                                <a href='https://www.linkedin.com/in/mfarhanfr/' target='_blank'>https://www.linkedin.com/in/mfarhanfr/</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="30"
                                        width="30"
                                    >
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                    </svg>
                                    <span className='px-1'></span>
                                    Github</b>
                                <div></div>
                                <a href='https://github.com/farhanfr' target='_blank'>https://github.com/farhanfr</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="30"
                                        width="30"

                                    >
                                        <path d="M910.5 553.2l-109-370.8c-6.8-20.4-23.1-34.1-44.9-34.1s-39.5 12.3-46.3 32.7l-72.2 215.4H386.2L314 181.1c-6.8-20.4-24.5-32.7-46.3-32.7s-39.5 13.6-44.9 34.1L113.9 553.2c-4.1 13.6 1.4 28.6 12.3 36.8l385.4 289 386.7-289c10.8-8.1 16.3-23.1 12.2-36.8z" />
                                    </svg>
                                    <span className='px-1'></span>
                                    Gitlab</b>
                                <div></div>
                                <a href='https://gitlab.com/farhanfitrahtur' target='_blank'>https://gitlab.com/farhanfitrahtur</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            {/* <li>
                                <b>Sertifikat</b>
                                <div></div>
                                <a href='https://drive.google.com/drive/folders/1_d0RLoN_IEPuI82FaIm4EN09H-iHkI7B?usp=sharing'>https://drive.google.com/drive/folders/1_d0RLoN_IEPuI82FaIm4EN09H-iHkI7B?usp=sharing</a>
                            </li>
                            <div style={{ height: '10px' }}></div> */}
                            <li>
                                <b>
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="30"
                                        width="30"

                                    >
                                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm256 253.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 007-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z" />
                                    </svg>
                                    <span className='px-1'></span>
                                    Medium</b>
                                <div></div>
                                <a href='https://farhanfitrahtur.medium.com/' target='_blank'>https://farhanfitrahtur.medium.com/</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>
                                    <svg
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                        height="30"
                                        width="30"

                                    >
                                        <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49zM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z" />
                                    </svg>
                                    <span className='px-1'></span>
                                    Google Play</b>
                                <div></div>
                                <a href='https://play.google.com/store/apps/dev?id=6998702707610706844' target='_blank'>https://play.google.com/store/apps/dev?id=6998702707610706844</a>
                            </li>

                        </ul>
                        <hr />
                        <h4 style={{ color: '#4E73DF' }}><b>Sertifikat</b></h4>
                        <ul>
                            <li>
                                <b>Certificate of Competence - Junior Programming</b> (BNSP LSPTIK)
                                <div></div>
                                <a href='https://drive.google.com/file/d/1l_1_HyMNCuXyC5OKip20Kpt56yp61GFV/view?usp=sharing' target='_blank'>Lihat Sertifikat</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Junior Web Developer</b> (Digital Talent Scholarship)
                                <div></div>
                                <a href='https://drive.google.com/file/d/1Tu4ndXiFuxMqg8ojfwzDbmOmGuagqiXl/view?usp=sharing' target='_blank'>Lihat Sertifikat</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Certificate of Completion of Learning Fundamental an
                                    Android Application</b> (Dicoding)
                                <div></div>
                                <a href='https://drive.google.com/file/d/1DOuu_XHdytHXy2wxrA35SlM5sEJSr8Ar/view?usp=sharing' target='_blank'>Lihat Sertifikat</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Certificate of Completion of Learning Creating an Flutter Application for Beginners</b> (Dicoding)
                                <div></div>
                                <a href='https://drive.google.com/file/d/1A3MdfWklsG8R1-Kr2XGMpHBlRbfSek9j/view?usp=sharing' target='_blank'>Lihat Sertifikat</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
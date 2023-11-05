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
                        <p>Software Engineer</p>
                        <hr />
                        <h4 style={{ color: '#4E73DF' }}><b>Tentang Saya</b></h4>
                        <p>Halo, perkenalkan nama saya Mochamad Farhan Fitrahtur Rachmad, bisa dipanggil Farhan.
                            Saya memiliki hobi dalam membuat aplikasi dan programming. Saya seorang pekerja keras dan
                            juga seseorang yang bisa bekerja sama dengan tim. Saya siap menerima pengetahuan baru dan
                            dapat bekerja di bawah tekanan.</p>
                        <hr />
                        <h4 style={{ color: '#4E73DF' }}><b>Pengalaman Produktif</b></h4>
                        <ul>
                            <li>
                                <b>Part-time</b>
                                <div></div>
                                <b>ADS Digital Partner (PT.Adma Digital Solusi)</b> - Surabaya
                                <div></div>
                                <span>Mei 2021 – Sekarang</span>
                                <div></div>
                                <span>Sebagai Frontend Engineer </span>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Freelancer</b>
                                <div></div>
                                <b>PT ASRI UTAMA IP&S</b> - Jakarta Selatan
                                <div></div>
                                <span>Juli 2020 – September 2020</span>
                                <div></div>
                                <span>Sebagai Software Engineer</span>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Internship</b>
                                <div></div>
                                <b>PT. Digdaya Olah Teknologi Indonesia</b> - Malang
                                <div></div>
                                <span>Juli 2018 – September 2018</span>
                                <div></div>
                                <span>Sebagai Frontend Engineer</span>
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
                                <span>2019 - Sekarang</span>
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
                            <li>Flutter</li>
                            <li>React Native</li>
                            <li>React JS</li>
                            <li>Next JS</li>
                            <li>Laravel</li>
                            <li>MUI React</li>
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>GIT</li>
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
                            <h6>Lihat portofolio saya yang lainnya<span style={{cursor:'pointer'}} className='btn-link' onClick={() => history.push({
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
                                <b>Linkedin</b>
                                <div></div>
                                <a href='https://www.linkedin.com/in/mochamad-farhan-fitrahtur-rachmad'>https://www.linkedin.com/in/mochamad-farhan-fitrahtur-rachmad</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Github</b>
                                <div></div>
                                <a href='https://github.com/farhanfr'>https://github.com/farhanfr</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Gitlab</b>
                                <div></div>
                                <a href='https://gitlab.com/farhanfitrahtur'>https://gitlab.com/farhanfitrahtur</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            {/* <li>
                                <b>Sertifikat</b>
                                <div></div>
                                <a href='https://drive.google.com/drive/folders/1_d0RLoN_IEPuI82FaIm4EN09H-iHkI7B?usp=sharing'>https://drive.google.com/drive/folders/1_d0RLoN_IEPuI82FaIm4EN09H-iHkI7B?usp=sharing</a>
                            </li>
                            <div style={{ height: '10px' }}></div> */}
                            <li>
                                <b>Medium</b>
                                <div></div>
                                <a href='https://farhanfitrahtur.medium.com/'>https://farhanfitrahtur.medium.com/</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Google Play</b>
                                <div></div>
                                <a href='https://play.google.com/store/apps/dev?id=6998702707610706844'>https://play.google.com/store/apps/dev?id=6998702707610706844</a>
                            </li>

                        </ul>
                        <hr />
                        <h4 style={{ color: '#4E73DF' }}><b>Sertifikat</b></h4>
                        <ul>
                            <li>
                                <b>Certificate of Competence - Junior Programming</b> (BNSP LSPTIK)
                                <div></div>
                                <a href='https://drive.google.com/file/d/1l_1_HyMNCuXyC5OKip20Kpt56yp61GFV/view?usp=sharing'>Lihat Sertifikat</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Junior Web Developer</b> (Digital Talent Scholarship)
                                <div></div>
                                <a href='https://drive.google.com/file/d/1Tu4ndXiFuxMqg8ojfwzDbmOmGuagqiXl/view?usp=sharing'>Lihat Sertifikat</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Certificate of Completion of Learning Fundamental an
                                    Android Application</b> (Dicoding)
                                <div></div>
                                <a href='https://drive.google.com/file/d/1DOuu_XHdytHXy2wxrA35SlM5sEJSr8Ar/view?usp=sharing'>Lihat Sertifikat</a>
                            </li>
                            <div style={{ height: '10px' }}></div>
                            <li>
                                <b>Certificate of Completion of Learning Creating an Flutter Application for Beginners</b> (Dicoding)
                                <div></div>
                                <a href='https://drive.google.com/file/d/1A3MdfWklsG8R1-Kr2XGMpHBlRbfSek9j/view?usp=sharing'>Lihat Sertifikat</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
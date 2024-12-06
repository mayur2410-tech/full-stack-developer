import './mainmenu.css'


function Mainmenu() {
    const main = [
        { id: 1, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 2, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 3, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 4, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 1, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 2, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 3, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 4, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 1, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 2, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 3, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
        { id: 4, img: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true', logo: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/?raw=true', text: 'Bulbuli | Coke Studio Bangla |', text1: 'Season One | Ritu Raj X Nandita', verify: 'https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true', thumbnail: 'Coke Studio Bangla', thumbnail1: '1.5M views 2 days ago' },
    ]

    return (
        <>
            <div className="mainmenu">
                <div className="nav-bar">
                    {/* <div className="user-option">
        <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true' />
        <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true' />
        <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true' />
        <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1.png?raw=true' />
    </div> */}


                    <div className="serach-box">
                        <div className="serach">
                            <p className='para'>Search</p>
                            <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true' className='search-btn' />

                        </div>
                        <img src='https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true' className='mic-btn' />


                    </div>



                    <hr className='hr' />

                    <div className="suggestion">
                        <div className="navtext all">All</div>
                        <div className="navtext">Cook Studio</div>
                        <div className="navtext">UX</div>
                        <div className="navtext">Case Study</div>
                        <div className="navtext">Music</div>
                        <div className="navtext">Bnagla Lofi</div>
                        <div className="navtext">Tour</div>
                        <div className="navtext">Saintmartin</div>
                        <div className="navtext">Tech</div>
                        <div className="navtext">iPhone 13</div>
                        <div className="navtext">User Interface Design</div>
                    </div>
                    <hr className='hr' />
                </div>







                <div className="strip">
                    {main.map((i) => (
                        <div key={i.id}>
                            <img src={i.img} />
                            <div id='logo1'>
                                <img src={i.logo} />
                            </div>
                            <p className='mayur'>{i.text}<br />{i.text1}</p>
                            <p className='thumbnail'>{i.thumbnail}<br /> {i.thumbnail1}</p>
                        </div>

                    ))}

                    {/* <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur">Infinix Note 12:<br /> AMOLED  Helio G88 Soc!     </p><p className="thumbnail">ATC Android ToTo Company<img className="verify" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" /><br />4.2M views 2 days ago</p></div>
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur">My First UX Design case study-,<br /> This got me mu first job.</p><p className="thumbnail">Saptarshi Prakash<br />4.8K views 1 year ago</p></div>
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur"> My Mix</p><p className="thumbnail">Lopamudra Mitra, Anupam Roy,and mor</p></div>
                 
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1" ><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur">Bulbuli | Coke Studio Bangla |<br /> Season One | Ritu Raj X Nandita</p><p className="thumbnail">Coke Studio Bangla<img className="verify" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" /><br />1.5M views 2 days ago</p></div>
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur">Infinix Note 12:<br /> AMOLED  Helio G88 Soc!     </p><p className="thumbnail">ATC Android ToTo Company<img className="verify" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" /><br />4.2M views 2 days ago</p></div>
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur">My First UX Design case study-,<br /> This got me mu first job.</p><p className="thumbnail">Saptarshi Prakash<br />4.8K views 1 year ago</p></div>
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur"> My Mix</p><p className="thumbnail">Lopamudra Mitra, Anupam Roy,and mor</p></div>
                 
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1" ><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur">Bulbuli | Coke Studio Bangla |<br /> Season One | Ritu Raj X Nandita</p><p className="thumbnail">Coke Studio Bangla<img className="verify" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" /><br />1.5M views 2 days ago</p></div>
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur">Infinix Note 12:<br /> AMOLED  Helio G88 Soc!     </p><p className="thumbnail">ATC Android ToTo Company<img className="verify" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true" /><br />4.2M views 2 days ago</p></div>
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur">My First UX Design case study-,<br /> This got me mu first job.</p><p className="thumbnail">Saptarshi Prakash<br />4.8K views 1 year ago</p></div>
                        <div><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true" className='xxx' /><div id="logo1"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse 1 (1).png?raw=true" /></div><p className="mayur"> My Mix</p><p className="thumbnail">Lopamudra Mitra, Anupam Roy,and mor</p></div> */}
                </div>




            </div>




        </>
    )
}

export default Mainmenu;
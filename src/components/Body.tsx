
export default function Body() {
    return (
        <div className='body'>
            <section className="body--all-text">
            <h1 className='body--title'>
            Fun facts about React
            </h1>
            <ul className='body--facts'>
                <li className='body--fact'>Was first released in 2013</li>
                <li className='body--fact'>Was originally created by Jordan Walke</li>
                <li className='body--fact'>Has well over 100K stars on GitHub</li>
                <li className='body--fact'>Is maintained by Facebook</li>
                <li className='body--fact'>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            </section>
            <img src="/logo-background.png" className='body--background-logo'/>
        </div>
    )
}
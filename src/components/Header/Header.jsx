import './Header.scss'
import hero from '../../assets/hero.jpg';
import hero_m from '../../assets/hero_m.jpg';

export default function Header() {

    return (
        <div className="container blue">
            <header>
                <a href="https://www.ilyouthcare.com/" target="_blank">
                    <div className='mbl-hide'>
                        <img src={hero} alt="A smiling couple holds a baby" />
                    </div>
                    <div className='mbl-show' style={{ display: 'none' }}>
                        <img src={hero_m} alt="A smiling couple holds a baby" />
                    </div>
                </a>
            </header>
        </div>
    )
}
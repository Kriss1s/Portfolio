import './Home.scss';
import dev from '../assets/images/design-and-development-process.svg';

export default function Home() {
  return (
    <section className='home-main-container'>
      <div className='info-container'>
        <span className='half-visible'>{`${' <html> '}`}</span>
        <span className='half-visible body-span'>{`${' <body> '}`}</span>
        <div className='name-container'>
          <span className='half-visible'>{'<p>'}</span>
          <h2 className='head2'>Hello</h2>

          <span className='half-visible'>{'</p>'}</span>
          <span className='half-visible'>{`${' <h1> '}`}</span>

          <h1>
            I'm <span>Kris</span>
          </h1>
          <span className='half-visible'>{`${' </h1> '}`}</span>
          <span className='half-visible'>{'<p>'}</span>
          <h2 className='head2'>Front End developer</h2>

          <span className='half-visible'>{'</p>'}</span>
        </div>
        <span className='half-visible body-span'>{`${' </body> '}`}</span>
        <span className='half-visible'>{`${' </html> '}`}</span>
      </div>

      <div className='images-container'>
        <div className='images-container-circle'></div>
        <div className='images-container-main-img'>
          <img className=' main-img' src={dev} alt='developer' />
        </div>
      </div>
    </section>
  );
}

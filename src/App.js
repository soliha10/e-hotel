import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import Popular from './components/Popular/Popular';
import Steps from './components/Steps/Steps';
import Testimonial from './components/Testimonial/Testimonial';
import './index.css';
function App() {
	return (
		<div className='bg-[#FAFAFA]'>
			<section className="bg-[url('./assets/images/bg.png')] ] pb-[147px] bg-no-repeat bg-cover ">
				<Header />
				<Hero />
			</section>
			<main>
				<Steps />
				<Popular />
				<Article />
				<Offers />
				<Testimonial />
			</main>
			<Footer />
		</div>
	);
}

export default App;

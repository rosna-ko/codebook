import { Faq } from "./components/Faq"
import { FeaturedProducts } from "./components/FeaturedProducts"
import { Hero } from "./components/Hero"
import { Testimonials } from "./components/Testimonials"
import { useTitle } from '../../hooks';

export const HomePage = () => {
    useTitle("Access  Latest Computer Science eBooks");
    return (
        <main>
            <Hero/>
            <FeaturedProducts/>
            <Testimonials/>
            <Faq/>
        </main>
    )
}

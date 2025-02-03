import Navbar from "../components/NavBar";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <section className="text-center">
                <ContactForm />
            </section>
        </div>
    );
}

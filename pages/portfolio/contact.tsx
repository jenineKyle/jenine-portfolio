import Navbar from "../../components/NavBar";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <section className="p-6 text-center">
                <ContactForm />
            </section>
        </div>
    );
}

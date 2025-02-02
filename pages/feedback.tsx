import Navbar from "../components/NavBar";

export default function feedback() {
    return (
        <div>
            <Navbar />
            <section className="p-6 text-center">
                <h1 className="text-2xl font-bold">My Achievements</h1>
                <ul className="mt-4 space-y-2">
                    <li>✅ Certified Sonographer - ARDMS</li>
                    <li>🏆 Best Ultrasound Tech Award 2023</li>
                    <li>📜 5+ Years of Experience in Medical Imaging</li>
                </ul>
            </section>
        </div>
    );
}

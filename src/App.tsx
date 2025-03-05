import React from 'react';
import { Globe2, Headphones, Crown, Map, Music, Video, Check } from 'lucide-react';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white">
            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80"
                        alt="VR Experience"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-6">
                        <Globe2 className="w-12 h-12 mr-3" />
                        <h1 className="text-6xl font-bold">VrLife</h1>
                    </div>
                    <p className="text-2xl mb-8">Voyagez à travers le monde depuis votre canapé</p>
                    <p className="text-xl mb-12">Une expérience immersive unique en réalité virtuelle</p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105">
                        Commencer l'aventure
                    </button>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Une nouvelle façon de découvrir le monde</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <Map className="w-16 h-16 mx-auto mb-6 text-purple-400" />
                            <h3 className="text-2xl font-semibold mb-4">Destinations Mondiales</h3>
                            <p className="text-gray-300">Explorez les plus belles villes du monde en réalité virtuelle</p>
                        </div>
                        <div className="text-center">
                            <Music className="w-16 h-16 mx-auto mb-6 text-purple-400" />
                            <h3 className="text-2xl font-semibold mb-4">Événements Live</h3>
                            <p className="text-gray-300">Assistez à des concerts et festivals comme si vous y étiez</p>
                        </div>
                        <div className="text-center">
                            <Video className="w-16 h-16 mx-auto mb-6 text-purple-400" />
                            <h3 className="text-2xl font-semibold mb-4">Expérience Immersive</h3>
                            <p className="text-gray-300">Une qualité d'image exceptionnelle pour une immersion totale</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 bg-black/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Nos Offres</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Free Plan */}
                        <div className="bg-gradient-to-b from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 backdrop-blur-sm">
                            <Headphones className="w-12 h-12 mb-6 text-purple-400" />
                            <h3 className="text-2xl font-bold mb-4">Free</h3>
                            <p className="text-gray-300 mb-6">Parfait pour découvrir VrLife</p>
                            <p className="text-4xl font-bold mb-8">0€ <span className="text-sm font-normal">/mois</span></p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />3 villes disponibles</li>
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Qualité HD</li>
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Support basique</li>
                            </ul>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold">
                                Commencer gratuitement
                            </button>
                        </div>

                        {/* Standard Plan */}
                        <div className="bg-gradient-to-b from-purple-800/50 to-indigo-800/50 rounded-2xl p-8 backdrop-blur-sm transform scale-105">
                            <Globe2 className="w-12 h-12 mb-6 text-purple-400" />
                            <h3 className="text-2xl font-bold mb-4">Standard</h3>
                            <p className="text-gray-300 mb-6">L'essentiel de VrLife</p>
                            <p className="text-4xl font-bold mb-8">19.99€ <span className="text-sm font-normal">/mois</span></p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Toutes les villes</li>
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Événements sélectionnés</li>
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Qualité 4K</li>
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Support prioritaire</li>
                            </ul>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold">
                                Choisir Standard
                            </button>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-gradient-to-b from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 backdrop-blur-sm">
                            <Crown className="w-12 h-12 mb-6 text-purple-400" />
                            <h3 className="text-2xl font-bold mb-4">Premium</h3>
                            <p className="text-gray-300 mb-6">L'expérience ultime</p>
                            <p className="text-4xl font-bold mb-8">39.99€ <span className="text-sm font-normal">/mois</span></p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Tout le contenu Standard</li>
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Tous les événements</li>
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Diffusion en direct</li>
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Qualité 8K</li>
                                <li className="flex items-center"><Check className="w-5 h-5 mr-3 text-purple-400" />Support VIP 24/7</li>
                            </ul>
                            <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold">
                                Choisir Premium
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">Prêt à explorer le monde ?</h2>
                    <p className="text-xl mb-12">Commencez votre voyage virtuel dès aujourd'hui avec notre casque VR</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-semibold">
                            Acheter un casque VR
                        </button>
                        <button className="bg-transparent border-2 border-purple-600 hover:bg-purple-600/20 px-8 py-4 rounded-full text-xl font-semibold">
                            Louer un casque VR
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black/50 py-8 px-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Globe2 className="w-8 h-8 mr-2" />
                        <span className="text-xl font-bold">VrLife</span>
                    </div>
                    <div className="text-sm text-gray-400">
                        © 2024 VrLife. Tous droits réservés.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
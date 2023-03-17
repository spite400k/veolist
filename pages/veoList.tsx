import { useState } from 'react';
import imageSrc from '../public/image/thumbnail1.jpg'; // 相対パスや絶対パスは好みで



export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-blue-500 text-white">
            <header className="container mx-auto flex items-center justify-between px-4 py-2">
                <div className="text-2xl font-bold">Logo</div>
                <nav className="hidden md:flex">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="md:hidden">
                    <button className="text-3xl text-white focus:outline-none" onClick={toggleMenu}>
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                <nav className={`absolute md:relative top-full left-0 md:top-0 md:left-auto w-full md:w-auto bg-blue-500 ${menuOpen ? 'block' : 'hidden'}`}>
                    <ul className="md:flex md:items-center md:justify-between text-center md:text-left px-4 py-2 md:py-0">
                        <li>
                            <a href="#" className="block py-2 text-lg font-semibold hover:bg-blue-700">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-lg font-semibold hover:bg-blue-700">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-lg font-semibold hover:bg-blue-700">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 text-lg font-semibold hover:bg-blue-700">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="container mx-auto py-4 px-8">
                <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <li className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://app.veo.co/matches/test-35e8d3d5-real-madrid-fc-under-21-demo-recording-2-1ac36961" className="block">
                            <img src="/image/thumbnail1.jpg" alt="" className="w-full" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">熱狂的な試合、スタジアムを席巻</h2>
                                <p className="text-gray-700 text-base">激しい攻防が続き、熱狂的な観客からは大きな声援が上がる中、プロのサッカーチーム同士が90分間の激闘を繰り広げ、試合終了のホイッスルが鳴り、興奮冷めやらぬまま観客たちはスタジアムを後にしました。
                                </p>
                            </div>

                        </a>
                    </li>
                    <li className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://app.veo.co/matches/test-35e8d3d5-demo-recording-1-3418f4bc/" className="block">
                            <img src="/image/thumbnail2.jpg" alt="" className="w-full" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">地元リーグの激戦、熱気あふれるスタジアム</h2>
                                <p className="text-gray-700 text-base">今日は、地元のサッカーリーグで、上位を争う2チームが対戦します。両チームは、勝利を目指して全力でプレーし、ボールを狙い、激しい攻防を繰り広げます。観客からは大きな声援が上がり、熱気に包まれたスタジアムで、プロ並みのプレーが繰り広げられます。試合終了間際には、一気に攻め上がるシーンが見られ、試合結果は最後まで分からない緊張感に包まれます。
                                </p>
                            </div>
                        </a>
                    </li>
                    <li className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://app.veo.co/matches/test-35e8d3d5-real-madrid-fc-under-21-demo-recording-2-1ac36961" className="block">
                            <img src="/image/thumbnail1.jpg" alt="" className="w-full" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">熱狂的な試合、スタジアムを席巻</h2>
                                <p className="text-gray-700 text-base">激しい攻防が続き、熱狂的な観客からは大きな声援が上がる中、プロのサッカーチーム同士が90分間の激闘を繰り広げ、試合終了のホイッスルが鳴り、興奮冷めやらぬまま観客たちはスタジアムを後にしました。
                                </p>
                            </div>

                        </a>
                    </li>
                    <li className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <a href="https://app.veo.co/matches/test-35e8d3d5-real-madrid-fc-under-21-demo-recording-2-1ac36961" className="block">
                            <img src="/image/thumbnail1.jpg" alt="" className="w-full" />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">熱狂的な試合、スタジアムを席巻</h2>
                                <p className="text-gray-700 text-base">激しい攻防が続き、熱狂的な観客からは大きな声援が上がる中、プロのサッカーチーム同士が90分間の激闘を繰り広げ、試合終了のホイッスルが鳴り、興奮冷めやらぬまま観客たちはスタジアムを後にしました。
                                </p>
                            </div>

                        </a>
                    </li>
                </ul>
            </main>
        </div>
    );
}
import terminal from '../assets/terminal.png'
function Developers() {
    return (
        <div className="w-full text-white bg-black">
            <div className="max-w-[1240px] px-4 py-16 md:flex">
                <div>
                    <h1>Superpowers for DEFI developers.</h1>
                    <p>
                        Checkout the <span className="text-primary-blue">documentation</span>, the <span className="text-primary-blue">quick start</span>  or a guide below to
                        integrate your project with thousands of tokens and billions of
                        liquidity.
                    </p>
                </div>

                <div className='flex justify-center w-full py-16'>
                    <img className='max-w-[250px] shadow-lg shadow-cyan-500/50' src={terminal} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Developers
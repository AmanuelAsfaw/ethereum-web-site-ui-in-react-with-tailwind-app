function Subscribe() {
    return (
        <div className="w-full px-4 py-16 bg-black text-white text-center">
            <h1>Join Our DeFi Community</h1>
            <div className="py-4">
                <input className="p-3 rounded-3xl mr-4" type="email" name="email" id="email" placeholder="Enter you email"/>
                <button>Sign Up</button>
            </div>
            <div className="flex items-center justify-center py-2">
                <input type="checkbox"/>
                <p className="pl-2">Yes, I agree to receive email communications from DeFi.</p>
            </div>
        </div>
    )
}

export default Subscribe
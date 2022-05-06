function AboutCard({icon, heading, text}) {
    return (
        <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
            <div>
                <div className='bg-primary-blue inline-flex p-2 rounded-full'>
                    {icon}
                </div>
                <h3 className='text-xl font-bold py-4'>{heading}</h3>
                <p>{text}</p>
            </div>                                                
        </div>
    )
}

export default AboutCard
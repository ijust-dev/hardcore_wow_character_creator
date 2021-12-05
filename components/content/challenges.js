import Image from 'next/image'

export default function challenges(props) {

    return (
        <div className="flex flex-row rounded-3xl justify-center h-48">
            <div className="flex flex-col w-auto mx-3 self-start saturate-100">
                <Image 
                    src={props.a1url}
                    width={70}
                    height={70}
                />    
            </div>

            <div className="self-start w-7/12 md:w-6/12 max-w-4xl">
                <h3 className="font-header text-xl md:text-2xl text-white mb-1 font-bold text-left">
                    {props.a1name}
                </h3>
                <p className="font-body text-gray-300 text-sm text-left sm:text-md md:text-lg lg:text-xl">
                    {props.a1string}
                </p>
            </div>
        </div>
    );
}

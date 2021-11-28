import Image from 'next/image'

export default function challenges(props) {

    return (
        <div className="flex flex-row rounded-3xl justify-center">
            <div className="flex flex-col w-auto mx-3 self-center saturate-100">
                <Image 
                    src={props.a1url}
                    width={85}
                    height={85}
                />    
            </div>

            <div className="self-center text-gray-300 w-7/12 md:w-6/12 max-w-4xl my-3 text-sm sm:text-left sm:text-md md:text-lg lg:text-xl">
                <h3 className="text-xl md:text-2xl text-white mb-1 font-bold sm:text-left">
                    {props.a1name}
                </h3>
                {props.a1string}
            </div>
        </div>
    );
}

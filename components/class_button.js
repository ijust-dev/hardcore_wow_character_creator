import Image from 'next/image'

export default function class_button(props) {
    return (
        <label className="hover:cursor-pointer">
            <Image
                className={props.active == true ? 'grayscale-0 saturate-200' : 'grayscale saturate-0'}
                name={props.name}
                src={"/images/class/" + props.name.toLowerCase() + ".png"}
                width={85}
                height={85}
                alt={props.name + " class Icon"}
            />
            <input type="radio" hidden id={props.name} name="classselect"></input>
        </label>
    );
}
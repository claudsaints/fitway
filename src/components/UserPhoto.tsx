
import { Image } from "react-native"


type IImageProps = {
    size: number;
    radius?: number;
    src?: string;
    alt?: string;
}

export function UserPhoto({size, radius, src,alt, ...rest }: IImageProps){
    return(
        <Image
            height={size}
            width={size}
            src={  src ? src :"https://github.com/claudsaints.png"}
            alt={alt ? alt : "image"}
            
            
            style={{
                borderRadius: radius? radius : 24,
                backgroundColor:"#6fa2dd"
            }}

            {...rest}
        />

    )
}

import { Image } from "react-native"

type IImageProps = {
    size: number;
}

export function UserPhoto({size, ...rest }: IImageProps){
    return(
        <Image
            height={size}
            width={size}
            src="https://github.com/claudsaints.png"
            
            style={{
                borderRadius: 24,
                backgroundColor:"#fff"
            }}

            {...rest}
        />

    )
}
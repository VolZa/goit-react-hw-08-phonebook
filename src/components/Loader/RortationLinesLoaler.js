import { RotatingLines } from  'react-loader-spinner'
import { RotatingLinesLoader } from './RortationLinesLoaler.styled'

export const Loader = () => {
return  (

    <RotatingLinesLoader>
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
    </RotatingLinesLoader>
)
}

import { BackgroundCircle, Eyes, Mouth, FaceContainer } from '.'

export const Face = ({width, height, centerX, centerY, wink, closeEye}) => (
    <FaceContainer
        width={width}
        height={height}
        centerX={centerX}
        centerY={centerY}
      >
        <BackgroundCircle
            centerY={centerY}
        />
        
        <Eyes wink={wink} closeEye={closeEye} />
        
        <Mouth />
        
      </FaceContainer>
)
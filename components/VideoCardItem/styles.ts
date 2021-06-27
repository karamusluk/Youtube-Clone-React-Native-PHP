import { StyleSheet } from 'react-native'
import { textColor } from '../../hooks/useColorScheme';

const _textColor = textColor();
const styles = StyleSheet.create({
    thumbnailImage : {
        width: '100%',
        aspectRatio: 16/9
    },
    videoCard: {
    },
    timeContainer: {
        backgroundColor: '#00000099',
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        display: 'flex',
        position: 'absolute',
        right:5,
        bottom: 5
    },
    timeContainerText: {
        color: 'white',
        fontWeight: '600'
    },
    titleRow: {
        flexDirection: 'row',
        padding: 10,
    },
    titleRowAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    titleRowMiddleContainer: {
        marginHorizontal: 15,
        flex: 1,
    },
    titleRowTitle:{
        fontSize: 18,
        fontWeight: '500',
        ...{color: _textColor},
        maxWidth: '95%',
        marginBottom: 5
    },
    titleRowSubTitle: {
        fontSize: 14, 
        color: 'grey',
        fontWeight: '500'
    },
    threeDotColor: {
        color: _textColor,
        fontSize: 16
    }
})
export default styles;
import React from 'react'
import { Text, View, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 

import styles from './styles';

const VideoCardItem = () => {
    return (
        <View style={styles.videoCard}>
            {/* thumbnail */}
            <View>
                <Image style={styles.thumbnailImage} source={{uri: 'https://i.ytimg.com/vi/NpEaa2P7qZI/maxresdefault.jpg'}} />
                <View style={styles.timeContainer}>
                    <Text style={styles.timeContainerText}>15:22</Text>
                </View>
            </View>
            {/* titleRow */}
            <View style={styles.titleRow}>
                {/* AvatarImage */}
                <Image style={styles.titleRowAvatar} source={{uri: 'https://i1.rgstatic.net/ii/profile.image/567807427477504-1512387248987_Q512/Mustafa-Culban.jpg'}}/>
            
                {/* Title, subtitle view, like */}
                <View style={styles.titleRowMiddleContainer}>
                    <Text style={styles.titleRowTitle}>This is a very long Video Title that eventaully overflow to a new line</Text>
                    <Text style={styles.titleRowSubTitle}>Mustafa Culban 1.5m a month ago</Text>
                </View>
                {/* Icon */}
                <Entypo name="dots-three-vertical" size={styles.threeDotColor.fontSize} color={styles.threeDotColor.color} />
                
            </View>
        </View>
    )
}

export default VideoCardItem;
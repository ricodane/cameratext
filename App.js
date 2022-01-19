/* eslint-disable no-lone-blocks */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {connect} from 'react-redux';
import {useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Tts from 'react-native-tts';

function Camera(props) {
  const [type_camera, setType_camera] = useState(RNCamera.Constants.Type.back);

  const [id, setID] = useState();
  const [textDetect, setTextDetect] = useState();

  const camera = useRef(null);

  const handleVoice = ttsText => {
    Tts.speak(ttsText);
  };

  {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={camera}
          style={styles.preview}
          type={type_camera}
          onTextRecognized={(item, index) => {
            if (item.textBlocks) {
              setID(id, item.textBlocks);
              setTextDetect(item.textBlocks);
              return textDetect.map(item => {
                return console.log(item.value);
              });
            } else {
            }
          }}></RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'blue',
  },
});

export default Camera;

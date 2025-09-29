import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({onPress, placeholder}: Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 p-3 rounded-full px-5 py-4'>
        <Image source={icons.search} className="size-5" resizeMode='contain' tintColor={'#ab8bff'}/>
        <TextInput 
            className='flex-1 ml-2 text-white' 
            onPress={onPress}
            value=''
            onChangeText={() => {}}
            placeholder={placeholder} 
            placeholderTextColor={'#a8b5db'} 
        />
    </View>
  )
}

export default SearchBar
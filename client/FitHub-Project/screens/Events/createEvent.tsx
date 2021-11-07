import React from 'react'
import { Button, TextInput, Text, View } from 'react-native'
import { Formik } from 'formik'
import tw from 'tailwind-react-native-classnames'

export const createEvent = () => (
    <Formik
    initialValues={{ eventName: '',adress: '',description: '' , date: '', created_by: ''}}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={tw` mt-10 w-4/5 ml-8 flex `}>
        <TextInput
         style={tw`mt-4 rounded h-10 bg-white p-2 `}
         placeholder="eventName"
          onChangeText={handleChange('eventName')}
          onBlur={handleBlur('eventName')}
          value={values.eventName}
        />
       <TextInput
       style={tw`mt-4 rounded h-10 bg-white p-2 `}
          onChangeText={handleChange('adress')}
          onBlur={handleBlur('adress')}
          placeholder="adress"
          value={values.adress}
        />
        <TextInput
        style={tw`mt-4 rounded h-10 bg-white p-2 `}
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
          placeholder="description"
          value={values.description}
        />
         <TextInput
         style={tw`mt-4 rounded h-10 bg-white p-2 `}
          onChangeText={handleChange('date')}
          placeholder="date"
          onBlur={handleBlur('date')}
          value={values.date}
        />
         <TextInput
         style={tw`mt-4 rounded h-10 bg-white p-2 `}
          onChangeText={handleChange('created_by')}
          onBlur={handleBlur('created_by')}
          placeholder="created by"
          value={values.created_by}
        />
        <Button
        onPress={()=>handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
)


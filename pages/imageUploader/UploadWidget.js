// import React, { useState } from 'react';
// import { View, Button, Image } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import { get_CLOUDINARY_API_NAME, get_CLOUDINARY_UPLOAD_PRESET } from '../../../securedFiles/.CloudinarySecrets';
// import cloudinary from 'cloudinary';

// // const apiName = CloudinarySecrets.get_CLOUDINARY_API_NAME();
// // const uploadPreset = CloudinarySecrets.get_CLOUDINARY_UPLOAD_PRESET();

// // Configure Cloudinary with your credentials
// cloudinary.config({
//   cloud_name: get_CLOUDINARY_API_NAME(),
//   api_key: 'your-api-key', // Replace with your Cloudinary API key
//   api_secret: 'your-api-secret', // Replace with your Cloudinary API secret
// });

// function UploadWidget() {
//   const [image, setImage] = useState(null);

//   const handleImageUpload = () => {
//     const options = {
//       title: 'Select Image',
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };

//     // const apiName = CloudinarySecrets.get_CLOUDINARY_API_NAME();
// // const uploadPreset = CloudinarySecrets.get_CLOUDINARY_UPLOAD_PRESET();

//     ImagePicker.showImagePicker(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         // Upload the selected image to Cloudinary
//         cloudinary.v2.uploader.upload(response.uri, {
//           upload_preset: get_CLOUDINARY_UPLOAD_PRESET(),
//         })
//           .then((result) => {
//             // Save the secure URL in your app's state
//             setImage({ uri: result.secure_url });
//           })
//           .catch((error) => {
//             console.error('Cloudinary Error: ', error);
//           });
//       }
//     });
//   };

//   return (
//     <View>
//       {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
//       <Button title="Upload Product Image" onPress={handleImageUpload} />
//     </View>
//   );
// }

// export default UploadWidget;

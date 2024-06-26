export const imageUpload = async(file) =>{

    if (!file) throw new Error('No image selected');
        
    const URL = 'https://api.cloudinary.com/v1_1/drhf4zw7b/image/upload';

    const formData = new FormData();

    formData.append('upload_preset','react-todo');

    formData.append('file',file);

    try {
        
        const resp = await fetch(URL,{
            method: 'POST',
            body:formData
        });

        if (!resp.ok) throw new Error('Cant upload the image');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;
            
    } catch (error) {
        throw new Error(error.message);
    }
}
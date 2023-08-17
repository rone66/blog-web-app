const File=require("../model/fileSchema");

const imageUpload = async (req, res) => {
    try {
        const {username,filename}=req.body;
        const imgUrl =req.file.path;
        console.log(username,filename,imgUrl);
      if (req.file.path) {

        const fileData= new File({
            username,
            filename,
            imageUrl: imgUrl,
        });
        await fileData.save();
  
        return res.status(200).json({ msg: "image successfully saved" ,fileData });
    } else {
        console.log(req.file);
        return res.status(404).json({ error: "invalid" });
    }
} catch (error) {
    console.error(error);
    return res.status(400).json({ error: "some error occured" });
}
};

module.exports={imageUpload};
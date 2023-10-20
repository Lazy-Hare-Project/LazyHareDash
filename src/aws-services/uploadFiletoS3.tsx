import AWS from 'aws-sdk';
export const uploadFile = async (file:File,fileName:string) => {
    console.log(file.name);
    const S3_BUCKET = "aboho-files-salereport";
    const REGION = "us-east-1";
    const objectKey = `keepa-export/${fileName}`;
    AWS.config.update({
        accessKeyId:"AKIA44346GVDDNDLURFZ",
        secretAccessKey:"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"
    });
    const s3 = new AWS.S3({
        params: {Bucket: S3_BUCKET},
        region: REGION,
    });

    const params = {
        Bucket: S3_BUCKET,
        Key: objectKey,
        Body: file,
    }
    let upload = s3
    .putObject(params)
    .on("httpUploadProgress",(evt)=> {
        console.log("Uploading " + parseInt("" + (evt.loaded * 100) / evt.total) + "%");
    })
    .promise();

    await upload.then(() => {
        alert("Upload success");
    })
}

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import S3 from "aws-sdk/clients/s3";

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY


const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})
//download from s3
export function getImage(filename: string) {
    const downloadParams = {
        Bucket: bucketName,
        Key: filename
    };
    return s3.getObject(downloadParams).createReadStream()
}

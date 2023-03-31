import { defineEventHandler } from 'h3';
import * as dotenv from 'dotenv';
import S3 from 'aws-sdk/clients/s3';

dotenv.config();
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
});
function getImage(filename) {
  const downloadParams = {
    Bucket: bucketName,
    Key: filename
  };
  return s3.getObject(downloadParams).createReadStream();
}

const _name__get = defineEventHandler(async (event) => {
  const query = event.context.params.name;
  const docs = await getImage(query);
  return docs;
});

export { _name__get as default };
//# sourceMappingURL=_name_.get.mjs.map

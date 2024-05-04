import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as AWS from 'aws-sdk';

@Injectable()
export class FilesService {
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
  });

  async uploadFile(file: Express.Multer.File) {
    const { originalname } = file;

    const splittedName = originalname.split('.');
    const extension = splittedName[splittedName.length - 1];

    try {
      return await this.s3.upload({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `${[uuidv4(), extension].join(".")}`,
        Body: file.buffer,
        ContentType: file.mimetype,
        ContentLength: file.size
      }).promise();
    } catch (error) {
      console.log({error})            
      throw new InternalServerErrorException("AWS upload error")
    }
  }
}

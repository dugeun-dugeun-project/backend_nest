import { AfterLoad, BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { CreateRecordDTO } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { isArray, isObject } from 'class-validator';
import { User } from 'src/user/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Book } from 'src/entities/book.entity';

@Entity()
export class Record {
    @ApiProperty({ example: 1 , description: 'record_id' })   
    @PrimaryGeneratedColumn({name:'record_id'})
    recordId:number;
    
    @ApiProperty({ example: '39834244', description: 'book_isbn' })
    @ManyToOne(() => Book, book => book.records)
    @Column({name:'book_isbn'})
    bookIsbn: string;

    @ApiProperty({ example: '다음권이 너무 궁금하다. ', description: '독서 기록 글' })
    @Column()
    text: string;

    @ApiProperty({ example: '1684897517164_86', description: '독서기록 사진 key값'})
    @Column({name:'record_img'})
    recordImg: string;

    @ApiProperty({ example: "https://avostorage.s3.amazonaws.com/1684897517164_86", description: '독서기록 사진 url' })
    @Column({name:'record_img_url'})
    recordImgUrl: string;

    @ApiProperty({ example: [{"id": 1, "data": "tag1"}, {"id": 2, "data": "tag2"}, {"id": 3, "data": "tag3"}], description: 'tags' })
    @Column({ type: 'json', nullable: true })
    tags: { id: number, data: string }[] ;
    
    @ApiProperty({ example: 12934829348 , description: 'userId' })   
    @ManyToOne(() => User, user => user.records)
    @Column({name:'user_id'})
    userId: string;

    @ApiProperty({ example: '2023-05-24T03:13:33.488Z', description: '독서기록 생성 날짜 ' })
    @Column({name:'created_at', type: 'datetime'})
    createdAt:Date;

    @ApiProperty({ example: '2023-05-24T03:13:33.488Z', description: '독서기록 수정 날짜' })   
    @Column({nullable:true, name:'updated_at', type: 'datetime'})
    updatedAt:Date;

    @ApiProperty({ example: '2023-05-21T00:00:00.000Z', description: '책 읽은 날짜' })   
    @Column({ name:'read_at', type: 'datetime'})
    readAt:Date;
    
    @BeforeInsert()
    @BeforeUpdate()
    private convertDate(){
        if(typeof this.readAt === 'string'){
            this.readAt = new Date(this.readAt);
        }
    }

    @BeforeInsert()
    private addcreateAt(){
        this.createdAt = new Date();
    }

    @BeforeUpdate()
    private addupateAt(){
        this.updatedAt = new Date();
    }

    set update(dto: UpdateRecordDto){
        Object.assign(this,dto);
    }


}

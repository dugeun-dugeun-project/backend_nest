import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDate, IsOptional, IsArray } from 'class-validator';

export class CreateRecordDTO {
  @ApiProperty({ example: '미움 받을 용기', description: '책 제목' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1467038', description: '책 사진 URL' })
  @IsString()
  thumbnail: string;

  @ApiProperty({ example: '8996991341', description: 'bookIsbn' })
  @IsString()
  bookIsbn: string;

  @ApiProperty({ example: '이 책이 내 최애다.', description: '독서기록' })
  @IsString()
  text: string;

  @ApiProperty({ example: '1685876995200_52', description: '독서기록의 사진 name(key)' })
  @IsString()
  recordImg: string;

  @ApiProperty({ example: 'https://darak-book-bucket.s3.ap-northeast-2.amazonaws.com/1685876995200_52', description: '독서기록의 사진 url' })
  @IsString()
  recordImgUrl: string;

  @ApiProperty({ example: [{"id": 1, "data": "마음단단"}, {"id": 2, "data": "자기계발"}], description: '독서기록의 tag' })
  @IsOptional()
  @IsArray()
  tags: { id: number, data: string }[] ;

  @ApiProperty({ example: '2023-05-21', description: '책 읽은 날짜' })
  @IsString()
  readAt: string;

  userId: string;

}


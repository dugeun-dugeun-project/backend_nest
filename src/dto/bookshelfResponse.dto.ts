import { ApiProperty } from '@nestjs/swagger';
import { BookDTO } from 'src/bookshelf/book.dto';

export class bookshelfNotfoundDTO{
    @ApiProperty({ example: "사용자의 책장에 저장 돼 있지 않은 책입니다."})
    message: string;
}
export class bookshelfForbiddenDTO{
    @ApiProperty({ example: "책의 독서기록이 작성 돼 있기 때문에 삭제가 안됩니다."})
    message: string;
}

export class bookshelfResDTO{
    @ApiProperty({ example: "책장 추천: 추천 사용자의 책장에 담겨 있는 책 3권으로 이루어진 배열"})
    bookshelfves:BookDTO[];
    @ApiProperty({ example: "책장 추천: 추천 사용자의 3명 id 배열"})
    users:string[];


}